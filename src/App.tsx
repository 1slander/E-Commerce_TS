import { useState, useEffect } from "react";

import "./App.css";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

//Components
import { Navbar } from "./components/Navbar";
//Pages
import { HomePage } from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";

//Move to type folder
//type naming convention ProductsData -> ProductData
import { Product } from "./types/types";
function App() {
  const API_URL: string = "https://fakestoreapi.com/products";
  //States
  const [isLoading, setIsLoading] = useState<boolean>(true); //type optional
  const [products, setProducts] = useState<Product[]>([]);
  //Don't change name
  const [favoriteItems, setFavoriteItems] = useState<Product[]>([]);

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
              favorite={favoriteItems}
              setFavorite={setFavoriteItems}
            />
          }
        />
        <Route
          path="/product/:productId"
          element={
            <ProductDetails
              favorite={favoriteItems}
              setFavorite={setFavoriteItems}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
