import * as fs from "fs";
import * as path from "path";

export function getCreditsFile(filePath: string): string[] {
  const content = fs.readFileSync(
    path.join(filePath, "assets", "minecraft", "texts", "splashes.txt"),
    { encoding: "utf-8" }
  ) as string;
  return content.replaceAll("\r", "").split("\n");
}

export function setCreditsFile(filePath: string, newCredits: string[]) {
  let finalCredits = "";
  newCredits.map((credit) => {
    finalCredits += `${credit}\n`;
  });
  return fs.writeFileSync(
    path.join(filePath, "assets", "minecraft", "texts", "splashes.txt"),
    finalCredits,
    { encoding: "utf-8" }
  );
}
