import React, { useEffect, useState, useContext } from "react";
//import { type ProductsData } from "../App";
import { Product } from "../types/types";
import { useParams } from "react-router-dom";
import axios from "axios";
import FavoriteButton from "../components/FavoriteButton";
import Button from "../components/Button";

import { CartContext } from "../context/cartContext";

//What would be the best approach? Create a new type adding qty or used the exported one

type ProductDetailsPageProps = {
  // item: Product;
  favorite: Product[];
  setFavorite: React.Dispatch<React.SetStateAction<Product[]>>;
  like: boolean;
  setLike: React.Dispatch<React.SetStateAction<boolean>>;
};
// export default function ProductDetails({favorite,setFavorite}:{favorite: Product[]; setFavorite: React.Dispatch<React.SetStateAction<Product[]>>}) {
export default function ProductDetails({
  // item,
  favorite,
  setFavorite,
  like,
  setLike,
}: ProductDetailsPageProps) {
  const [product, setProduct] = useState<Product>();
  const { productId } = useParams();
  const { handleAddItemToCart } = useContext(CartContext);

  // const formattedPrice = (price: number) => {
  //   return price.toFixed(2);
  // };

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => console.log(error));
  }, [productId]);

  return (
    <main className="product_detail">
      <h2>{product?.title}</h2>
      <div className="product_detail_wrapper">
        <div>
          <img
            className="product_detail_img"
            src={product?.image}
            alt={product?.title}
          />
        </div>

        <div className="product_detail_info">
          <h4 className="product_detail_price">£ {product?.price}</h4>
          <p className="product_detail_description">{product?.description}</p>

          <Button
            classCss="btn_addCart product_detail_btn"
            onClick={() => handleAddItemToCart(product)}
          >
            Add to cart
          </Button>
        </div>
      </div>
      <div>
        {/* <FavoriteButton
          message={
            like ? "Item added to favorite" : "Item remove from favorite"
          }
          handleAddFav={handleAddFav}
          handleRemoveFav={handleRemoveFav}
          like={like}
          setLike={setLike}
          item={product}
        /> */}
      </div>
    </main>
  );
}
