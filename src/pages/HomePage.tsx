import React, { Dispatch, SetStateAction, useState } from "react";

import { Product } from "../types/types.ts";

import ProductsList from "../components/ProductsList.tsx";
import SearchBar from "../components/SearchBar.tsx";

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
  const [search, setSearch] = useState<string>("");

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

  //Search Function

  const searchWord = products.filter((product: Product) => {
    return product.title.toLocaleLowerCase().includes(search.toLowerCase());
  });

  return (
    <main>
      <h1>Welcome to the BlackHeart Shop</h1>
      <p>Best prices ever!</p>
      <SearchBar search={search} setSearch={setSearch} />
      <ProductsList
        products={searchWord}
        favorite={favorite}
        setFavorite={setFavorite}
        handleAddFav={handleAddFav}
      />
    </main>
  );
};
