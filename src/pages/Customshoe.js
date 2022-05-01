import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Picker from "../component/customProduct/ColorPicker";
import Box from "../component/customProduct/DataLoading";
import Model, { reset } from "../component/customProduct/Model";
import CustomRedBtn from "../component/CustomRedBtn";
import useWindowSize from "../hooks/useWindowSize";
import { showModal } from "../redux/actions/modalActions";

const Container = styled.div`
  background: #fafafa;
  height: 90vh;
  position: relative;
  display: flex;
  background: honeydew;

  & > h1 {
    position: absolute;
    inset: 2rem auto auto 2rem;

    @media (max-width: 480px) {
      font-size: 1.2em;
    }
    @media (max-width: 400px) {
      font-size: 1em;
    }
  }
  .picker__container {
    padding: 3rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    button {
      justify-self: flex-end;
      align-self: flex-start;
    }
  }
  @media (max-width: 920px) {
    flex-direction: column;
    align-items: center;

    .picker__container > button {
      justify-self: center;
      align-self: center;
    }
  }
`;

function Customshoe() {
  const dispatch = useDispatch();
  function onClickHandler() {
    reset();
    dispatch(showModal("Your challenge has been sent. Best of luck"));
  }
  const { width } = useWindowSize();

  return (
    <Container>
      <h1>Nike Customize A Jordans Contest</h1>
      <Canvas style={{ height: "100%", flex: 3 }}>
        <Suspense fallback={<Box />}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Model
            scale={width > 480 ? 0.2 : 0.15}
            position={[0, -1, 0]}
            rotation={[0, -Math.PI / 3.929, 0]}
          />
          <OrbitControls
            autoRotate={true}
            enableZoom={width > 480 ? true : false}
          />
        </Suspense>
      </Canvas>
      <div className="picker__container">
        <Picker />
        <CustomRedBtn
          style={{ justifySelf: "flex-end", alignSelf: "flex-start" }}
          color={"secondary"}
          text="Submit"
          onClick={onClickHandler}
        />
      </div>
    </Container>
  );
}

export default Customshoe;
