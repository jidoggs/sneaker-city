import React, { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import styled from "styled-components";
import CartIcon from "../customIcon/CartIcon";
import HeartIcon from "../customIcon/HeartIcon";
import UserIcon from "../customIcon/UserIcon";

const NavHeader = styled.nav`
  grid-column: 6/-2;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul,
  li {
    list-style: none;
    a {
      text-decoration: none;
      color: inherit;
      padding-bottom: 4px;
      border-bottom: 2px solid transparent;
    }
  }
  ul {
    display: flex;
    gap: 2rem;
  }
  .active {
    padding-bottom: 4px;
    border-bottom: 2px solid #000000;
  }
  .cart {
    position: relative;
    cursor: pointer;

    span {
      background-color: red;
      color: #fff;
      width: 1rem;
      height: 1rem;
      position: absolute;
      inset: -0.7rem -0.7rem auto auto;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      padding: 0.7rem;
    }
  }
`;

function Navitems() {
  const cartRef = useRef(null);
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cartReducer.cart);

  return (
    <NavHeader>
      <ul>
        <li>
          <NavLink to={"/products/new"}>New arrivals</NavLink>
        </li>
        <li>
          <NavLink to={"/products/men"}>Men</NavLink>
        </li>
        <li>
          <NavLink to={"/products/women"}>Women</NavLink>
        </li>
        <li>
          <NavLink to={"/products/kids"}>Kids</NavLink>
        </li>
        <li>
          <NavLink to={"/customProduct"}>Nike Dunk Contest</NavLink>
        </li>
      </ul>
      <ul>
        <li className="cart" onClick={() => navigate("/cart")}>
          <CartIcon cartRef={cartRef}  />
          {cart.length !== 0 && <span>{cart.length}</span>}
        </li>
        <li>
          <HeartIcon />
        </li>
        <li>
          <UserIcon />
        </li>
      </ul>
    </NavHeader>
  );
}

export default Navitems;
