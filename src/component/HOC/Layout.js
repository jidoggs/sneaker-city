import React, { useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import Modal from "./Modal";
import SideNav from "./SideNav";
import Welcome from "./Welcome";

const LayoutStyled = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.location.includes("/products")
      ? "2rem repeat(12, 1fr) 4rem"
      : "4rem repeat(12, 1fr) 4rem"};

  .sideNav {
    grid-column: 2/5;
    display: ${(props) =>
      props.location.includes("/products") ? "block" : "none"};

    .checkBox {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
  }
  section {
    grid-column: ${(props) =>
      props.location.includes("/products")
        ? "5/-2"
        : props.location.includes("/product/") ||
          props.location === "/customProduct"
        ? "1/-1"
        : "2/-2"};
    padding-left: ${(props) =>
      props.location.includes("/products") ? "4rem" : "0"};
    grid-template-columns: ${(props) =>
      props.location.includes("/product/") ||
      props.location === "/customProduct"
        ? "4rem repeat(12, 1fr) 4rem"
        : "unset"};
  }
`;

function Layout() {
  const showModal = useSelector((state) => state.modalReducer.showModal);
  const { pathname } = useLocation();
  const [showWelcome, setShowWelcome] = useState(false);

  useLayoutEffect(() => {
    let interval = () =>
      setTimeout(() => {
        setShowWelcome(false);
      }, 9800);

    if (pathname === "/") {
      setShowWelcome(true);
      interval();
    }
    return () => {
      clearTimeout(interval);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {showWelcome && <Welcome />}
      {showModal && <Modal />}
      {!showWelcome && (
        <>
          {" "}
          <Header />
          <LayoutStyled location={pathname}>
            {pathname.includes("/products/") && <SideNav className="sideNav" />}
            <section>
              <Outlet />
              <Footer />
            </section>
          </LayoutStyled>{" "}
        </>
      )}
    </>
  );
}

export default Layout;
