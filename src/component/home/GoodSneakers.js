import React from "react";
import styled from "styled-components";
import BoostingIcon from "../customIcon/BoostingIcon";
import FootsIcon from "../customIcon/FootsIcon";
import OriginalIcon from "../customIcon/OriginalIcon";
import TrendingIcon from "../customIcon/TrendingIcon";

const Container = styled.section`
  .txt_container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    font-size: 2.25em;
    font-weight: 700;
    line-height: 2.75rem;
    text-align: center;
    position: relative;
  }
  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    color: #000000a6;
    padding-top: 1rem;
  }
  .footIcon {
    position: absolute;
    inset: 0 auto auto -2rem;
  }

  .container {
    display: flex;
    justify-content: space-between;
    padding-top: 4rem;
    padding-bottom: 8rem;
    height: 32rem;
    p {
      font-size: 1.5em;
      line-height: 32px;
      color: #000000;
      padding: 0;
    }
    .group__original{
        align-self: flex-end;
        display:flex;
        flex-direction:column;
        align-items:center;
    }
  }
`;

function GoodSneakers() {
  return (
    <Container>
      <div className="txt_container">
        <h2>
          Good sneakers <br />
          take you good places{" "}
          <p>look no further, this is where you find the best pair!</p>{" "}
          <FootsIcon className="footIcon" />
        </h2>
      </div>
      <div className="container">
        <p>
          Currated <BoostingIcon className="icon boost" />
          <br /> & unique collection
        </p>
        <div className="group__original">
          <OriginalIcon className="icon original" />
          <p>100% Original sneakers</p>
        </div>

        <p>
          Buy the latest <TrendingIcon className="icon trending" />
          <br /> & define the trends
        </p>
      </div>
    </Container>
  );
}

export default GoodSneakers;
