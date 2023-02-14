import { createProject } from "@/scripts/projects/newProject";
import { ChangeEvent, useState } from "react";
import * as fs from "fs";
import path from "node:path";

export function ProjectManager(props: {
  minecraftPath: string;
  onProjectOpened: CallableFunction;
}) {
  const [newProjectName, setNewProjectName] = useState<string>("");
  const [newProjectTexturesRes, setNewProjectTexturesRes] = useState("16x16");

  return (
    <div className="project-manager">
      <div className="open-project-side">
        <p className="side-title">Open a project</p>
        <ul className="projects-container">
          {fs
            .readdirSync(path.join(props.minecraftPath, "resourcepacks"))
            .map((project) => (
              <li>
                <button onClick={() => props.onProjectOpened(project)}>
                  {project}
                </button>
              </li>
            ))}
        </ul>
      </div>
      <div className="new-project-side">
        <p className="side-title">New resource pack</p>
        <input
          type="text"
          name="pack-name"
          placeholder="Pack name"
          value={newProjectName}
          onChange={(event) => setNewProjectName(event.target.value)}
          required
        />
        <select
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            setNewProjectTexturesRes(e.target.value);
          }}
          required
        >
          <option selected>16x16</option>
          <option>32x32</option>
          <option>64x64</option>
          <option>128x128</option>
          <option>256x256</option>
          <option>512x512</option>
          <option>1024x1024</option>
        </select>
        <button
          type="submit"
          className="cta"
          onClick={() => {
            createProject({
              name: newProjectName,
              description: "",
              texturesResolution: newProjectTexturesRes,
              minecraftPath: props.minecraftPath,
            });
            props.onProjectOpened(newProjectName);
          }}
        >
          Create
        </button>
      </div>
    </div>
  );
}
