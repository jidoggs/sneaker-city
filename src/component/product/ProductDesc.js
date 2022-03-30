import React from "react";
import styled from "styled-components";
import CartItemCounter from "../CartItemCounter";
import CustomRedBtn from "../CustomRedBtn";
const ProductDecStyled = styled.div`
  flex: 1;

  .description {
    border-bottom: 1px solid #00000026;
    padding: 2rem 0;
    display: flex;
    flex-direction:column;
    color: #000000A6;



    h5{
        /* display: block; */
        padding-bottom: 1.125rem;
        color: #000;
    }
  }
  .btnGroup{
      padding: 2rem 0 6.5rem 0;

      .btnWrapper{
          padding-top: 1.125rem;
          /* display: flex; */
          /* flex-wrap: wrap; */
          display: grid;
          grid-template-columns: repeat(6,1fr);
          gap: 12px;

          button{
              padding: 12px 15px;
              border-radius: .5rem;
              outline: none;
              border: 1px solid #00000026;
              cursor: pointer;
               /* flex: 1; */
              /* &:last-child{
                  flex: unset;
              } */

              
          }
      }

  }
  .cartQuantity{
      display: flex;
      column-gap:2rem;
      padding-bottom: 8.1875rem;
  }

`;

function ProductDesc() {
    const btnArr = ["32","33","34","35","36","37","38","39","40","41","42","43","44","45","46"]
  return (
    <ProductDecStyled>
      <section className="description">
        <h5>Description</h5>
        The Jordan Delta 2 offers a fresh, fearless take on the features you
        want: durability, comfort and an attitude that's Jordan to the core. We
        updated design lines and swapped out some components. The 2 still has
        that clashing combination of supportive and space age-like materials,
        with lots of different textures and heavy stitching to create a look
        that's both adventurous and iconic.
      </section>

      <section className="btnGroup" >
          <h5>Select size</h5>
            <div className="btnWrapper">
                {
                    btnArr.map((itm,id) =>  <button key={id} onClick={()=> console.log(itm)} >{itm}</button>)
                }
            </div>
      </section>
      <div className="cartQuantity">
        <CartItemCounter />
        <CustomRedBtn text={"Add to cart"} />
      </div>
    </ProductDecStyled>
  );
}

export default ProductDesc;
