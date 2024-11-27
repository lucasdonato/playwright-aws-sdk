import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

// Inicialize o cliente S3
const s3Client = new S3Client({
  region: 'us-east-1', 
  credentials: {
    accessKeyId: 'process.env.AWS_ACCESS_KEY_ID', 
    secretAccessKey: 'process.env.AWS_SECRET_ACCESS_KEY', 
  },
});

/**
 * Lista objetos em um bucket S3
 * @param bucketName - Nome do bucket
 * @returns Lista de nomes dos objetos no bucket
 */
export const listFilesInBucket = async (bucketName: string): Promise<string[]> => {
  try {
    // Comando para listar objetos
    const command = new ListObjectsV2Command({
      Bucket: bucketName,
    });

    const response = await s3Client.send(command);

    // Extraia os nomes dos arquivos da resposta
    const fileNames = response.Contents?.map((item) => item.Key || "") || [];

    return fileNames;
  } catch (error) {
    console.error("Erro ao listar arquivos no bucket:", error);
    throw error;
  }
};
