import React, { useEffect, useState } from "react";
//import { type ProductsData } from "../App";
import { useParams } from "react-router-dom";
import axios from "axios";

//What would be the best approach? Create a new type adding qty or used the exported one
type SingleProduct = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: { rate: number; count: number };
  quantity: number;
};

export default function ProductDetails() {
  const [product, setProduct] = useState<SingleProduct>();
  const { productId } = useParams();
  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => console.log(error));
  }, [productId]);
  return (
    <div>
      <h2>{product?.title}</h2>
      <img src={product?.image} alt={product?.title} />
      <h4>{product?.price} €</h4>
      <p>{product?.description}</p>
    </div>
  );
}
