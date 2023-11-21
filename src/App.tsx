import { useState, useEffect } from "react";

import "./App.css";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

//Components
import { Navbar } from "./components/Navbar";
//Pages
import { HomePage } from "./pages/HomePage";

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
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage products={products} />} />
      </Routes>
    </>
  );
}

export default App;
