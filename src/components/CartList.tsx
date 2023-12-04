import { ProductOrder } from "../types/types";
import CartItem from "./CartItem";
type CartListProps = {
  productOrder: ProductOrder[];
  setProductOrder: React.Dispatch<React.SetStateAction<ProductOrder[]>>;
};

export default function CartList({
  productOrder,
  setProductOrder,
}: CartListProps) {
  const total: number = productOrder.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);

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
          {productOrder.length === 0 ? (
            <tr key={productOrder.length}>
              <td>Cart is empty</td>
            </tr>
          ) : (
            productOrder.map((product) => (
              <tr key={product.id}>
                <CartItem product={product} setProductOrder={setProductOrder} />
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div>
        <p>Total: £ {total}</p>
      </div>
    </>
  );
}
