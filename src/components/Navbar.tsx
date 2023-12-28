import React, { useContext, useRef } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import Button from "./Button";
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
        <h1>The BlackHeart 🖤</h1>
        <div className="menu">
          <Link to="/">Home</Link>
          {/* <Link to="/cart">Cart</Link> */}
          {/* {favorite.length > 0 ? <span>{favorite.length}</span> : <span>0</span>} */}

          <Button classCss="btnCart_nav" onClick={handleOpenCartClick}>
            <Badge badgeContent={cartQuantity} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </Button>

          <SimpleBadge favList={favorite} />
        </div>
      </nav>
    </>
  );
};
