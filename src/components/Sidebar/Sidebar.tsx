import { SideBarItems, SideBarItemsList } from "@/components/Sidebar/index";
import { useState } from "react";

export function Sidebar() {
  const [activeTab, setActiveTab] = useState<SideBarItemsList>(
    SideBarItemsList.textures
  );

  return (
    <div className="sidebar">
      <ul className="sidebar-items">
        {SideBarItems.map((item) => {
          return (
            <div
              className={`${
                item.ref === activeTab ? "active" : ""
              } sidebar-item`}
              onClick={() => setActiveTab(item.ref)}
            >
              <img src={item.iconPath} alt="" />
              <label>{item.name}</label>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
