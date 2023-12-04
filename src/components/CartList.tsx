import { useState } from "react";

import { ProductOrder } from "../types/types";
type CartListProps = {
  productOrder: ProductOrder[];
};

export default function CartList({ productOrder }: CartListProps) {
  const [total, setTotal] = useState<number>(0);
  //const [cart, setCart] = useState<ProductOrder[]>([]);
  console.log(productOrder);
  return (
    <div>
      <ul></ul>
      <div>
        <p>Total: £ {total}</p>
      </div>
    </div>
  );
}
