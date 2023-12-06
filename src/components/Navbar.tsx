import React from "react";
import { Link } from "react-router-dom";
import SimpleBadge from "./SimpleBadge";
import { Product } from "../types/types";
type NavbarProps = {
  favorite: Product[];
};
export const Navbar = ({ favorite }: NavbarProps) => {
  return (
    <nav>
      <h1>🖤 Shop</h1>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        {/* {favorite.length > 0 ? <span>{favorite.length}</span> : <span>0</span>} */}
        <SimpleBadge favList={favorite} />
      </div>
    </nav>
  );
};
