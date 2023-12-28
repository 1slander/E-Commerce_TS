import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

import { Product } from "../types/types.ts";

import Button from "../components/Button.tsx";
import ProductsList from "../components/ProductsList.tsx";
import SearchBar from "../components/SearchBar.tsx";
import axios from "axios";

//Type inside the components for props
type HomePageProps = {
  favorite: Product[];
  setFavorite: Dispatch<SetStateAction<Product[]>>;
  like: boolean;
  setLike: React.Dispatch<React.SetStateAction<boolean>>;
};

const API_URL: string = "https://fakestoreapi.com/products";

export const HomePage = ({
  favorite,
  setFavorite,
  like,
  setLike,
}: HomePageProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true); //type optional

  //Fetch data:
  useEffect(() => {
    axios(API_URL)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  //TODO:Create a Loading Separate component
  if (isLoading) return "Loading...";

  //Add Favorite
  const handleAddFav = (item: Product) => {
    //Add filter to remove from Fav
    // if (favorite.length === 0) {
    //   setFavorite(item);
    // }
    if (!favorite.find((favItem) => favItem.id === item.id)) {
      setFavorite([...favorite, item]);
      setLike(true);
    }
  };

  //Remove Favorite
  const handleRemoveFav = (product: Product): void => {
    setFavorite((prevFavorites) =>
      prevFavorites.filter((item) => item.id !== product.id)
    );
    setLike(false);
  };

  //Add to cart

  // const addToCart = (product: ProductOrder) => {
  //   const productExist = productOrder.find(
  //     (cartItem) => cartItem.id === product.id
  //   );

  //   if (!productExist) {
  //     //productExist.quantity++;
  //     //   setProductOrder([...productOrder]);
  //     // } else {
  //     product.quantity = 1;
  //     return setProductOrder([...productOrder, product]);
  //   }
  // };

  //Search Function

  const searchWord = products.filter((product: Product) => {
    return product.title.toLocaleLowerCase().includes(search.toLowerCase());
  });
  //DONE: FilterByPrice
  //Add a dropdown
  const filterByPrice = () => {
    const sortedProducts = products
      .slice()
      .sort(
        (productA: Product, productB: Product) =>
          productA.price - productB.price
      );
    setProducts(sortedProducts);
  };

  return (
    <main>
      <div className="main">
        <h1>Welcome to the BlackHeart</h1>
        <p>Best prices ever!</p>
        <Button onClick={filterByPrice}>Sort By Price</Button>
        <SearchBar search={search} setSearch={setSearch} />
      </div>
      <ProductsList
        products={searchWord}
        favorite={favorite}
        setFavorite={setFavorite}
        handleAddFav={handleAddFav}
        handleRemoveFav={handleRemoveFav}
        like={like}
        setLike={setLike}
        //addToCart={addToCart}
      />
    </main>
  );
};
