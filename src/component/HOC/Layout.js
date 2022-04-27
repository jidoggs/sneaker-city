import React, { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { resetCart } from "../../redux/actions/cartActions";
import { hideModal } from "../../redux/actions/modalActions";
import CustomRedBtn from "../CustomRedBtn";
import Footer from "./Footer";
import Header from "./Header";
import Modal from "./portal/Modal";
import SideNav from "../listings/SideNav";
import Welcome from "./Welcome";
import useWindowSize from "../../hooks/useWindowSize";

const LayoutStyled = styled.div`
  position: relative;
  display: grid;
  overflow: hidden;
  grid-template-columns: ${(props) =>
    props.location.includes("/products")
      ? "2rem repeat(12, 1fr) 4rem"
      : "4rem repeat(12, 1fr) 4rem"};

  @media (max-width: 1020px) {
    grid-template-columns: ${(props) =>
      props.location.includes("/products")
        ? "2rem repeat(12, 1fr) 3rem"
        : "3rem repeat(12, 1fr) 3rem"};
  }
  @media (max-width: 510px) {
    grid-template-columns: ${(props) =>
      props.location.includes("/products")
        ? "1.5rem repeat(12, 1fr) 2rem"
        : "2rem repeat(12, 1fr) 2rem"};
  }

  .sideNavToggle {
    display: none;
    position: fixed;
    background: green;
    width: 2.5rem;
    top: 6rem;
    color: #fff;
    padding: 0.5rem;
    writing-mode: tb-rl;
    text-orientation: upright;
    border-radius: 0 1rem 1rem 0;

    @media (max-width: 862px) {
      display: inline-block;
    }
  }

  .sideNav {
    height: 100vh;
    padding-top: 6rem;
    grid-row: 1/-1;
    z-index: 1;
    position: fixed;
    right: 100%;
    background: #fff;
    transition: inset 0.8s ease;

    &_show {
      inset: 0 74% 0 2.5rem;
      @media (max-width: 1169px) {
        right: 69%;
      }
      @media (max-width: 1020px) {
        right: 66%;
      }
      @media (max-width: 900px) {
        right: 65%;
      }
      @media (max-width: 862px) {
        right: 50%;
        box-shadow: 0 -1rem 2rem rgba(0, 0, 0, 0.25);
      }
      @media (max-width: 643px) {
        right: 35%;
      }
      @media (max-width: 487px) {
        right: 10%;
      }
    }

    .checkBox {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
  }
  section {
    padding-top: 6rem;
    grid-row: 1/-1;
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

    @media (max-width: 1169px) {
      padding-left: ${(props) =>
        props.location.includes("/products") ? "1rem" : "0"};
      grid-column: ${(props) =>
        props.location.includes("/products")
          ? "6/-2"
          : props.location.includes("/product/") ||
            props.location === "/customProduct"
          ? "1/-1"
          : "2/-2"};
    }
    @media (max-width: 862px) {
      grid-column: ${(props) =>
        props.location.includes("/products")
          ? "2/-2"
          : props.location.includes("/product/") ||
            props.location === "/customProduct"
          ? "1/-1"
          : "2/-2"};
    }
  }
`;

function Layout() {
  const modal = useSelector((state) => state.modalReducer);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [showWelcome, setShowWelcome] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);
  const { width } = useWindowSize();

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

  useLayoutEffect(() => {
    if (width > 862 && showSideNav === false) {
      setShowSideNav(true);
    }
  }, [width, showSideNav]);

  const homeClickHandler = () => {
    if (pathname === "/") {
      handleClose();
    }
  };

  const handleClose = () => {
    dispatch(hideModal());
    if (pathname === "/cart" || pathname === "/customProduct") {
      if (pathname === "/cart") {
        dispatch(resetCart());
      }
      navigate("/");
    }
  };

  const handleBtnType = () => {
    if (pathname === "/cart") {
      return <CustomRedBtn text={"Thanks"} onClick={handleClose} />;
    }
    if (pathname === "/customProduct") {
      return (
        <CustomRedBtn text={"Thanks for participating"} onClick={handleClose} />
      );
    }
    return <CustomRedBtn text={"Close"} onClick={handleClose} />;
  };

  const sideNavHandler = () => {
    setShowSideNav(!showSideNav);
  };

  return (
    <>
      <Modal
        isOpen={modal.showModal}
        handleClose={handleClose}
        homeClickHandler={homeClickHandler}
      >
        <p>{modal.message}</p>
        {handleBtnType()}
      </Modal>
      {showWelcome && <Welcome />}
      {!showWelcome && (
        <>
          <Header />
          <LayoutStyled location={pathname}>
            {pathname.includes("/products/") && (
              <span onClick={sideNavHandler} className="sideNavToggle">
                Show Filter
              </span>
            )}
            {pathname.includes("/products/") && (
              <SideNav
                className={`sideNav ${showSideNav ? "sideNav_show" : ""}`}
              />
            )}
            <section>
              <Outlet />
              <Footer />
            </section>
          </LayoutStyled>
        </>
      )}
    </>
  );
}

export default Layout;
