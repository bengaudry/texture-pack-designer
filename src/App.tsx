import { TopBar } from "@/components/TopBar/TopBar";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { useState } from "react";
import { SideBarItemsList } from "@/components/Sidebar";
import { Textures } from "@/components/Tabs/Textures/Textures";
import { Splashes } from "@/components/Tabs/Splashes/Credits";
import path from "node:path";

function App() {
  const [activeTab, setActiveTab] = useState<SideBarItemsList>(
    SideBarItemsList.textures
  );
  const [projectPath, setProjectPath] = useState<string>(
    path.join(
      "C:",
      "Users",
      "benou",
      "AppData",
      "Roaming",
      ".minecraft",
      "resourcepacks",
      "tp"
    )
  );

  return (
    <div className="app-layout">
      <TopBar />
      <div className="body-layout">
        <Sidebar
          activeTab={activeTab}
          setActiveTab={(ref: SideBarItemsList) => {
            setActiveTab(ref);
          }}
        />
        <div>
          {activeTab === SideBarItemsList.textures ? <Textures /> : ""}
          {activeTab === SideBarItemsList.particles ? "Particles" : ""}
          {activeTab === SideBarItemsList.entities ? "Entities" : ""}
          {activeTab === SideBarItemsList.gui ? "GUI" : ""}
          {activeTab === SideBarItemsList.paintings ? "Paintings" : ""}
          {activeTab === SideBarItemsList.items ? "Items" : ""}
          {activeTab === SideBarItemsList.splashes ? (
            <Splashes projectPath={projectPath} />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
