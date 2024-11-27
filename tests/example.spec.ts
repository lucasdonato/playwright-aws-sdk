import { test, expect } from "@playwright/test";
import { listFilesInBucket } from "./s3-functions";

test("Deve listar arquivos em um bucket S3", async () => {
  const bucketName = "meu-bucket"; // Substitua pelo nome do seu bucket

  try {
    // Chame a função para listar arquivos
    const files = await listFilesInBucket(bucketName);

    console.log("Arquivos no bucket:", files);

    // Validação: Verifique se a lista de arquivos não está vazia
    expect(files).toBeTruthy(); // Garante que algo foi retornado
    expect(files.length).toBeGreaterThan(0); // Garante que pelo menos um arquivo existe

    // Exemplo: Valide um arquivo específico (opcional)
    const expectedFile = "arquivo1.txt"; // Substitua pelo arquivo esperado
    expect(files).toContain(expectedFile);
  } catch (error) {
    console.error("Erro ao listar arquivos:", error);
    throw error; // Lance o erro para falhar o teste
  }
});