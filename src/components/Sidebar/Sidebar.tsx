import { SideBarItems, SideBarItemsList } from "@/components/Sidebar/index";
import { useState } from "react";

export function Sidebar(props: {
  activeTab: SideBarItemsList;
  setActiveTab: CallableFunction;
}) {
  return (
    <div className="sidebar">
      <ul className="sidebar-items">
        {SideBarItems.map((item) => {
          return (
            <div
              className={`${
                item.ref === props.activeTab ? "active" : ""
              } sidebar-item`}
              onClick={() => {
                props.setActiveTab(item.ref);
              }}
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
