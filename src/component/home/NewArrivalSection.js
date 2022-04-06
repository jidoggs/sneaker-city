import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchShoesData, fetchShoesError } from "../../redux/actions/requestActions";
import NextIcon from "../customIcon/Next";
import ItemCard from "../ItemCard";

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
`;

function NewArrival() {


  const dispatch = useDispatch();
  const result = useSelector((state) => state.networkRequestReducer.data);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://v1-sneakers.p.rapidapi.com/v1/sneakers",
      params: {
        limit: "10",
        page: "1",
        releaseYear: "gte:2011",
        sort: "retailPrice:desc",
      },
      headers: {
        "X-RapidAPI-Host": "v1-sneakers.p.rapidapi.com",
        "X-RapidAPI-Key":
          "25fc60c808msh221fbd0ae3cb637p1e48c2jsndcedce7a559e",
      },
    };

  axios
    .request(options)
    .then(function (response) {
      dispatch(fetchShoesData(response.data.results.filter((itm) => itm.media.thumbUrl !== null)));
    })
    .catch(function (error) {
      dispatch(fetchShoesError(error));
      console.error(error);
    });
  }, [dispatch])

 
  return (
    <Container>
      <h3>All the new arrivals</h3>
      <ItemWrapper>
        {result &&
          result.slice(0,4).map((itm, id) => (
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
