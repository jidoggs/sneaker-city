import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { getCategoryName, returnArrayofObjects } from "../../helpers";
import BrandTitle from "./BrandTitle";
import Checked from "./Checked";

const Container = styled.div`
  height: 12.5rem;
  overflow-x: scroll;
`;
const BrandsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function Brands() {
  const networkShoes = useSelector((state) => state.networkRequestReducer);
  const { pathname } = useLocation();
  const { data, brands } = networkShoes[getCategoryName(pathname)];

  const [selectBrands, setSelectBrands] = useState([]);
  const [length, setLength] = useState(0);

  const prevLenth = useMemo(() => data.length);//eslint-disable-line

  useEffect(() => {
    setLength(data.length);
  }, [prevLenth]);//eslint-disable-line

  useEffect(() => {
    if (length > 0) {
      setSelectBrands(returnArrayofObjects(brands))
    }
  }, [pathname, length]);//eslint-disable-line


  return (
    <>
      <BrandTitle />
      <Container>
        <BrandsContainer>
          {selectBrands.map((brand, id) => {
            return (
              <Checked
                key={id}
                brand={brand.name}
                isChecked={brand.isChecked}
                setBrands={setSelectBrands}
              />
            );
          })}
        </BrandsContainer>
      </Container>
    </>
  );
}

export default Brands;
