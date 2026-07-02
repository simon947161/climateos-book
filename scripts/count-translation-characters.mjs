import fs from "node:fs";
import path from "node:path";

const sourceDirectory = path.join(process.cwd(), "books", "torch-and-horizon", "zh");
const targetLocales = ["en", "es", "fr", "de", "ar"];

if (!fs.existsSync(sourceDirectory)) {
  console.error(`Missing source directory: ${sourceDirectory}`);
  process.exit(1);
}

const files = fs
  .readdirSync(sourceDirectory)
  .filter((fileName) => fileName.endsWith(".md") && fileName !== "README.md")
  .sort((a, b) => a.localeCompare(b, "en"));

let totalCharacters = 0;

console.log("ClimateOS Living Book source character count");
console.log("");

for (const fileName of files) {
  const content = fs.readFileSync(path.join(sourceDirectory, fileName), "utf8");
  const characters = Array.from(content).filter((character) => !/\s/.test(character)).length;
  totalCharacters += characters;
  console.log(`${fileName}: ${characters}`);
}

console.log("");
console.log(`Chinese chapter files: ${files.length}`);
console.log(`Chinese total source characters: ${totalCharacters}`);
console.log(`Target locales: ${targetLocales.join(", ")}`);
console.log(`Estimated source characters for five-language translation: ${totalCharacters * targetLocales.length}`);
console.log("");
console.log("No API calls were made.");
