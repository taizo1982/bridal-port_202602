import path from "path";
import { fileURLToPath } from "url";
import { stat, writeFile } from "fs/promises";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const assetsDir = path.resolve(__dirname, "../src/assets");

const pngImages = [
  "2927b6ac43f0939a85bca96267f3fa2a187c2bd2.png",
  "6fe7d929f4abf0a9fc915a7c7ebcc30fcf034131.png",
  "79b7f76b05327330e4471728394604adcb07148d.png",
  "7c2373c068f4d4ae4b150044e0aa9c6cbb95cbab.png",
  "b29d72b932bc03012c283d26e62b9d662d1c5861.png",
  "c29107eecdbb8d2af774d123974ff110ca535933.png",
];

async function needsUpdate(inputPath, outputPath) {
  try {
    const [inputStat, outputStat] = await Promise.all([
      stat(inputPath),
      stat(outputPath),
    ]);
    return inputStat.mtimeMs > outputStat.mtimeMs;
  } catch (error) {
    // If the output does not exist yet, we need to create it.
    if (error.code === "ENOENT") {
      return true;
    }
    throw error;
  }
}

async function convertImage(pngFile) {
  const inputPath = path.join(assetsDir, pngFile);
  const baseName = pngFile.replace(/\.png$/i, "");

  const targets = [
    {
      format: "webp",
      output: path.join(assetsDir, `${baseName}.webp`),
      options: { quality: 80 },
    },
    {
      format: "avif",
      output: path.join(assetsDir, `${baseName}.avif`),
      options: { quality: 60 },
    },
  ];

  const image = sharp(inputPath);

  for (const target of targets) {
    if (!(await needsUpdate(inputPath, target.output))) {
      continue;
    }

    let buffer;
    if (target.format === "webp") {
      buffer = await image.clone().webp(target.options).toBuffer();
    } else if (target.format === "avif") {
      buffer = await image.clone().avif(target.options).toBuffer();
    } else {
      continue;
    }

    await writeFile(target.output, buffer);
    console.log(
      `Optimized ${pngFile} -> ${path.basename(target.output)} (${target.format})`,
    );
  }
}

async function run() {
  await Promise.all(pngImages.map((png) => convertImage(png)));
}

run().catch((error) => {
  console.error("Image optimization failed:", error);
  process.exitCode = 1;
});
