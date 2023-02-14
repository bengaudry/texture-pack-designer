import * as fs from "fs";
import * as path from "path";

export function getSplashesFile(filePath: string): string[] {
  const content = fs.readFileSync(
    path.join(filePath, "assets", "minecraft", "texts", "splashes.txt"),
    { encoding: "utf-8" }
  ) as string;
  return content
    .replaceAll("\r", "")
    .split("\n")
    .filter((item: string) => item !== "");
}

export function setSplashesFile(filePath: string, newCredits: string[]) {
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
