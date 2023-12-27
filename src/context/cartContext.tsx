import { createContext, useState } from "react";
import { ProductOrder } from "../types/types";

export const CartContext = createContext(null);

export default function CartContextProvider({ children }) {
  const [productOrder, setProductOrder] = useState<ProductOrder[]>([]);

  //Add to cart

  const handleAddItemToCart = (product: ProductOrder) => {
    console.log("This Product to be added: ", product);

    setProductOrder((prevProductOrder) => {
      const productExist = prevProductOrder.find(
        (cartItem) => cartItem.id === product.id
      );

      if (!productExist) {
        const qty = (product.quantity = 1);
        const newProduct = { ...product, qty };
        const newProductOrder = [...prevProductOrder, newProduct];
        console.log("New Product Order: ", newProductOrder);
        return newProductOrder;
      }

      console.log("Product already exists in cart");
      return prevProductOrder;
    });
  };

  // Update

  function handleUpdateItemQuantity(productId: number, amount: number) {
    setProductOrder((prevItems) =>
      prevItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + amount }
          : item
      )
    );
  }

  return (
    <CartContext.Provider
      value={{ productOrder, handleAddItemToCart, handleUpdateItemQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}
