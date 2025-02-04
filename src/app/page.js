"use client";

import { useState } from "react";
import ItemListPage from "./itemList/page";
import CartPage from "./cart/page";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Toaster } from "react-hot-toast";

export default function MainPage() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div className="relative">
      <div className="fixed top-4 right-6 z-50">
        {isCartOpen ? null : (
          <IconButton onClick={handleOpenCart} className="text-black">
            <ShoppingCartIcon fontSize="large"/>
          </IconButton>
        )}
      </div>

      <Toaster />

      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-2/3 p-6 mx-auto">
        <ItemListPage handleOpenCart={handleOpenCart} />
      </div>

      {isCartOpen && (
        <div className="relative z-40">
          <CartPage handleCloseCart={handleCloseCart} />
        </div>
      )}
    </div>
  );
}
