import { SideBarItems } from "@/components/Sidebar/index";

export function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-items">
        {SideBarItems.map((item) => {
          return (
            <div className="sidebar-item">
              <img src={item.iconPath} alt="" />
              <label>{item.name}</label>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
