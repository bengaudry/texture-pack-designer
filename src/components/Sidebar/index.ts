interface SideBarItem {
  name: string;
  ref: SideBarItemsList;
  iconPath: string;
}

export enum SideBarItemsList {
  textures,
  particles,
  entities,
  gui,
  paintings,
  items,
  splashes,
}

export const SideBarItems: SideBarItem[] = [
  {
    name: "Textures",
    ref: SideBarItemsList.textures,
    iconPath: "/tab-icons/mc-block.png",
  },
  {
    name: "Particles",
    ref: SideBarItemsList.particles,
    iconPath: "/tab-icons/particle.png",
  },
  {
    name: "Entities",
    ref: SideBarItemsList.entities,
    iconPath: "/tab-icons/entity.png",
  },
  {
    name: "GUI",
    ref: SideBarItemsList.gui,
    iconPath: "/tab-icons/gui.png",
  },
  {
    name: "Paintings",
    ref: SideBarItemsList.paintings,
    iconPath: "/tab-icons/painting.png",
  },
  {
    name: "Items",
    ref: SideBarItemsList.items,
    iconPath: "/tab-icons/sword.png",
  },
  {
    name: "Splashes",
    ref: SideBarItemsList.splashes,
    iconPath: "/tab-icons/credits.png",
  },
];
