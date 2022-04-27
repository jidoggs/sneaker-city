import React, { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import styled from "styled-components";
import CartIcon from "../customIcon/CartIcon";
import HeartIcon from "../customIcon/HeartIcon";
import UserIcon from "../customIcon/UserIcon";

const NavHeader = styled.nav`
  grid-column: ${props => props.showMenu? "unset": "6/-2"};
  display: flex;
  justify-content: ${props => props.showMenu? "space-evenly": "space-between"};
  align-items: ${props => props.showMenu? "flex-start": "center"};
  position: ${props => props.showMenu? "absolute": "unset"};
  flex-direction: ${props => props.showMenu? "column": "unset"};
  padding-left: ${props => props.showMenu? "2rem": "unset"};
  height: ${props => props.showMenu? "100vh": "unset"};
  background-color: #fff;


  @media (max-width: 1024px) {
    opacity: ${props => props.showMenu? "1": "0"};
    grid-column: unset;
    inset: ${props => props.showMenu? "0 0 0 0": "0 0 0 100vw"};
    
    transition: inset 1s ease;
  }

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
    flex-direction: ${props => props.showMenu? "column": "unset"};

  }
  .active {
    padding-bottom: 4px;
    border-bottom: 2px solid #000000;
    transition: border-color 1s ease-out;
  }
  .store,
  .cart {
    position: relative;
    cursor: pointer;

    span {
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
  .cart{
    span{
      background-color: red;
    }
  }
  .store{
    span{
      background-color: green;
    }
  }
  svg{
    cursor: pointer;
  }
`;

function Navitems({showMenu}) {
  const cartRef = useRef(null);
  const likeRef = useRef(null);
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cartReducer.cart);
  const saved = useSelector((state) => state.savedReducer.savedItems);
  

  return (
    <NavHeader showMenu={showMenu} >
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
          <NavLink to={"/customProduct"}>Nike Contest</NavLink>
        </li>
      </ul>
      <ul>
        <li className="cart" onClick={() => navigate("/cart")}>
          <CartIcon cartRef={cartRef}  />
          {cart.length !== 0 && <span>{cart.length}</span>}
        </li>
        <li className="store" onClick={() => navigate("/saved-items")}>
          <HeartIcon likeRef={likeRef} />
          {saved.length !== 0 && <span>{saved.length}</span>}
        </li>
        <li>
          <UserIcon />
        </li>
      </ul>
    </NavHeader>
  );
}

export default Navitems;
