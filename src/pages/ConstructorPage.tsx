import { useState } from "react";
import {SidebarTabs} from './ConstructorPage/components/ConstructorSidebar.tsx';
import {PanelContent} from './ConstructorPage/components/PanelContent.tsx';
import {products} from '../feature/constructor/constructorData.ts';
import {GiftBox} from './ConstructorPage/components/GiftBoxCanvas.tsx';

export function ConstructorPage() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  // NEW SIDEBAR STATES
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClickedOpen, setIsClickedOpen] = useState(false);

  const isOpen = isHovered || isClickedOpen;
  const onTabClick = (tab: string) => {
    // если открыта и нажали на тот же таб → закрыть
    if (isClickedOpen && activeTab === tab) {
      setIsClickedOpen(false);
      return;
    }

    // если открыта, но другой таб → просто переключить
    if (isClickedOpen) {
      setActiveTab(tab);
      return;
    }

    // если закрыта → открыть и выбрать таб
    setActiveTab(tab);
    setIsClickedOpen(true);
  };
  const onHoverTab = (tab: string) => {
    if (!isClickedOpen) {
      setIsHovered(true)
      setActiveTab(tab);
    }
  };

  const onLeavePanel = ()=>{
    if(!isClickedOpen){
      setIsHovered(false)
      setActiveTab(null)
    }
  }
  const addItem = (id: string) => {
    console.log('fsdfs')
    if (!selectedItems.includes(id)) {
      setSelectedItems([...selectedItems, id]);
    }
  };
  const panelClass = isClickedOpen
    ? "relative w-[300px] h-full bg-white border-r" // CLICK MODE
    : "absolute left-16 top-4 w-[300px] h-[80dvh] bg-white shadow-xl rounded-r-xl"; // HOVER MODE


  return (
    <div className="flex h-screen relative">

      {/* LEFT ICON BAR */}
      <SidebarTabs
        activeTab={activeTab}
        onClick={onTabClick}
        onHoverTab={onHoverTab}
        setIsHovered={setIsHovered}
        isLocked={isClickedOpen}
      />


      {/* COLLAPSIBLE PANEL */}
      <div
        className={`
    transition-all duration-300 overflow-y-auto
    ${panelClass}
    ${!isOpen && "w-0 opacity-0 pointer-events-none"}
  `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={onLeavePanel}
      >
        {isOpen && (
          <PanelContent
            tab={activeTab}
            addItem={addItem}
          />
        )}
      </div>

      {/* RIGHT SIDE — YOUR ORIGINAL CONSTRUCTOR */}
      <GiftBox items={selectedItems} products={products} />

    </div>
  );
}