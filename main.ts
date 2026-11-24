import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "I'm a developer — I turn coffee into code, code into bugs, and bugs into 'features'.";

const length = [...TEXT].length;
if (length < 1 || length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
console.log(TEXT);
