"use client";

import { useState, useContext } from "react";
import { CartContext } from "./context/CartContext";
import ItemListPage from "./itemList/page";
import CartPage from "./cart/page";
import Badge from '@mui/material/Badge';
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Toaster } from "react-hot-toast";

export default function MainPage() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, getTotalItems } = useContext(CartContext);

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
            <Badge badgeContent={getTotalItems()} color="primary">
              <ShoppingCartIcon fontSize="large"/>
            </Badge>
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
