import React from "react";
import { useNavigate } from "react-router-dom";
import CustomRedBtn from "../component/CustomRedBtn";
import styled from "styled-components";
import image from "../static/images/errorimg0.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  gap: 1.5rem;

  .itmImg {
    background-image: url(${(props) => props.image});
    width: 50vw;
    height: 50vh;
    /* background-color: pink; */
    background-size: contain;
    background-repeat: no-repeat;
    background-position:center;
  }
`;

function Error() {
  const navigate = useNavigate();
  return (
    <Container image={image}>
      <div className="itmImg"></div>
      <p> oops the page you requested was not found!</p>
      <CustomRedBtn text={"Back to Home"} onClick={() => navigate("/")} />
    </Container>
  );
}

export default Error;
