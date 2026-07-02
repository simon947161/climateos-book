import fs from "node:fs";
import path from "node:path";

const supportedTargets = new Set(["en", "es", "fr", "de", "ar"]);
const args = parseArgs(process.argv.slice(2));
const targetLocale = args.target;
const execute = args.execute;
const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY;

if (!targetLocale || !supportedTargets.has(targetLocale)) {
  console.error(
    "Usage: node scripts/translate-book-google.mjs <en|es|fr|de|ar> [--limit N] [--files slug[,slug]] [--execute]",
  );
  console.error(
    "   or: node scripts/translate-book-google.mjs --target <en|es|fr|de|ar> [--limit N] [--files slug[,slug]] [--execute]",
  );
  process.exit(1);
}

const sourceDirectory = path.join(process.cwd(), "books", "torch-and-horizon", "zh");
const outputDirectory = path.join(process.cwd(), "books", "torch-and-horizon", targetLocale);
const allFiles = fs
  .readdirSync(sourceDirectory)
  .filter((fileName) => fileName.endsWith(".md") && fileName !== "README.md")
  .sort((a, b) => a.localeCompare(b, "en"));
const files = selectFiles(allFiles, args.files, args.limit);

console.log("Google Translate pilot scaffold for ClimateOS Living Books");
console.log("Dry run:", execute ? "NO" : "YES");
console.log("Target locale:", targetLocale);
console.log("Available source files:", allFiles.length);
console.log("Selected source files:", files.length);
console.log("Required output status: machine-draft");
console.log("Output directory:", outputDirectory);
console.log("");

for (const fileName of files) {
  const sourcePath = path.join(sourceDirectory, fileName);
  const source = fs.readFileSync(sourcePath, "utf8");
  console.log(`${fileName}: ${Array.from(source).length} source characters`);
}

if (!execute) {
  console.log("");
  console.log("No translation API call was made.");
  console.log(
    "Add --execute only after explicit user authorization and with GOOGLE_TRANSLATE_API_KEY set in the environment.",
  );
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
  const translated = await translateWithGoogle(source, targetLocale, apiKey);

  fs.writeFileSync(outputPath, withMachineDraftMetadata(translated, fileName, targetLocale), "utf8");
  console.log(`Wrote machine-draft translation: ${outputPath}`);
}

console.log("Do not mark generated output as human-reviewed without separate review evidence.");

function parseArgs(rawArgs) {
  const parsed = {
    target: undefined,
    limit: undefined,
    files: undefined,
    execute: false,
  };

  for (let index = 0; index < rawArgs.length; index += 1) {
    const arg = rawArgs[index];

    if (arg === "--execute") {
      parsed.execute = true;
      continue;
    }

    if (arg === "--target") {
      parsed.target = rawArgs[index + 1];
      index += 1;
      continue;
    }

    if (arg === "--limit") {
      const rawLimit = rawArgs[index + 1];
      const limit = Number.parseInt(rawLimit, 10);

      if (!Number.isInteger(limit) || limit < 1) {
        console.error("--limit must be a positive integer.");
        process.exit(1);
      }

      parsed.limit = limit;
      index += 1;
      continue;
    }

    if (arg === "--files") {
      const rawFiles = rawArgs[index + 1];

      if (!rawFiles) {
        console.error("--files requires one or more comma-separated slugs.");
        process.exit(1);
      }

      parsed.files = rawFiles
        .split(",")
        .map((file) => file.trim())
        .filter(Boolean);
      index += 1;
      continue;
    }

    if (!arg.startsWith("--") && !parsed.target) {
      parsed.target = arg;
      continue;
    }

    console.error(`Unknown argument: ${arg}`);
    process.exit(1);
  }

  return parsed;
}

function selectFiles(allFiles, requestedFiles, limit) {
  let selected = allFiles;

  if (requestedFiles && requestedFiles.length > 0) {
    const requestedFileNames = requestedFiles.map((file) =>
      file.endsWith(".md") ? file : `${file}.md`,
    );
    const missing = requestedFileNames.filter((fileName) => !allFiles.includes(fileName));

    if (missing.length > 0) {
      console.error(`Requested source file(s) not found: ${missing.join(", ")}`);
      process.exit(1);
    }

    selected = requestedFileNames;
  }

  if (limit) {
    selected = selected.slice(0, limit);
  }

  return selected;
}

async function translateWithGoogle(text, target, key) {
  const response = await fetch(`https://translation.googleapis.com/language/translate/v2?key=${key}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      q: text,
      source: "zh",
      target,
      format: "text",
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Google Translate request failed: ${response.status} ${errorText}`);
  }

  const payload = await response.json();
  return payload.data.translations[0].translatedText;
}

function withMachineDraftMetadata(content, sourceFile, target) {
  return `---\ntranslation_status: machine-draft\nsource_locale: zh\ntarget_locale: ${target}\nsource_file: ${sourceFile}\nhuman_reviewed: false\n---\n\n${content}\n`;
}
