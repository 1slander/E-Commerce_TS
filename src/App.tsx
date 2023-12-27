import { useState } from "react";

import "./App.css";

import { Route, Routes } from "react-router-dom";

//ContextProvider
import CartContextProvider from "./context/cartContext.tsx";

//Components
import { Navbar } from "./components/Navbar";
//Pages
import { HomePage } from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";

//type naming convention ProductsData -> ProductData
import { Product } from "./types/types";

function App() {
  const [like, setLike] = useState(false);

  //Don't change name
  const [favoriteItems, setFavoriteItems] = useState<Product[]>([]);

  return (
    <CartContextProvider>
      <Navbar favorite={favoriteItems} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              favorite={favoriteItems}
              setFavorite={setFavoriteItems}
              like={like}
              setLike={setLike}
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
      </Routes>
    </CartContextProvider>
  );
}

export default App;
