// Теперь PanelContent принимает addItem:
import {products} from '../../../feature/constructor/constructorData.ts';
import type {SidebarTabId} from './ConstructorSidebar.tsx';

export function PanelContent({
                               tab,
                               addItem,
                             }: {
  tab: SidebarTabId | null;
  addItem: (id: string) => void;
}) {
  if (!tab) return null;

  // Фильтруем товары по категории
  const filtered = products.filter((p) => p.category === tab);

  if (filtered.length === 0) {
    return (
      <div className="p-4 text-gray-400">
        No items in: <b>{tab}</b>
      </div>
    );
  }

  return (
    <div className="p-4 grid grid-cols-2 gap-3">
      {filtered.map((item) => (
        <button
          key={item.id}
          onClick={() => addItem(item.id)}
          className="border rounded-md overflow-hidden shadow-sm hover:shadow-md transition p-2"
        >
          <img src={item.image} className="w-full h-24 object-cover" />
          <div className="text-sm mt-2">{item.title}</div>
        </button>
      ))}
    </div>
  );
}
