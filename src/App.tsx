import { useState, useEffect } from "react";

import "./App.css";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

//Components
import { Navbar } from "./components/Navbar";
//Pages
import { HomePage } from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";

export type ProductsData = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};

function App() {
  const API_URL: string = "https://fakestoreapi.com/products";
  //States
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<ProductsData[]>([]);
  const [favoriteItems, setFavoriteItems] = useState<ProductsData[]>([]);

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
