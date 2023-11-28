import React from "react";
//import { type ProductsData as Stock } from "../App";
import { Product } from "../types/types";
import { Link } from "react-router-dom";

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
        <div key={item.id}>
          <Link to={`/product/${item.id}`}>
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.title} />
          </Link>
          <p>{item.price} €</p>
          <button onClick={() => handleAddFav(item)}>🖤</button>
          <button>Add to cart</button>
        </div>
      ))}
    </div>
  );
}
