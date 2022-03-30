import React from 'react'
import styled from 'styled-components'
import ProductCanvas from './ProductCanvas'
import ProductDesc from './ProductDesc'

const ProductStyle = styled.div`
grid-column: 1/-2;

display: flex;
column-gap: 4rem;
`

function Product() {
  return (
    <ProductStyle>
      <ProductCanvas />
      <ProductDesc />
    </ProductStyle>
  )
}

export default Product