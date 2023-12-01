import { useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../types/types";
import SimpleSnackbar from "../components/SimpleSnackBar.tsx";

type ProductItemProps = {
  item: Product;
  handleAddFav: (item: Product) => void;
  handleRemoveFav: (item: Product) => void;
};

export default function ProductItem({
  item,
  handleAddFav,
  handleRemoveFav,
}: ProductItemProps) {
  const [like, setLike] = useState(false);

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
      <SimpleSnackbar
        message={like ? "Item added to favorite" : "Item remove from favorite"}
        handleAddFav={handleAddFav}
        handleRemoveFav={handleRemoveFav}
        like={like}
        setLike={setLike}
        item={item}
      />
      <button>Add to cart</button>
    </div>
  );
}
