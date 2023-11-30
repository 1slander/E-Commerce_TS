import React, { useState } from "react";
//import { type ProductsData as Stock } from "../App";
import { Product } from "../types/types";
import { Link } from "react-router-dom";

import FavButton from "./FavButton.tsx";
import ProductItem from "./ProductItem.tsx";

type ProductsListProps = {
  products: Product[];
  favorite: Product[];
  setFavorite: React.Dispatch<React.SetStateAction<Product[]>>;
  handleAddFav: (item: Product) => void;
};
export default function ProductsList({
  products,
  handleAddFav,
}: ProductsListProps) {
  return (
    <div>
      {products.map((item) => (
        <ProductItem key={item.id} item={item} handleAddFav={handleAddFav} />
      ))}
    </div>
  );
}
