import { useContext } from "react";
import { CartContext } from "../context/cartContext.tsx";
import { Link } from "react-router-dom";

import Button from "./Button.tsx";
import FavoriteButton from "./FavoriteButton.tsx";

import { Product, ProductOrder } from "../types/types";
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

  const formattedPrice = (price: number) => {
    return +price.toFixed(2);
  };

  return (
    <div className="products_display">
      <Link to={`/product/${item.id}`} className="products_display_links">
        <h2 className="products_display_title">{item.title}</h2>
        <img
          className="products_display_img"
          src={item.image}
          alt={item.title}
        />
      </Link>
      <p>£ {formattedPrice(item.price)}</p>
      <div className="products_btn">
        <FavoriteButton
          message={
            like ? "Item added to favorite" : "Item remove from favorite"
          }
          handleAddFav={handleAddFav}
          handleRemoveFav={handleRemoveFav}
          like={like}
          setLike={setLike}
          item={item}
        />
        {/* Error with passing the item did add on type that could Product or
      ProductOrder type */}
        <Button
          classCss="btn_addCart"
          onClick={() => handleAddItemToCart(item)}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
}
