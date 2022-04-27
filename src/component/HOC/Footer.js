import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Facebook from "../customIcon/Facebook";
import Instagram from "../customIcon/Instagram";
import Logo from "../customIcon/Logo";
import Twitter from "../customIcon/Twitter";

const FooterStyle = styled.footer.attrs((props) => ({
  style: {
    display:
      props.location.includes("/product/") ||
      props.location === "/customProduct"
        ? "none"
        : "block",

    padding:
      props.location === "/"
        ? "4rem 0"
        : props.location.includes("/products")
        ? "2rem 0 4rem 0"
        : props.location === "/cart" || props.location === "/saved-items"
        ? "4rem 0 8rem 0"
        : "0",
  },
}))`
  flex-direction: column;
  border-top: 1px solid #00000026;

  .logo {
    margin-bottom: 2rem;
  }
  .disclaimer {
    margin-bottom: 3.5rem;
  }

  .logo,
  .disclaimer {
    display: ${(props) => (props.location === "/" ? "block" : "none")};
  }
  .address {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    row-gap: 0.5rem;
    align-items: center;

    p:first-child {
      grid-column: ${(props) =>
        props.location.includes("/products") ? "1/-1" : "1/3"};
      grid-row: ${(props) =>
        props.location.includes("/products") ? "1/2" : "2/3"};

      display: flex;
      column-gap: 0.75rem;
      align-items: center;

      svg {
        cursor: pointer;
      }
    }
    p:nth-child(2) {
      grid-column: ${(props) =>
        props.location.includes("/products") ? "1/3" : "3/5"};
      grid-row: 2/3;
      justify-self: ${(props) =>
        props.location.includes("/products") ? "flex-start" : "center"};
    }
    p:last-child {
      grid-column: 5/7;
      grid-row: 2/3;
      justify-self: flex-end;
    }

    @media (max-width: 1226px) {
      grid-template-columns: repeat(1, 1fr);
      p:first-child {
        grid-column: ${(props) =>
          props.location.includes("/products") ? "1/-1" : "1/-1"};
        grid-row: 1/2;
      }
      p:nth-child(2) {
        grid-column: ${(props) =>
          props.location.includes("/products") ? "1/3" : "1/-1"};
        grid-row: 2/3;
        justify-self: unset;
      }

      p:last-child {
        grid-column: 1/-1;
        grid-row: 3/4;
        justify-self: unset;
      }
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
        <p>
          Don’t miss out on solid deals:
          <Twitter /> <Instagram />
          <Facebook />
        </p>
        <p>
          Support line: <span>+250 788 467 808</span>
        </p>
        <p>{`Copyright ${new Date().getFullYear()} © Sneaker City ltd`}</p>
      </div>
    </FooterStyle>
  );
}

export default Footer;
