import { TopBarItems } from "@/components/TopBar/index";

function newTP() {
  return 0;
}

export function TopBar() {
  return (
    <div className="top-bar">
      {TopBarItems.map((topBarItem) => {
        return (
          <div className="menu-item">
            <span className="menu-item-label">{topBarItem.name}</span>
            <ul className="menu-subitems">
              {topBarItem.children.map((children) => {
                if (children.type === "static") {
                  return (
                    <li
                      onClick={() => {
                        if (children.onclick !== undefined) {
                          children.onclick();
                        }
                      }}
                      className="menu-subitem-label"
                    >
                      {children.name}
                    </li>
                  );
                } else if (children.type === "separator") {
                  return <span className="menu-separator"></span>;
                }
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
