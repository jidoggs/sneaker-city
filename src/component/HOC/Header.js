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

  & > a {
    grid-column: 2/4;
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
