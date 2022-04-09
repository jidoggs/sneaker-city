import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { heroShoe } from "../../helpers";
import { cartAddItem } from "../../redux/actions/cartActions";
import { showModal } from "../../redux/actions/modalActions";
import CustomRedBtn from "../CustomRedBtn";
import Scene from "./Scene";

const Container = styled.div`
  display: flex;
`;
const BtnWrapper = styled.div`
  display: flex;
  column-gap: 1rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 2rem;
  flex: 1;
`;

const HomeHeadline = styled.h1`
  font-size: 4.5rem;
  font-weight: 600;
  line-height: 5.5rem;
  span {
    font-size: 2.25rem;
  }
`;

const HomeSub = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
`;

const Price = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2rem;
`;

function Hero() {
  const [rotate, setRotate] = useState(true);
  const cartItem = useSelector((state) =>
    state.cartReducer.cart.filter((itm) => itm.id === heroShoe.id)
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (cartItem.length === 1) {
      dispatch(showModal("You already have item in your cart"));
    }
    if (cartItem.length < 1) {
      dispatch(cartAddItem({ ...heroShoe }));
    }
  };
  return (
    <Container>
      <TextContainer>
        <HomeHeadline>Air Jordan 1</HomeHeadline>
        <HomeSub>
          These AJ1s showcase a classic silhouette with vintage-inspired colors.
          You'll love the tonal, layered look of rich grain leather and woven
          fabrics—and you'll love the feel of the buttery soft interior.
        </HomeSub>
        <Price>$160.00</Price>
        <BtnWrapper>
          <CustomRedBtn text={"Add to cart"} onClick={onClickHandler} />
          <CustomRedBtn
            text={"Customize a Jordan Challenge"}
            onClick={() => navigate("/customProduct")}
            color={"secondary"}
          />
        </BtnWrapper>
      </TextContainer>
      <Canvas style={{ height: "70vh", flex: 1 }}>
        <Suspense fallback={null}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Scene setRotate={setRotate} />
          <OrbitControls autoRotate={rotate} enableZoom={false} />
        </Suspense>
      </Canvas>
    </Container>
  );
}

export default Hero;
