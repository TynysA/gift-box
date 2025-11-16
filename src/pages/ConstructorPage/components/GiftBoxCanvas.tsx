import { useState } from "react";
import {boxSizePrices} from '../../../feature/constructor/constructorData.ts';

export function GiftBox({ items, products }) {
  const [boxColor, setBoxColor] = useState("white");
  const [boxSize, setBoxSize] = useState("medium");

  const boxColorOptions = {
    white: "#ffffff",
    pink: "#f9d6db",
    kraft: "#d8b79c",
    black: "#191919"
  };
  const sizeStyles = {
    small: "w-[350px] h-[250px]",
    medium: "w-[600px] h-[380px]",
    large: "w-[800px] h-[500px]",
  };

  const itemsTotal = items.reduce((sum, id) => {
    const p = products.find((prod) => prod.id === id);
    return p ? sum + p.price : sum;
  }, 0);

  // Итого
  const total = itemsTotal + boxSizePrices[boxSize];

  return (
    <div className="flex-1 overflow-y-auto flex flex-col">

      {/* HEADER */}
      <h1 className="text-2xl font-bold mb-4 text-center pt-2">Your Gift Box</h1>

      {/* CANVAS CENTER */}
      <div className="flex-1 flex items-center justify-center mb-6">
        <div
          className={`transition-all rounded-sm ${sizeStyles[boxSize]}`}
          style={{
            backgroundColor: boxColorOptions[boxColor],
            border: `1px solid black`,
          }}
        >
          {items.length === 0 ? (
            <p className="text-gray-500 flex items-center justify-center h-full">
              Добавьте товары из левого меню
            </p>
          ) : (
            <div className="grid grid-cols-3 gap-3 p-3 h-full overflow-auto">
              {items.map(id => {
                const product = products.find(p => p.id === id);
                if (!product) return null;
                return (
                  <div
                    key={id}
                    className="aspect-square rounded-md overflow-hidden shadow"
                  >
                    <img
                      src={product.image}
                      className="w-full h-full object-cover"
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* BOTTOM SETTINGS PANEL */}
      <div className="w-full bg-white py-2 px-5 shadow flex justify-between">

        {/* BOX COLOR */}
        <div className='flex gap-2 '>
          <div className="flex gap-4 items-center">
            <h2 className="text-lg font-semibold">Box Color</h2>

            <div className="flex gap-4">
              {Object.entries(boxColorOptions).map(([type, color]) => (
                <button
                  key={type}
                  onClick={() => setBoxColor(type)}
                  className={`
                  flex items-center border rounded-sm transition 
                  ${boxColor === type ? "border-red-700 bg-red-50" : "border-gray-300"}
                `}
                >
                  <div
                    className="w-8 h-8 rounded-sm shadow"
                    style={{ backgroundColor: color }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* BOX SIZE */}
          <div className="flex gap-4 items-center">
            <h2 className="text-lg font-semibold">Box Size</h2>

            <div className="flex gap-4">
              {Object.entries(sizeStyles).map(([size]) => (
                <button
                  key={size}
                  onClick={() => setBoxSize(size)}
                  className={`
                  flex items-center border rounded-sm transition 
                  ${boxSize === size ? "border-red-700 bg-red-50" : "border-gray-300"}
                `}
                >
                  <div className="w-8 h-8 rounded-sm shadow bg-gray-200 flex items-center justify-center text-lg uppercase">
                    {size[0]}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
        <aside className="flex flex-col justify-between min-w-[220px] rounded-2xl border bg-[#FAF7F5] px-4 py-1">
          <div className='flex items-center gap-1'>
            <div className="text-sm text-gray-600">Товары:</div>
            <div className="font-semibold">{itemsTotal} ₸</div>
          </div>

          <div className='flex items-center gap-1'>
            <div className="text-sm text-gray-600">Коробка:</div>
            <div className="font-semibold">{boxSizePrices[boxSize]} ₸</div>
          </div>

          <div className="border-t border-rose-200 mt-1 pt-1 flex items-center gap-1">
            <div className="text-sm text-gray-600">Итого: </div>
            <div className="text-lg font-bold"> {total} ₸</div>
          </div>
        </aside>
      </div>
    </div>
  );
}
