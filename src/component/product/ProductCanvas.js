import React, { useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { removeItem, saveItem } from "../../redux/actions/savedActions";
import HeartIcon from "../customIcon/HeartIcon";

const ProductCanvasStyle = styled.div`
  flex: 2;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 6rem 4rem;
  @media(max-width:954px){
    padding-bottom: 0;
  }
  @media(max-width:690px){
    padding-left: 0;
    padding-right: 0;
  }
`;
const ShoeImage = styled.div`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  background-size: contain;
  background-position: top;

  @media(max-width:954px){
    height: 35vh;
  }
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.5rem;
    color: #000000;
  }
  p {
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.625rem;
    color: #000000a6;
  }
  button {
    cursor: pointer;
    padding: 0;
    background-color: transparent;
    border: none;
  }
`;

function ProductCanvas({ data }) {
  const likeRef = useRef(null);
  const savedItems = useSelector((state) => state.savedReducer.savedItems);
  const dispatch = useDispatch();

  const [liked, setLiked] = useState(null);

  useLayoutEffect(() => {
    if (savedItems.filter((itm) => itm.id === data.id).length > 0) {
      setLiked(true);
    } else {
      setLiked(false);
    }
    // eslint-disable-next-line
  }, []);

  const saveItemClickHandler = () => {
    setLiked(!liked);
    if (liked) {
      dispatch(removeItem(data));
    } else {
      dispatch(saveItem(data));
    }
  };

  return (
    <ProductCanvasStyle>
      <TextWrapper>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 className="title">{data?.title}</h2>
          <button onClick={saveItemClickHandler}>
            <HeartIcon
              style={{ fill: `${liked ? "red" : "none"}` }}
              likeRef={likeRef}
            />
          </button>
        </div>
        <p className="price">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(data?.retailPrice)}
        </p>
      </TextWrapper>
      <ShoeImage image={data?.media?.imageUrl} />
    </ProductCanvasStyle>
  );
}

export default ProductCanvas;
