import { ProductOrder } from "../types/types";
type CartItemProps = {
  product: ProductOrder;
};

export default function CartItem({ product }: ProductOrder) {
  return (
    <div>
      <p>
        {product.title} {product.quantity}
      </p>
    </div>
  );
}
