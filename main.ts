import { mkdirSync, writeFileSync } from "node:fs";

// Write the contest entry to the requested output directory.
const text = "Monday morning, the office printer asked me to collect my thoughts. It printed my resignation.";
if ([...text].length < 1 || [...text].length > 200 || !text.trim()) {
  throw new Error("Entry must contain 1-200 non-whitespace characters.");
}
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, text, "utf8");
