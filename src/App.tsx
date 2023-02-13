import { TopBar } from "@/components/TopBar/TopBar";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { useState } from "react";
import { SideBarItemsList } from "@/components/Sidebar";
import { Textures } from "@/components/Tabs/Textures/Textures";

function App() {
  const [activeTab, setActiveTab] = useState<SideBarItemsList>(
    SideBarItemsList.textures
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
          <Textures />
        </div>
      </div>
    </div>
  );
}

export default App;
