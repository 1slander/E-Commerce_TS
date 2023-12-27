import { useContext } from "react";

import { CartContext } from "../../context/cartContext";

import { ProductOrder } from "../../types/types";

import CartItem from "./CartItem";

export default function CartList() {
  const { productOrder, handleUpdateItemQuantity } = useContext(CartContext);

  const total: number = productOrder.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);

  const totalFormatted: number = +total.toFixed(2);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {!productOrder ? (
            <tr>
              <td>Cart is empty</td>
            </tr>
          ) : (
            productOrder.map((product) => (
              <tr key={product.id}>
                <CartItem product={product} />
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div>
        <p>Total: £ {totalFormatted}</p>
      </div>
    </>
  );
}
