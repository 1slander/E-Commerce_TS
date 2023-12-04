import { ProductOrder } from "../types/types";
type CartItemProps = {
  product: ProductOrder;
  setProductOrder: React.Dispatch<React.SetStateAction<ProductOrder[]>>;
};

export default function CartItem({ product, setProductOrder }: CartItemProps) {
  const handleAddQty = (productId: ProductOrder) => {
    setProductOrder((prevItems) =>
      prevItems.map((item) =>
        item.id === productId.id ? { ...item, quantity: item.quantity++ } : item
      )
    );
  };
  const handleRemoveQty = (productId: ProductOrder) => {
    setProductOrder((prevItems) =>
      prevItems.map((item) =>
        item.id === productId.id && item.quantity > 1
          ? { ...item, quantity: item.quantity-- }
          : item
      )
    );
  };
  return (
    <>
      <td>{product.title}</td>
      <td>
        <button onClick={() => handleRemoveQty(product)}>-</button>
        {product.quantity}
        <button onClick={() => handleAddQty(product)}>+</button>
      </td>
      <td>{product.price * product.quantity}</td>
    </>
  );
}
