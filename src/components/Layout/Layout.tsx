import { TopBar } from "@/components/TopBar/TopBar";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { SideBarItemsList } from "@/components/Sidebar";
import { Textures } from "@/components/Tabs/Textures/Textures";
import { Splashes } from "@/components/Tabs/Splashes/Splashes";
import { useState } from "react";
import path from "node:path";

export function Layout(props: { minecraftPath: string; project: string }) {
  const [activeTab, setActiveTab] = useState<SideBarItemsList>(
    SideBarItemsList.textures
  );

  const [projectPath, setProjectPath] = useState<string>(
    path.join(props.minecraftPath, "resourcepacks", props.project)
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
