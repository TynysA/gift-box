import type { MouseEventHandler } from "react";

const TAB_CONFIG = [
  { id: "items", label: "Items" },
  { id: "flowers", label: "Flowers" },
  { id: "candy", label: "Candy" },
] as const;

export type SidebarTabId = typeof TAB_CONFIG[number]["id"];

type SidebarTabsProps = {
  activeTab: SidebarTabId | null;
  onClick: (tab: SidebarTabId) => void;
  onHoverTab: (tab: SidebarTabId) => void;
};

export function SidebarTabs({ activeTab, onClick, onHoverTab }: SidebarTabsProps) {
  const handleClick = (tab: SidebarTabId): MouseEventHandler<HTMLButtonElement> =>
    (event) => {
      event.preventDefault();
      onClick(tab);
    };

  return (
    <div className="w-16 bg-[#F3F4F6] border-r flex flex-col items-center py-4 gap-6">
      {TAB_CONFIG.map((tab) => (
        <button
          key={tab.id}
          onMouseEnter={() => onHoverTab(tab.id)}
          onClick={handleClick(tab.id)}
          className={`p-2 w-10 h-10 flex items-center justify-center rounded-md ${
            activeTab === tab.id ? "bg-white shadow" : "opacity-60 hover:opacity-100"
          }`}
        >
          {tab.label[0]}
        </button>
      ))}
    </div>
  );
}
