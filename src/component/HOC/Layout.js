import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import SideNav from "./SideNav";

const LayoutStyled = styled.div`
  display: grid;
  grid-template-columns: ${props => props.location.includes("/products")? "2rem repeat(12, 1fr) 4rem" : "4rem repeat(12, 1fr) 4rem"};

  .sideNav {
    grid-column: 2/5;
    background-color: papayawhip;
    display: ${props => props.location.includes("/products")? "block" : "none"};

    .checkBox{
      display:flex;
      flex-direction:column;
      justify-content: flex-start;

      label{
        /* display: flex; */
        /* flex-direction: row-reverse; */
        /* justify-self: flex-start; */
      }
      
    }
  }
  section {
    grid-column: ${props => props.location.includes("/products")? "5/-2" : props.location.includes("/product/")? "1/-1": "2/-2"};
    padding-left: ${props => props.location.includes("/products")? "4rem" : "0"};
    background-color: blueviolet;
    /* display: ${props => props.location.includes("/product/")? "grid" : "unset"}; */
    grid-template-columns: ${props => props.location.includes("/product/")? "4rem repeat(12, 1fr) 4rem" : "unset"};
  }
`;

function Layout() {
  const { pathname } = useLocation();
  return (
    <>
      <Header />
      <LayoutStyled location={pathname}>
        {pathname.includes("/products/") &&
          <SideNav className="sideNav" />
        }
        <section>
          <Outlet />
          <Footer />
        </section>
      </LayoutStyled>
    </>
  );
}

export default Layout;
