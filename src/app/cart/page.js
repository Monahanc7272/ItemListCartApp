import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import DeleteIcon from '@mui/icons-material/Delete';
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Link from "next/link";

export default function CartPage({ handleCloseCart }) {
    const { cart, addToCart, decreaseQuantity, removeFromCart } = useContext(CartContext);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
    return (
      <div className="z-40 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 bg-gray-100 border-l fixed right-0 top-0 h-screen shadow-lg flex flex-col">
        <div className="sticky top-0 bg-white shadow p-4 flex items-center justify-between z-50">
          <h2 className="text-xl font-bold">My Shopping Cart</h2>
          <IconButton onClick={handleCloseCart} className="text-black">
            <CloseIcon fontSize="large"/>
          </IconButton>
        </div>
  
        <div className="overflow-y-auto flex-grow p-4">
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div key={index} className="flex items-center justify-between mb-4 p-5 bg-white rounded-lg shadow-sm">
                <Image src={item.image} alt={item.name} width={40} height={40} className="rounded-lg object-cover" />
                <p className="text-gray-700 flex-1 ml-2">{item.name}</p>
                <div className="flex items-center">
                  <IconButton onClick={() => decreaseQuantity(item.id)} disabled={item.quantity === 1}>
                    <RemoveIcon />
                  </IconButton>
                  <span className="px-2 py-1 mx-1 bg-white border">{item.quantity}</span>
                  <IconButton onClick={() => addToCart(item)}>
                    <AddIcon />
                  </IconButton>
                </div>
                <IconButton onClick={() => removeFromCart(item.id)} className="ml-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                  <DeleteIcon />
                </IconButton>
              </div>
            ))
          ) : (
            <h2 className="text-center">Your Shopping Cart is Empty</h2>
          )}
        </div>

        <div>
          {cart.length > 0 ? (
            <div className="sticky bottom-0 bg-white shadow-md w-full border-t">
            <div className="py-4 text-lg font-semibold text-center">
              Total: €{totalPrice.toFixed(2)}
            </div>
            <div className="p-4 flex justify-between">
              <button onClick={handleCloseCart} className="px-4 py-2 bg-gray-500 text-white font-medium rounded-lg hover:bg-gray-600 transition w-1/2 mr-2">
                Close
              </button>
              <button className="px-4 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition w-1/2">
              <Link href="/checkout">Proceed to Checkout</Link>
              </button>
            </div>
          </div>
          ) : (
            <div className="sticky bottom-0 bg-white shadow-md w-full border-t">
            <div className="py-4 text-lg font-semibold text-center">
              Total: €{totalPrice.toFixed(2)}
            </div>
            <div className="p-4 flex justify-between">
              <button onClick={handleCloseCart} className="px-4 py-2 bg-gray-500 text-white font-medium rounded-lg hover:bg-gray-600 transition w-full mr-2">
                Close
              </button>
            </div>
          </div>
          )}
        </div>
      </div>
    );
  }
  