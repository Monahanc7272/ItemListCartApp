"use client";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cart } = useContext(CartContext);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const router = useRouter();

  const handleBackToCart = () => {
    router.push("/");
  };

  const handleSubmitOrder = () => {
    alert("Order placed successfully!");
  };

  return (
    <div className="w-full max-w-4xl p-6 mx-auto mt-12">
      <h1 className="text-3xl font-bold mb-4 text-center">Order Summary</h1>

      {cart.length > 0 ? (
        <div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-center">Your Shopping Cart</h2>
            <div className="space-y-4">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white rounded-lg shadow-sm"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded-lg object-cover"
                  />
                  <p className="text-gray-700 flex-1 ml-3">{item.name}</p>
                  <span className="text-gray-700">{item.quantity} x €{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-100 py-4 text-lg font-semibold text-center mb-6">
            <p>Total: €{totalPrice.toFixed(2)}</p>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={handleBackToCart}
              className="px-4 py-2 bg-gray-500 text-white font-medium rounded-lg hover:bg-gray-600 transition w-full sm:w-auto"
            >
              Back to Cart
            </button>
            <button
              onClick={handleSubmitOrder}
              className="px-4 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition w-full sm:w-auto"
            >
              Submit Order
            </button>
          </div>
        </div>
      ) : (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-center">Your Shopping Cart is Empty.</h2>
        </div>
      )}
    </div>
  );
}
