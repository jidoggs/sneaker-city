import React, { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import CartIcon from "../customIcon/CartIcon";
import HeartIcon from "../customIcon/HeartIcon";
import UserIcon from "../customIcon/UserIcon";

const NavHeader = styled.nav`
  grid-column: 6/-2;
  display: flex;
  justify-content: space-between;
  align-items:center;

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
    /* text-decoration: underline; */
    padding-bottom: 4px;
    border-bottom: 2px solid #000000;
  }
`;

function Navitems() {
  const cartRef = useRef(null)
  const navigate = useNavigate()
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
      </ul>
      <ul>
        <li>
          <CartIcon cartRef={cartRef} onClick={()=> navigate("/cart")} />
        </li>
        <li>
          <UserIcon />
        </li>
        <li>
          <HeartIcon />
        </li>
      </ul>
    </NavHeader>
  );
}

export default Navitems;
