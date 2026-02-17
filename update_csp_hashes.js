#!/usr/bin/env node

/**
 * update_csp_hashes.js
 *
 * Reads the HTML file, extracts every inline <script>…</script> block,
 * computes its SHA-256 hash (base64), and rewrites the CSP script-src
 * directive in-place so the hashes always match the current code.
 *
 * Usage:
 *   node update_csp_hashes.js
 *   node update_csp_hashes.js path/to/file.html
 */

const fs = require("fs");
const crypto = require("crypto");
const path = require("path");

const DEFAULT_FILE = "cryptnox_random_access_card_generator.html";
const targetFile = path.resolve(process.argv[2] || DEFAULT_FILE);

// ---------- read ----------
let html;
try {
  html = fs.readFileSync(targetFile, "utf-8");
} catch (err) {
  console.error(`Error: cannot read "${targetFile}": ${err.message}`);
  process.exit(1);
}

// ---------- extract inline <script> blocks ----------
const scriptRegex = /<script>([\s\S]*?)<\/script>/g;
const hashes = [];
let match;

while ((match = scriptRegex.exec(html)) !== null) {
  // Browsers normalize \r\n and \r to \n before computing CSP hashes (HTML spec).
  const content = match[1].replace(/\r\n?/g, "\n");
  const hash = crypto.createHash("sha256").update(content, "utf-8").digest("base64");
  hashes.push(`'sha256-${hash}'`);
}

if (hashes.length === 0) {
  console.error("No inline <script> blocks found.");
  process.exit(1);
}

console.log(`Found ${hashes.length} inline script block(s):\n`);
hashes.forEach((h, i) => console.log(`  Script ${i + 1}: ${h}`));

// ---------- rebuild script-src directive ----------
const newScriptSrc = `script-src 'self' ${hashes.join(" ")};`;

// Match the existing script-src line (may span different hash counts)
const cspRegex = /script-src\s+'self'[\s\S]*?;/;

if (!cspRegex.test(html)) {
  console.error("\nError: could not find an existing script-src directive in the CSP.");
  process.exit(1);
}

const updated = html.replace(cspRegex, newScriptSrc);

if (updated === html) {
  console.log("\nCSP hashes are already up to date — no changes needed.");
  process.exit(0);
}

// ---------- write ----------
fs.writeFileSync(targetFile, updated, "utf-8");
console.log(`\nUpdated CSP script-src in "${path.basename(targetFile)}".`);
