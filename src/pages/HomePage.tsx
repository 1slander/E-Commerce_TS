import React, { Dispatch, SetStateAction } from "react";
import { type ProductsData as Stock } from "../App.tsx";
import ProductsList from "../components/ProductsList.tsx";
type HomePageProps = {
  products: Stock[];
  favorite: Stock[];
  setFavorite: Dispatch<SetStateAction<Stock[]>>;
};
export const HomePage = ({
  products,
  favorite,
  setFavorite,
}: HomePageProps) => {
  //Favorite Button
  const handleAddFav = (item) => {
    if (favorite.length === 0) {
      setFavorite(item);
    }
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
