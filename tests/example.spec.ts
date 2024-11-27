import { test, expect } from "@playwright/test";
import { listFilesInBucket } from "./s3-functions";

test("Deve listar arquivos em um bucket S3", async () => {
  const bucketName = "meu-bucket";

    const files = await listFilesInBucket(bucketName);

    console.log("Arquivos no bucket:", files);

    expect(files.length).toBeGreaterThan(0);

    // Exemplo: Valide um arquivo específico (opcional)
    const expectedFile = "arquivo1.txt"; // Substitua pelo arquivo esperado
    expect(files).toContain(expectedFile);
});