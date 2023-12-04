import { useState } from "react";
//Types
import { ProductOrder } from "../types/types";
//Components
import CartList from "../components/CartList";

type CartPageProps = {
  productOrder: ProductOrder[];
};
export default function CartPage({ productOrder }: CartPageProps) {
  return (
    <div>
      <h1>Cart</h1>
      <CartList productOrder={productOrder} />
    </div>
  );
}
