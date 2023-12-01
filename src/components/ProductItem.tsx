import { useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../types/types";

type ProductItemProps = {
  item: Product;
  handleAddFav: (item: Product) => void;
};

export default function ProductItem({ item, handleAddFav }: ProductItemProps) {
  const [like, setLike] = useState(false);
  return (
    <div>
      <Link to={`/product/${item.id}`}>
        <h2>{item.title}</h2>
        <img src={item.image} alt={item.title} />
      </Link>
      <p>{item.price} €</p>
      <button
        onClick={() => {
          handleAddFav(item);
          setLike(!like);
        }}
      >
        {like ? "❤️" : "🖤"}
      </button>
      <button>Add to cart</button>
    </div>
  );
}
