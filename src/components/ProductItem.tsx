import { useContext } from "react";
import { CartContext } from "../context/cartContext.tsx";

import { Link } from "react-router-dom";
import { Product, ProductOrder } from "../types/types";
import FavoriteButton from "./FavoriteButton.tsx";

type ProductItemProps = {
  item: Product | ProductOrder;
  handleAddFav: (item: Product) => void;
  handleRemoveFav: (item: Product) => void;
  like: boolean;
  setLike: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ProductItem({
  item,
  handleAddFav,
  handleRemoveFav,
  like,
  setLike,
}: ProductItemProps) {
  const { handleAddItemToCart } = useContext(CartContext);

  return (
    <div>
      <Link to={`/product/${item.id}`}>
        <h2>{item.title}</h2>
        <img src={item.image} alt={item.title} />
      </Link>
      <p>{item.price} €</p>

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
      <button onClick={() => handleAddItemToCart(item)}>Add to cart</button>
    </div>
  );
}
