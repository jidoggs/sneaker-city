import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { capitalizeEachWord } from "../../helpers";
import { addBrandToFilter, removeBrandToFilter } from "../../redux/actions/requestActions";

function Brands() {
  const { pathname } = useLocation();
  const state = useSelector((state) => state.networkRequestReducer);
  const [brands, setBrands] = useState([]);
  const dispatch = useDispatch()


  const brandOnClickHandler = (e) => { 
    const value = capitalizeEachWord(e.target.value)
    if (e.target.checked) {
      dispatch(addBrandToFilter(value))
    }else{
      dispatch(removeBrandToFilter(value))
    }
   }

  useEffect(() => {
    if ((pathname === "/product/new")) {
      setBrands(state.newShoes.data);
    }
    if ((pathname === "/product/men")) {
      setBrands(state.menShoes.data);
    }
    if ((pathname === "/product/women")) {
      setBrands(state.womenShoes.data);
    }
    if ((pathname === "/product/kids")) {
      setBrands(state.childrenShoes.data);
    }
  }, [pathname]);

  return (
    <>
      <h5>Brand</h5>
      {brands && (
        <div style={{ height: "200px", overflowX: "scroll" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {brands.map((brand, id) => {
              return (
                <label key={id}>
                  <span>{brand}</span>
                  {brand === "ALL" ? (
                    <input
                      type="checkbox"
                      name={brand}
                      value={brand}
                      defaultChecked
                    />
                  ) : (
                    <input
                      type="checkbox"
                      name={brand}
                      value={brand}
                      onClick={brandOnClickHandler}
                    />
                  )}
                  <span className="checkmark"></span>
                </label>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Brands;
