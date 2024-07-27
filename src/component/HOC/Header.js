import React, { useLayoutEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Logo from "../customIcon/Logo";
import Navitems from "./Navitems";
import { accessibleOnClick } from "../util";

const HeaderStyled = styled.header`
  display: grid;
  grid-template-columns: 4rem repeat(12, 1fr) 4rem;
  align-items: center;
  padding: 24px 0;
  border: 1px solid #00000026;
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 3;
  background-color: #ffffff;

  & > a {
    grid-column: 2/4;
    height: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .hamburger {
    display: none;
    background-color: black;
    width: 2rem;
    height: 0.32rem;
    grid-column: -3/-2;
    justify-self: flex-end;
    position: relative;
    transition: background 0.2s ease;
    z-index: 1;

    @media (max-width: 1024px) {
      display: block;
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      background-color: black;
      transition: all 0.5s ease;
    }
    &::before {
      top: -0.8rem;
    }
    &::after {
      top: 0.8rem;
    }

    &__clicked {
      background-color: transparent;

      &::after,
      &::before {
        top: 0;
      }
      &::before {
        transform: rotate(45deg);
      }
      &::after {
        transform: rotate(-45deg);
      }
    }
  }

  .navBar {
    display: flex;
    background-color: #fff;

    &_show {
      grid-column: unset;
      justify-content: space-evenly;
      align-items: flex-start;
      position: absolute;
      flex-direction: column;
      padding-left: 2rem;
      height: 100vh;
    }
    &_hide {
      grid-column: 6/-2;
      justify-content: space-between;
      align-items: center;
      position: unset;
      flex-direction: unset;
      padding-left: unset;
      height: unset;
    }

    @media (max-width: 1024px) {
      grid-column: unset;
      transition: inset 0.5s ease;
      &_show {
        opacity: 1;
        inset: 0;

        ul {
          display: flex;
        }
      }
      &_hide {
        opacity: 0;
        left: 100vw;

        ul {
          display: none;
        }
      }
    }
  }

  @media (max-width: 1020px) {
    grid-template-columns: 3rem repeat(12, 1fr) 3rem;
  }
  @media (max-width: 510px) {
    grid-template-columns: 2rem repeat(12, 1fr) 2rem;
  }
`;

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if (showMenu) {
      setShowMenu(false);
    }
  }, [pathname]); //eslint-disable-line

  const hamburgerClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <HeaderStyled>
      <Link to={"/"}>
        <Logo className={"logo"} />
      </Link>

      <span
        {...accessibleOnClick(hamburgerClick)}
        className={`hamburger ${showMenu ? "hamburger__clicked" : ""}`}
      ></span>
      <Navitems showMenu={showMenu} />
    </HeaderStyled>
  );
}

export default Header;
