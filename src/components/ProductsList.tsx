import React from "react";
import { type ProductsData as Stock } from "../App";
type ProductsListProps = {
  products: Stock[];
};
export default function ProductsList({ products }: ProductsListProps) {
  return (
    <div>
      {products.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <img src={item.image} alt={item.title} />
          <p>{item.price} €</p>
        </div>
      ))}
    </div>
  );
}
