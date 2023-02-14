import { useState } from "react";
import path from "node:path";
import { Layout } from "@/components/Layout/Layout";
import { ProjectManager } from "@/components/ProjectManager/ProjectManager";

function App() {
  const [isProjectOpened, setIsProjectOpened] = useState<boolean>(false);
  const [openedProject, setOpenedProject] = useState<null | string>(null);

  const minecraftPath = path.join(
    "C:",
    "Users",
    "benou",
    "AppData",
    "Roaming",
    ".minecraft"
  );

  return isProjectOpened ? (
    // Opens editor
    <Layout minecraftPath={minecraftPath} project={openedProject as string} />
  ) : (
    // Opens the manager to open or create a project
    <ProjectManager
      minecraftPath={minecraftPath}
      onProjectOpened={(proj: string) => {
        setIsProjectOpened(true);
        setOpenedProject(proj);
      }}
    />
  );
}

export default App;
