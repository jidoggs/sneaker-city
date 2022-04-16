import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import ListSelector from "../component/listings/ListSelector";
import backImg from "../static/images/browse-header-sneakers.png";

const Container = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1.5rem;
  row-gap: 4rem;

  & > a {
    text-decoration: none;
    color: inherit;
  }
`;
const Title = styled.h2`
  margin: 2rem 0;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
`;
const Information = styled.div`
  height: 80vh;
  position: relative;
  background-size: contain;
  background-repeat: repeat-x;
  background-image: url(${(props) => props.image});
  padding: 4rem 1rem;
`;

function SavedItems() {
  const { pathname } = useLocation();

  return (
    <Container>
      <div>
        <Title>Saved Items</Title>
        <ItemWrapper>
          <ListSelector type="SAVED_ITEMS" />
        </ItemWrapper>
      </div>
      <Information image={backImg}>
        <h1>50% clearance sale this Black Friday</h1>
      </Information>
    </Container>
  );
}

export default SavedItems;
