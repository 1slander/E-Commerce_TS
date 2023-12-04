//Types
import { ProductOrder } from "../types/types";
//Components
import CartList from "../components/CartList";

type CartPageProps = {
  productOrder: ProductOrder[];
  setProductOrder: React.Dispatch<React.SetStateAction<ProductOrder[]>>;
};
export default function CartPage({
  productOrder,
  setProductOrder,
}: CartPageProps) {
  return (
    <div>
      <h1>Cart</h1>
      <CartList productOrder={productOrder} setProductOrder={setProductOrder} />
    </div>
  );
}
