import fs from "fs";
import fetch from "node-fetch";
import path from "path";
import { fileURLToPath } from "url";

// Convert import.meta.url to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SHEET_API_URL =
"https://script.google.com/macros/s/AKfycbyvbQqJf_Qowp5kWNOeabCBz9YyXaE4NZISC5qXl81D8Y6S41o9UMcmsBfiCnJilEc9/exec"

// Use path.join to create a relative path
const OUTPUT_FILE = path.join(__dirname, "src/app/variables.css");
const fetchAndWriteCSS = async () => {
  try {
    const response = await fetch(SHEET_API_URL);
    const cssContent = await response.text();
    fs.writeFileSync(OUTPUT_FILE, cssContent);
    console.log(`[${new Date().toLocaleTimeString()}] ✅ CSS updated`);
  } catch (error) {
    console.error(
      `[${new Date().toLocaleTimeString()}] ❌ Error:`,
      error.message
    );
  }
};

setInterval(fetchAndWriteCSS, 1000);
fetchAndWriteCSS();
