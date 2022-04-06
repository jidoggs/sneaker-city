import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import styled from "styled-components";
import CustomRedBtn from "../CustomRedBtn";
import Scene from "./Scene";

const Container = styled.div`
  display: flex;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 2rem;
  flex: 1;

  button {
    align-self: flex-start;
  }
`;

const HomeHeadline = styled.h1`
  font-size: 4.5rem;
  font-weight: 600;
  line-height: 5.5rem;
  span{
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
  return (
    <Container>
      <TextContainer>
        <HomeHeadline>Nike MAG <span>(2016)</span></HomeHeadline>
        <HomeSub>
          Back to the Future, the first in a trilogy of films, was a box office
          success. In 1989, Nike Inc. designer Tinker Hatfield was asked to
          create a shoe for the second installment of the series, which was
          partly set in the then-futuristic year of 2015. The shoe had features
          that included light-up panels and self-fastening laces. Hover on model for effects
        </HomeSub>
        <Price>$27,500</Price>
        <CustomRedBtn text={"Add to cart"} />
      </TextContainer>
      <Canvas style={{ height: "70vh", flex: 1 }}>
        <Suspense fallback={null}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          {/* <HeroModel position={[-1.2, 0, 0]} /> */}
          <Scene setRotate={setRotate} />
          <OrbitControls autoRotate={rotate} enableZoom={false} />
        </Suspense>
      </Canvas>
    </Container>
  );
}

export default Hero;
