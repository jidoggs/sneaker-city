import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { resetBrandToFilter } from "../../redux/actions/requestActions";

const Title = styled.h2`
  margin: 2rem 0;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2rem;
  letter-spacing: 0em;
`;

function ListTitle() {
  const { pathname } = useLocation();
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (pathname === "/products/new") {
      setTitle("The new arrivals");
    } else {
      setTitle(`For ${pathname.substring(10)}`);
    }
    return () => {
      dispatch(resetBrandToFilter());
    };
  }, [pathname, dispatch]);

  return <Title>{title}</Title>;
}

export default ListTitle;
