import React, {  useLayoutEffect,  useState } from "react";
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

const LayoutStyled = styled.div`
  display: grid;
  overflow: hidden;
  grid-template-columns: ${(props) =>
    props.location.includes("/products")
      ? "2rem repeat(12, 1fr) 4rem"
      : "4rem repeat(12, 1fr) 4rem"};

  .sideNav {
    height: 100vh;
    padding-top:90px;
    grid-column: 2/5;
    display: ${(props) =>
      props.location.includes("/products") ? "block" : "none"};
      position:fixed;
      inset: 0 74% 0 2rem;

@media(max-width: 1169px){
    grid-column: 2/6;
  }


    .checkBox {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
  }
  section {
    padding-top: 90px;
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
  @media(max-width: 1169px){
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
  }
`;



function Layout() {
  const modal = useSelector((state) => state.modalReducer);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
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
    return <CustomRedBtn text={"Close"} onClick={handleClose} />
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
            {pathname.includes("/products/") && <SideNav className="sideNav" />}
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
