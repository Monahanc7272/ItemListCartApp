import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { items as initialItems } from "../data/items";
import toast from "react-hot-toast";
import Image from "next/image";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";

export default function ItemListPage() {
  const { addToCart } = useContext(CartContext);
  const [sortOption, setSortOption] = useState("");

  const sortedItems = [...initialItems].sort((a, b) => {
    if (sortOption === "name-asc") return a.name.localeCompare(b.name);
    if (sortOption === "price-high-low") return b.price - a.price;
    if (sortOption === "price-low-high") return a.price - b.price;
    return 0;
  });

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleAddToCart = async (item) => {
    try {
      await new Promise((resolve) => setTimeout(() => resolve(item), 100));
      addToCart(item);
      toast.success("Item added to cart!");
    } catch (error) {
      console.error("Error adding item to cart:", error);
      toast.error("Failed to add item to cart. Please try again.");
    }
  };

  return (
    <div className="w-full p-6">
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <h1 className="text-2xl font-bold mb-4">Product List ({sortedItems.length})</h1>
        <Box>
        <FormControl sx={{ minWidth: 200 }} size="medium" fullWidth>
          <InputLabel id="sort-label">Sort By</InputLabel>
          <Select
          labelId="sort-label"
          id="sort-select"
          label="Sort By"
          value={sortOption}
          onChange={handleSortChange}
          >
            <MenuItem value="name-asc">A-Z</MenuItem>
            <MenuItem value="price-low-high">Price Low To High</MenuItem>
            <MenuItem value="price-high-low">Price High To Low</MenuItem>
            </Select>
        </FormControl>
        </Box>
        </Box>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedItems.map((item) => (
          <div key={item.id} className="p-4 border rounded-lg shadow-sm flex flex-col items-center h-full">
            <div className="w-[150px] h-[150px]">
              <Image src={item.image} alt={item.name} width={120} height={120} className="rounded-lg object-cover w-full h-full" />
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
