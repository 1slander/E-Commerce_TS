import { ReactNode, createContext, useState, useReducer } from "react";
import { ProductOrder } from "../types/types";

type CartContextProviderProps = {
  children: ReactNode;
};

export const CartContext = createContext(null);

function updateCartReducer(state, action) {
  if (action.type === "ADDED") {
    const product = action.product;
    const productExist = state.find((cartItem) => cartItem.id === product.id);

    if (!productExist) {
      //const quantity = (product.quantity = 1);
      const newProduct = { ...product, quantity: (product.quantity = 1) };
      const newProductOrder = [...state, newProduct];
      return newProductOrder;
    }

    return state;
  } else if (action.type === "UPDATE") {
    const productId = action.productId;
    const amount = action.amount;
    return state.map((item) =>
      item.id === productId
        ? { ...item, quantity: item.quantity + amount }
        : item
    );
  }
}

export default function CartContextProvider({
  children,
}: CartContextProviderProps) {
  //const [productOrder, setProductOrder] = useState<ProductOrder[]>([]);
  const [productOrder, dispatch] = useReducer(updateCartReducer, []);

  function handleAddItemToCart(product: ProductOrder) {
    dispatch({
      type: "ADDED",
      product: product,
    });
  }
  function handleUpdateItemQuantity(productId: number, amount: number) {
    dispatch({
      type: "UPDATE",
      productId: productId,
      amount: amount,
    });
  }
  //Before using useReducer
  //Add to cart

  // const handleAddItemToCart = (product: ProductOrder) => {
  //   console.log("This Product to be added: ", product);

  //   setProductOrder((prevProductOrder) => {
  //     const productExist = prevProductOrder.find(
  //       (cartItem) => cartItem.id === product.id
  //     );

  //     if (!productExist) {
  //       const qty = (product.quantity = 1);
  //       const newProduct = { ...product, qty };
  //       const newProductOrder = [...prevProductOrder, newProduct];
  //       console.log("New Product Order: ", newProductOrder);
  //       return newProductOrder;
  //     }

  //     console.log("Product already exists in cart");
  //     return prevProductOrder;
  //   });
  // };

  // Update

  // function handleUpdateItemQuantity(productId: number, amount: number) {
  //   setProductOrder((prevItems) =>
  //     prevItems.map((item) =>
  //       item.id === productId
  //         ? { ...item, quantity: item.quantity + amount }
  //         : item
  //     )
  //   );
  // }

  return (
    <CartContext.Provider
      value={{ productOrder, handleAddItemToCart, handleUpdateItemQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}
