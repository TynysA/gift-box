export function SidebarTabs({ activeTab, onClick, setIsHovered, isLocked, onHoverTab }) {
  const tabs = [
    { id: "items", label: "Items" },
    { id: "flowers", label: "Flowers" },
    { id: "candy", label: "Candy" }
  ];

  return (
    <div
      className="w-16 bg-[#F3F4F6] border-r flex flex-col items-center py-4 gap-6"
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onMouseEnter={() => onHoverTab(tab.id)}
          onClick={() => onClick(tab.id)}
          className={`p-2 w-10 h-10 flex items-center justify-center rounded-md
            ${
            activeTab === tab.id
              ? "bg-white shadow"
              : "opacity-60 hover:opacity-100"
          }`}
        >
          {tab.label[0]}
        </button>
      ))}
    </div>
  );
}
