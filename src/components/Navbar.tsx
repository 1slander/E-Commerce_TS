import React, { useContext, useRef } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

import SimpleBadge from "./SimpleBadge";
import CartModal from "./Cart/CartModal";

//Types
import { Product } from "../types/types";

type NavbarProps = {
  favorite: Product[];
};
export const Navbar = ({ favorite }: NavbarProps) => {
  const { productOrder } = useContext(CartContext);
  const modal = useRef();

  const cartQuantity = productOrder.length;

  function handleOpenCartClick() {
    modal.current.open();
  }

  let modalActions = <button>Close</button>;

  return (
    <>
      <CartModal ref={modal} title="Your Cart" actions={modalActions} />
      <nav>
        <h1>🖤 Shop</h1>
        <div className="menu">
          <Link to="/">Home</Link>
          {/* <Link to="/cart">Cart</Link> */}
          {/* {favorite.length > 0 ? <span>{favorite.length}</span> : <span>0</span>} */}

          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>

          <SimpleBadge favList={favorite} />
        </div>
      </nav>
    </>
  );
};
