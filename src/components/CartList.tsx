import { useState } from "react";

import { ProductOrder } from "../types/types";
import CartItem from "./CartItem";
type CartListProps = {
  productOrder: ProductOrder[];
};

export default function CartList({ productOrder }: CartListProps) {
  const [total, setTotal] = useState<number>(0);
  //const [cart, setCart] = useState<ProductOrder[]>([]);
  console.log(productOrder);
  return (
    <div>
      {productOrder.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        productOrder.map((product) => (
          <CartItem key={product.id} product={product} />
        ))
      )}

      <div>
        <p>Total: £ {total}</p>
      </div>
    </div>
  );
}
