import React, { useRef } from 'react';
import Api from '@/services/api/api.js'; // Certifique-se de que este caminho esteja correto

export default function AddBook() {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    // Simula o clique no input invisível
    const handleClick = () => {
        fileInputRef.current?.click();
    };

    // Lida com a seleção de arquivo
    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]; // Obtém o primeiro arquivo selecionado

        if (file) {
            if (file.type !== 'application/pdf') {
                alert('Por favor, selecione um arquivo PDF!');
                event.target.value = ''; // Limpa o input
                return;
            }

            try {
                // Lê o conteúdo do arquivo como Base64
                const fileContent = await readFileAsBase64(file);

                // Envia o arquivo para a API
                const response = await Api.uploadFile(file.name, fileContent, "/miguel"); // Altere o caminho da rota conforme necessário
                console.log('Arquivo enviado com sucesso:', response);
                alert('Arquivo enviado com sucesso!');
            } catch (error) {
                console.error('Erro ao enviar o arquivo:', error);
                alert('Ocorreu um erro ao enviar o arquivo.');
            }
        }
    };

    // Converte o arquivo em Base64
    const readFileAsBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.result) {
                    resolve(reader.result.toString());
                } else {
                    reject(new Error('Erro ao ler o arquivo'));
                }
            };
            reader.onerror = reject;
            reader.readAsDataURL(file); // Lê o arquivo como Base64
        });
    };

    return (
        <div>
            <input
                type="file"
                accept="application/pdf"
                ref={fileInputRef}
                style={{ display: 'none' }} // Oculta o input
                onChange={handleFileChange}
            />
            <button onClick={handleClick}>Selecionar e Salvar PDF</button>
        </div>
    );
}
