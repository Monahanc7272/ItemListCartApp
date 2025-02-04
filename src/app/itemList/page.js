import { useContext, useCallback } from "react";
import { CartContext } from "../context/CartContext";
import { items } from "../data/items";
import toast from "react-hot-toast";
import Image from "next/image";

export default function ItemListPage() {
    const { addToCart } = useContext(CartContext);
  
    const simulateAddToCart = (item) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(item);
        }, 100);
      });
    };
  
    const handleAddToCart = useCallback(
        async (item) => {
            try {
            await simulateAddToCart(item);
            addToCart(item);
            toast.success("Item added to cart!");
            } catch (error) {
            console.error("Error adding item to cart:", error);
            toast.error("Failed to add item to cart. Please try again.");
            }
        },
        [addToCart]
        );
  
    return (
      <div className="w-full p-6">
        <h1 className="text-2xl font-bold mb-4">Product List ({items.length})</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div 
              key={item.id} 
              className="p-4 border rounded-lg shadow-sm flex flex-col items-center h-full"
            >
              <div className="w-[150px] h-[150px]">
                <Image 
                  src={item.image} 
                  alt={item.name} 
                  width={120} 
                  height={120} 
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <div className="mt-4 text-center flex flex-col flex-grow justify-between w-full">
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">€{item.price}</p>
                </div>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="mt-auto px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  