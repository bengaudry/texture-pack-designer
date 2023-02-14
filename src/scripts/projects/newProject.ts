import * as fs from "fs";
import path from "node:path";
import defaultCredits from "./res/credits";
import defaultSplashes from "./res/splashes";
import defaultPostCredits from "./res/postcredits";
import defaultEnd from "./res/end";

function generatePackMeta(description: string) {
  return `{
  "pack": {
    "pack_format": 11,
    "description": "${description}"
  }
}`;
}

function generatePackConfig(resolution: string): string {
  return `{
  "texturesResolution": "${resolution}" 
}`;
}

export function createProject(props: {
  name: string;
  description: string;
  texturesResolution: string;
  minecraftPath: string;
}) {
  const packPath = path.join(props.minecraftPath, "resourcepacks", props.name);

  // Creates the pack's main folder
  fs.mkdirSync(packPath);

  // Creates the pack's assets folder
  const assetsFolderPath = path.join(packPath, "assets");
  fs.mkdirSync(assetsFolderPath);

  // Creates the pack.mcmeta file
  fs.writeFileSync(
    path.join(packPath, "pack.mcmeta"),
    generatePackMeta(props.description)
  );

  // Creates the projects characteristics :
  fs.writeFileSync(
    path.join(packPath, "tpd.config.json"),
    generatePackConfig(props.texturesResolution)
  );

  // Creates the folders in assets folder
  const minecraftFolderPath = path.join(assetsFolderPath, "minecraft");
  fs.mkdirSync(minecraftFolderPath);
  fs.mkdirSync(path.join(minecraftFolderPath, "atlases"));
  fs.mkdirSync(path.join(minecraftFolderPath, "blockstates"));
  fs.mkdirSync(path.join(minecraftFolderPath, "font"));
  fs.mkdirSync(path.join(minecraftFolderPath, "lang"));
  fs.mkdirSync(path.join(minecraftFolderPath, "models"));
  fs.mkdirSync(path.join(minecraftFolderPath, "particles"));
  fs.mkdirSync(path.join(minecraftFolderPath, "shaders"));
  fs.mkdirSync(path.join(minecraftFolderPath, "texts"));
  fs.mkdirSync(path.join(minecraftFolderPath, "textures"));

  // Creates the files in the texts folder
  const textsFolderPath = path.join(minecraftFolderPath, "texts");
  fs.writeFileSync(path.join(textsFolderPath, "credits.json"), defaultCredits);
  fs.writeFileSync(path.join(textsFolderPath, "end.txt"), defaultEnd);
  fs.writeFileSync(
    path.join(textsFolderPath, "postcredits.txt"),
    defaultPostCredits
  );
  fs.writeFileSync(path.join(textsFolderPath, "splashes.txt"), defaultSplashes);
}
