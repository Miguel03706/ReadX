import React, { useRef } from 'react';

const UploadPDF: React.FC = () => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0]; // Verifica se existe um arquivo selecionado
        if (selectedFile && selectedFile.type === 'application/pdf') {
            try {
                // Usando File System Access API (se suportado)
                if ('showSaveFilePicker' in window) {
                    const fileHandle = await (window as any).showSaveFilePicker({
                        suggestedName: selectedFile.name,
                        types: [
                            {
                                description: 'PDF Files',
                                accept: { 'application/pdf': ['.pdf'] },
                            },
                        ],
                    });

                    const writable = await fileHandle.createWritable();
                    await writable.write(selectedFile);
                    await writable.close();
                    alert('Arquivo salvo com sucesso!');
                } else {
                    // Fallback para download via URL
                    const blobUrl = URL.createObjectURL(selectedFile);
                    const link = document.createElement('a');
                    link.href = blobUrl;
                    link.download = selectedFile.name;
                    link.click();
                    URL.revokeObjectURL(blobUrl); // Limpa o URL
                    alert('Arquivo baixado com sucesso!');
                }
            } catch (error) {
                console.error('Erro ao salvar o arquivo:', error);
                alert('Erro ao salvar o arquivo.');
            }
        } else {
            alert('Por favor, selecione um arquivo PDF.');
        }
    };

    const handleClick = () => {
        fileInputRef.current?.click(); // Simula um clique no input invisível
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
};

export default UploadPDF;
