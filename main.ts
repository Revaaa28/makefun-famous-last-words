// Famous Last Words at 1 Percent — make.fun entry
// Writes the chosen one-line farewell to /output/entry.txt.
// Chosen line (see candidates.md, rank 1 of 8 by manual judging against the kit's
// 5-criterion brief): petty-revenge twist, phone's own voice, punch at the end.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "Before I go \u2014 I deleted your alarm. Sweet dreams.";

// Self-check: the same gate the sealed scorer applies (RULES.txt) —
// /output/entry.txt must be UTF-8 text of 1–199 characters, not only
// whitespace. Fail loudly instead of writing an invalid entry.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 199) {
  console.error(`entry is ${chars.length} characters, must be 1-199`);
  process.exit(1);
}
if (LINE.trim().length === 0) {
  console.error("entry is only whitespace");
  process.exit(1);
}
if (Buffer.from(LINE, "utf8").toString("utf8") !== LINE) {
  console.error("entry is not valid UTF-8 text");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${chars.length} characters to /output/entry.txt`);
