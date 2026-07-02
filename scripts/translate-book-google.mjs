import fs from "node:fs";
import path from "node:path";

const supportedTargets = new Set(["en", "es", "fr", "de", "ar"]);
const targetLocale = process.argv[2];
const execute = process.argv.includes("--execute");
const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY;

if (!targetLocale || !supportedTargets.has(targetLocale)) {
  console.error("Usage: node scripts/translate-book-google.mjs <en|es|fr|de|ar> [--execute]");
  process.exit(1);
}

const sourceDirectory = path.join(process.cwd(), "books", "torch-and-horizon", "zh");
const outputDirectory = path.join(process.cwd(), "books", "torch-and-horizon", targetLocale);
const files = fs
  .readdirSync(sourceDirectory)
  .filter((fileName) => fileName.endsWith(".md") && fileName !== "README.md")
  .sort((a, b) => a.localeCompare(b, "en"));

console.log("Google Translate scaffold for ClimateOS Living Books");
console.log("Dry run:", execute ? "NO" : "YES");
console.log("Target locale:", targetLocale);
console.log("Source files:", files.length);

if (!execute) {
  console.log("No translation API call was made. Add --execute only after review and with GOOGLE_TRANSLATE_API_KEY set.");
  process.exit(0);
}

if (!apiKey) {
  console.error("Missing GOOGLE_TRANSLATE_API_KEY environment variable.");
  process.exit(1);
}

fs.mkdirSync(outputDirectory, { recursive: true });

for (const fileName of files) {
  const sourcePath = path.join(sourceDirectory, fileName);
  const outputPath = path.join(outputDirectory, fileName);
  const source = fs.readFileSync(sourcePath, "utf8");

  console.log(`Would translate ${fileName} -> ${outputPath}`);
  console.log(`Source characters: ${Array.from(source).length}`);
}

console.log("This scaffold preserves Markdown filenames and output paths, but does not include a live API client yet.");
