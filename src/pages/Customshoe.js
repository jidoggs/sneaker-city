import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Picker from "../component/customProduct/ColorPicker";
import Model, { reset } from "../component/customProduct/Model";
import CustomRedBtn from "../component/CustomRedBtn";
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
    z-index: 3;
  }
  .picker__container {
    padding: 3rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;

    button {
      justify-self: flex-end;
      align-self: flex-start;
    }
  }
`;

function Customshoe() {
  const [rotate, setRotate] = useState(true);
const dispatch = useDispatch()
  function onClickHandler() {
    reset()
    dispatch(showModal("Your challenge has been sent. Best of luck"))
  }

  return (
    <Container>
      <h1>Nike Customize A Jordans Contest</h1>
      <Canvas style={{ height: "100%", flex: 3 }}>
        <Suspense fallback={null}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Model
            setRotate={setRotate}
            scale={0.2}
            position={[0, -1, 0]}
            rotation={[0, -Math.PI / 3.929, 0]}
          />
          <OrbitControls autoRotate={rotate} enableZoom={true} />
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
