import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Logo from "../customIcon/Logo";

const FooterStyle = styled.footer`
  display: ${(props) => (props.location.includes("/product/") ? "none" : "block")};
  flex-direction: column;
  border-top: 1px solid #00000026;
  padding: ${(props) =>
    props.location === "/"
      ? "4rem 0"
      : props.location.includes("/products")
      ? "2rem 0 4rem 0"
      : props.location === "/cart"? "4rem 0 8rem 0": "0"};
  
  .logo{
    margin-bottom: 2rem;
  }
  .disclaimer{
    margin-bottom: 3.5rem;
  }

  .logo,
  .disclaimer {
    display: ${(props) => (props.location === "/" ? "block" : "none")};
  }
  .address {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    row-gap: .5rem;

    /* p{
      margin-bottom: .5rem;
    } */

    p:first-child{
      grid-column: ${(props) => (props.location.includes("/products") ? "1/-1" : "1/3")};
      grid-row: ${(props) => (props.location.includes("/products") ? "1/2" : "2/3")};
    }
    p:nth-child(2){
      grid-column: ${(props) => (props.location.includes("/products") ? "1/3" : "3/5")};
      grid-row: 2/3;
      justify-self: ${(props) => (props.location.includes("/products") ? "flex-start" : "center")};
    }
    p:last-child{
      grid-column: 5/7;
      grid-row: 2/3;
      justify-self: flex-end;
    }
  }
  .disclaimer,
  .address {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
  }
`;

function Footer() {
  const { pathname } = useLocation();
  return (
    <FooterStyle location={pathname}>
      <Logo className={"logo"} />
      <p className="disclaimer">
        We don’t just sell shoes, we sell memories and collectibles. We collect
        the best in the best with an attention to all little details. we know
        that shoes speaks louder than words that’s why we’ve mastered the
        science of good sneakers.
      </p>
      <div className="address">
        <p>Don’t missout on once-in-a-while-deals:</p>
        <p>
          Support line: <span>+250 788 467 808</span>
        </p>
        <p>Copyright 2021 © Sneaker City ltd</p>
      </div>
    </FooterStyle>
  );
}

export default Footer;
