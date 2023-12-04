import React, { Dispatch, SetStateAction, useState } from "react";

import { Product, ProductOrder } from "../types/types.ts";

import ProductsList from "../components/ProductsList.tsx";
import SearchBar from "../components/SearchBar.tsx";

//Type inside the components for props
type HomePageProps = {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  favorite: Product[];
  setFavorite: Dispatch<SetStateAction<Product[]>>;
  like: boolean;
  setLike: React.Dispatch<React.SetStateAction<boolean>>;
  productOrder: ProductOrder[];
  setProductOrder: Dispatch<SetStateAction<ProductOrder[]>>;
};
export const HomePage = ({
  products,
  setProducts,
  favorite,
  setFavorite,
  like,
  setLike,
  productOrder,
  setProductOrder,
}: HomePageProps) => {
  const [search, setSearch] = useState<string>("");

  //Add Favorite
  const handleAddFav = (item: Product) => {
    //Add filter to remove from Fav
    // if (favorite.length === 0) {
    //   setFavorite(item);
    // }
    if (!favorite.find((favItem) => favItem.id === item.id)) {
      setFavorite([...favorite, item]);
    }
  };

  //Remove Favorite
  const handleRemoveFav = (product: Product): void => {
    setFavorite((prevFavorites) =>
      prevFavorites.filter((item) => item.id !== product.id)
    );
  };

  //Add to cart

  const addToCart = (product: ProductOrder) => {
    const productExist = productOrder.find(
      (cartItem) => cartItem.id === product.id
    );

    if (productExist) {
      productExist.quantity++;
      setProductOrder([...productOrder]);
    } else {
      product.quantity = 1;
      return setProductOrder([...productOrder, product]);
    }
  };

  //Search Function

  const searchWord = products.filter((product: Product) => {
    return product.title.toLocaleLowerCase().includes(search.toLowerCase());
  });
  //DONE: FilterByPrice
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
      <h1>Welcome to the BlackHeart Shop</h1>
      <p>Best prices ever!</p>
      <button onClick={filterByPrice}>Sort By Price</button>
      <SearchBar search={search} setSearch={setSearch} />
      <ProductsList
        products={searchWord}
        favorite={favorite}
        setFavorite={setFavorite}
        handleAddFav={handleAddFav}
        handleRemoveFav={handleRemoveFav}
        like={like}
        setLike={setLike}
        addToCart={addToCart}
      />
    </main>
  );
};
