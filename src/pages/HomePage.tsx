import React from "react";
import { type ProductsData as Stock } from "../App.tsx";
import ProductsList from "../components/ProductsList.tsx";
type HomePageProps = {
  products: Stock[];
};
export const HomePage = ({ products }: HomePageProps) => {
  return (
    <main>
      <h1>Welcome to the BlackHeart Shop</h1>
      <p>Best prices ever!</p>
      <ProductsList products={products} />
    </main>
  );
};
