import { mkdirSync, writeFileSync } from "node:fs";

// 227 code points / 227 bytes, no trailing newline: bytes are the tie-break,
// so the text is written exactly as-is, nothing added.
const TEXT =
  "Far below the surface the light comes down in pale shafts, and the dust in the water drifts through them. Nothing down here hurries. The shafts move with the sun, and the water holds them, and holds them, until the day is gone.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
