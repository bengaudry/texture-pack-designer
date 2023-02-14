import { createProject } from "@/scripts/projects/newProject";
import { useState } from "react";
import * as fs from "fs";
import path from "node:path";

export function ProjectManager(props: { minecraftPath: string }) {
  const [newProjectName, setNewProjectName] = useState<string>("");

  return (
    <div>
      <h1>New resource pack</h1>
      <input
        type="text"
        name="pack-name"
        placeholder="Pack name"
        value={newProjectName}
        onChange={(event) => setNewProjectName(event.target.value)}
      />
      <button
        type="submit"
        onClick={() => {
          createProject({
            name: newProjectName,
            minecraftPath: props.minecraftPath,
          });
        }}
      >
        Create
      </button>
      <h1>Open a project</h1>
      <div>
        {fs.readdirSync(path.join(props.minecraftPath, "resourcepacks"))}
      </div>
    </div>
  );
}
