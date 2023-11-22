import React from "react";
import { type ProductsData as Stock } from "../App";
import { Link } from "react-router-dom";
type ProductsListProps = {
  products: Stock[];
};
export default function ProductsList({ products }: ProductsListProps) {
  return (
    <div>
      {products.map((item) => (
        <div key={item.id}>
          <Link to={`/product/${item.id}`}>
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.title} />
          </Link>
          <p>{item.price} €</p>
          <button>🖤</button>
          <button>Add to cart</button>
        </div>
      ))}
    </div>
  );
}
