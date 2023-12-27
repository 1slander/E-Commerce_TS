import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

import { ProductOrder } from "../../types/types";

type CartItemProps = {
  product: ProductOrder;
};

export default function CartItem({ product }: CartItemProps) {
  const { handleUpdateItemQuantity } = useContext(CartContext);

  const formattedPrice = (price: number) => {
    return +price.toFixed(2);
  };

  return (
    <>
      <td>{product.title}</td>
      <td>
        <button
          onClick={() => handleUpdateItemQuantity(product.id, -1)}
          disabled={product.quantity === 1}
        >
          -
        </button>
        {product.quantity}
        <button onClick={() => handleUpdateItemQuantity(product.id, 1)}>
          +
        </button>
      </td>
      <td>£{formattedPrice(product.price) * product.quantity}</td>
    </>
  );
}
