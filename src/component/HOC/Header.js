import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../customIcon/Logo";
import Navitems from "./Navitems";

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
  }

  @media(max-width: 1020px){
  grid-template-columns: 3rem repeat(12, 1fr) 3rem ;
  }
  @media(max-width: 510px){
  grid-template-columns: 2rem repeat(12, 1fr) 2rem ;
  }
`

function Header() {
  return (
    <HeaderStyled>
      <Link to={"/"}>
        <Logo className={"logo"} />
      </Link>

      <Navitems />
    </HeaderStyled>
  );
}

export default Header;
