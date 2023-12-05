import { useState, useEffect } from "react";

import "./App.css";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

//Components
import { Navbar } from "./components/Navbar";
//Pages
import { HomePage } from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Cart from "./pages/CartPage";
//Move to type folder
//type naming convention ProductsData -> ProductData
import { Product, ProductOrder } from "./types/types";

function App() {
  const API_URL: string = "https://fakestoreapi.com/products";
  //States
  const [isLoading, setIsLoading] = useState<boolean>(true); //type optional
  const [like, setLike] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  //Don't change name
  const [favoriteItems, setFavoriteItems] = useState<Product[]>([]);
  const [productOrder, setProductOrder] = useState<ProductOrder[]>([]);
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

  console.log("Cart Items", productOrder);
  //Separate loading in a component

  if (isLoading) return "Loading...";
  return (
    <>
      <Navbar favorite={favoriteItems} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              products={products}
              setProducts={setProducts}
              favorite={favoriteItems}
              setFavorite={setFavoriteItems}
              like={like}
              setLike={setLike}
              productOrder={productOrder}
              setProductOrder={setProductOrder}
            />
          }
        />
        <Route
          path="/product/:productId"
          element={
            <ProductDetailsPage
              favorite={favoriteItems}
              setFavorite={setFavoriteItems}
              like={like}
              setLike={setLike}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              productOrder={productOrder}
              setProductOrder={setProductOrder}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
