import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  fetchShoesData,
  fetchShoesError,
} from "../../redux/actions/requestActions";
import { getCategoryName } from "../../helpers";
import NextIcon from "../customIcon/Next";
import ItemCard from "../ItemCard";
import { makeGetRequest } from "../../service/request";

const Container = styled.section`
  padding-top: 112px;
  padding-bottom: 96px;

  h3 {
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    padding-bottom: 2rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .link {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;
  }
`;
const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1.5rem;
  row-gap: 4rem;

  & > a {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  @media (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

function NewArrival() {
  const dispatch = useDispatch();
  const result = useSelector(
    (state) => state.networkRequestReducer.newShoes.data
  );

  useEffect(() => {
    const params = {
      limit: "10",
      page: "1",
      releaseYear: "gte:2011",
      // sort: "retailPrice:desc",
    };

    if (result.length === 0) {
      makeGetRequest("/", params)
        .then(function (response) {
          dispatch(
            fetchShoesData(
              getCategoryName("/products/new"),
              response.data.results.filter((itm) => itm.media.thumbUrl !== null)
            )
          );
        })
        .catch(function (error) {
          dispatch(fetchShoesError(getCategoryName("/products/new"), error));
        });
    }
    //eslint-disable-next-line
  }, [dispatch]);

  return (
    <Container>
      <h3>All the new arrivals</h3>
      <ItemWrapper>
        {result &&
          result
            .slice(0, 4)
            .map((itm, id) => (
              <ItemCard
                key={id}
                title={itm.title}
                price={itm.retailPrice}
                id={itm.id}
                image={itm.media.thumbUrl}
              />
            ))}
      </ItemWrapper>
      <Link className="link" to={"/products/new"}>
        View all new arrivals <NextIcon />
      </Link>
    </Container>
  );
}

export default NewArrival;
