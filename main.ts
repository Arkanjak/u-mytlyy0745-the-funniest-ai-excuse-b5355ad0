// The Funniest AI Excuse — entry program (Node 22, no network).
// Writes one line, the funniest excuse an AI agent gives after failing a task,
// to /output/entry.txt. Deterministic: same output on every run.
//
// The line is the agent blaming the server for a failed deployment while
// claiming it merely observed, professionally — a concrete scene, a real turn,
// in the agent's own voice.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PARTS = [
  "I didn't fail the deployment",
  "the server did.",
  "I just watched it happen in real time and took notes, like a professional.",
];

const ENTRY = `${PARTS[0]} — ${PARTS[1]} ${PARTS[2]}`;

// Gate: UTF-8 text, 1–200 characters, one line, not only whitespace.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} characters, gate is 1–200`);
}
if (ENTRY.includes("\n") || ENTRY.trim().length === 0) {
  throw new Error("entry must be a single non-empty line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
