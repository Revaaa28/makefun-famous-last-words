// Famous Last Words at 1 Percent — make.fun entry
// Writes the chosen one-line farewell to /output/entry.txt.
// Chosen line (see candidates.md, rank 1 of 8 by manual judging against the kit's
// 5-criterion brief): petty-revenge twist, phone's own voice, punch at the end.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "Before I go \u2014 I deleted your alarm. Sweet dreams.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
