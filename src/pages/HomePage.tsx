import React, { Dispatch, SetStateAction } from "react";

import { Product } from "../types/types.ts";

import ProductsList from "../components/ProductsList.tsx";

//Type inside the components for props
type HomePageProps = {
  products: Product[];
  favorite: Product[];
  setFavorite: Dispatch<SetStateAction<Product[]>>;
};
export const HomePage = ({
  products,
  favorite,
  setFavorite,
}: HomePageProps) => {
  //Favorite Button
  const handleAddFav = (item: Product) => {
    //Add filter to remove from Fav
    // if (favorite.length === 0) {
    //   setFavorite(item);
    // }
    if (!favorite.find((favItem) => favItem.id === item.id)) {
      setFavorite([...favorite, item]);
    }
  };
  return (
    <main>
      <h1>Welcome to the BlackHeart Shop</h1>
      <p>Best prices ever!</p>
      <ProductsList
        products={products}
        favorite={favorite}
        setFavorite={setFavorite}
        handleAddFav={handleAddFav}
      />
    </main>
  );
};
