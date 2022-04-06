import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CanvasStyled = styled.canvas`

  background-image: url(${props => props.image});
  width: 100%;
  height: 308px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  background-color: ${props => props.color};
`


function ItemCard({title,price,id,image}) {
  return (
    <Link to={`/product/${id}`} style={{display:"flex", flexDirection:"column", }}>
        <CanvasStyled image={image} color={image === null? "#fafafa": "transparent"} />
        <div style={{display:"flex", flexDirection:"column", gap:".5rem", padding:"1.5rem 0"}}>
            <h4>{title}</h4>
            <p>${price}</p>
        </div>
    </Link>
  )
}

export default ItemCard