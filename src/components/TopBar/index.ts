interface TopBarItem {
  name: string;
  children: Array<TopBarItemChildren>;
}

interface TopBarItemChildren {
  name?: string;
  type?: "static" | "unfoldable" | "separator";
  onclick?: CallableFunction;
}

export const TopBarItems: TopBarItem[] = [
  {
    name: "File",
    children: [
      {
        name: "New resource pack",
        onclick: () => console.log("new res pack"),
        type: "static",
      },
      { name: "Open", onclick: () => console.log("open"), type: "static" },
      { type: "separator" },
      { name: "Save as", onclick: () => console.log("save as") },
      { name: "Save", onclick: () => console.log("save"), type: "static" },
      { name: "Export", onclick: () => console.log("export"), type: "static" },
      { type: "separator" },
      { name: "Quit", onclick: () => console.log("hey"), type: "static" },
    ],
  },
  {
    name: "Edit",
    children: [
      { name: "Open", onclick: () => console.log("open"), type: "static" },
      { type: "separator" },
      { name: "Save as", onclick: () => console.log("save as") },
      { name: "Save", onclick: () => console.log("save"), type: "static" },
      { name: "Export", onclick: () => console.log("export"), type: "static" },
      { type: "separator" },
      { name: "Quit", onclick: () => console.log("hey"), type: "static" },
    ],
  },
  {
    name: "View",
    children: [
      { name: "Open", onclick: () => console.log("open"), type: "static" },
      { type: "separator" },
      { name: "Save as", onclick: () => console.log("save as") },
      { name: "Save", onclick: () => console.log("save"), type: "static" },
      { name: "Export", onclick: () => console.log("export"), type: "static" },
      { type: "separator" },
      { name: "Quit", onclick: () => console.log("hey"), type: "static" },
    ],
  },
  {
    name: "Help",
    children: [
      { name: "Open", onclick: () => console.log("open"), type: "static" },
      { type: "separator" },
      { name: "Save as", onclick: () => console.log("save as") },
      { name: "Save", onclick: () => console.log("save"), type: "static" },
      { name: "Export", onclick: () => console.log("export"), type: "static" },
      { type: "separator" },
      { name: "Quit", onclick: () => console.log("hey"), type: "static" },
    ],
  },
];
