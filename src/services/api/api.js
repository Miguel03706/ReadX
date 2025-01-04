import { config, S3 } from 'aws-sdk';

// Configurar a região e credenciais
config.update({
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
    region: process.env.NEXT_PUBLIC_AWS_REGION,
});

// Inicializar o cliente S3
const s3 = new S3();

// Nome do bucket
const BUCKET_NAME = process.env.NEXT_PUBLIC_AWS_BUCKET_NAME;

// Upload de um arquivo
async function uploadFile(fileName, fileContent, fileFolder) {
    const params = {
        Bucket: BUCKET_NAME + fileFolder,
        Key: fileName,
        Body: fileContent,
    };

    try {
        const result = await s3.upload(params).promise();
        console.log('Arquivo enviado com sucesso:', result.Location);
        return result;
    } catch (error) {
        console.error('Erro ao enviar o arquivo:', error);
        throw error;
    }
}

// Listar arquivos no bucket
async function listFiles(fileFolder) {
    const params = {
        Bucket: BUCKET_NAME + fileFolder,
    };

    try {
        const result = await s3.listObjectsV2(params).promise();
        console.log('Arquivos no bucket:', result.Contents);
        return result.Contents;
    } catch (error) {
        console.error('Erro ao listar arquivos:', error);
        throw error;
    }
}

// Baixar um arquivo
async function getFile(fileName, fileFolder) {
    const params = {
        Bucket: BUCKET_NAME + fileFolder,
        Key: fileName,
    };

    try {
        const result = await s3.getObject(params).promise();
        console.log('Arquivo baixado com sucesso');
        return result.Body;
    } catch (error) {
        console.error('Erro ao baixar o arquivo:', error);
        throw error;
    }
}

// Excluir um arquivo
async function deleteFile(fileName, fileFolder) {
    const params = {
        Bucket: BUCKET_NAME + fileFolder,
        Key: fileName,
    };

    try {
        await s3.deleteObject(params).promise();
        console.log('Arquivo excluído com sucesso');
    } catch (error) {
        console.error('Erro ao excluir o arquivo:', error);
        throw error;
    }
}

// Exportar as funções
export default {
    uploadFile,
    listFiles,
    getFile,
    deleteFile,
};
