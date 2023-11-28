import React, { useEffect, useState } from "react";
//import { type ProductsData } from "../App";
import { Product, ProductOrder } from "../types/types";
import { useParams } from "react-router-dom";
import axios from "axios";

//What would be the best approach? Create a new type adding qty or used the exported one

type ProductDetailsProps = {
  favorite: Product[];
  setFavorite: React.Dispatch<React.SetStateAction<Product[]>>;
};
// export default function ProductDetails({favorite,setFavorite}:{favorite: Product[]; setFavorite: React.Dispatch<React.SetStateAction<Product[]>>}) {
export default function ProductDetails({
  favorite,
  setFavorite,
}: ProductDetailsProps) {
  const [product, setProduct] = useState<ProductOrder>();
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
