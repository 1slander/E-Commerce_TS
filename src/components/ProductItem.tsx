import { useState } from "react";
import { Link } from "react-router-dom";
import { Product, ProductOrder } from "../types/types";
import FavoriteButton from "./FavoriteButton.tsx";

type ProductItemProps = {
  item: Product | ProductOrder;
  handleAddFav: (item: Product) => void;
  handleRemoveFav: (item: Product) => void;
  like: boolean;
  setLike: React.Dispatch<React.SetStateAction<boolean>>;
  addToCart: (item: ProductOrder) => void;
};

export default function ProductItem({
  item,
  handleAddFav,
  handleRemoveFav,
  like,
  setLike,
  addToCart,
}: ProductItemProps) {
  // const [like, setLike] = useState(false);

  // const handleClick = (item: Product) => {
  //   if (like) {
  //     handleRemoveFav(item);
  //     setLike(false);
  //   } else {
  //     handleAddFav(item);
  //     setLike(true);
  //   }
  // };
  return (
    <div>
      <Link to={`/product/${item.id}`}>
        <h2>{item.title}</h2>
        <img src={item.image} alt={item.title} />
      </Link>
      <p>{item.price} €</p>
      {/* <button
        onClick={() => {
          handleClick(item);
        }}
      >
        {like ? "❤️" : "🖤"}
      </button> */}
      <FavoriteButton
        message={like ? "Item added to favorite" : "Item remove from favorite"}
        handleAddFav={handleAddFav}
        handleRemoveFav={handleRemoveFav}
        like={like}
        setLike={setLike}
        item={item}
      />
      {/* Error with passing the item did add on type that could Product or
      ProductOrder type */}
      <button onClick={() => addToCart(item)}>Add to cart</button>
    </div>
  );
}
