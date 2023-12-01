import React from "react";
//import { type ProductsData as Stock } from "../App";
import { Product } from "../types/types";

import ProductItem from "./ProductItem.tsx";

type ProductsListProps = {
  products: Product[];
  favorite: Product[];
  setFavorite: React.Dispatch<React.SetStateAction<Product[]>>;
  handleAddFav: (item: Product) => void;
  handleRemoveFav: (item: Product) => void;
};
export default function ProductsList({
  products,
  handleAddFav,
  handleRemoveFav,
}: ProductsListProps) {
  return (
    <div>
      {products.map((item) => (
        <ProductItem
          key={item.id}
          item={item}
          handleAddFav={handleAddFav}
          handleRemoveFav={handleRemoveFav}
        />
      ))}
    </div>
  );
}
