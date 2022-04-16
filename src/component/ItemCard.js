import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CanvasStyled = styled.canvas.attrs(props => ({
  style:{
    backgroundImage: `url(${props.image})`,
    backgroundColor: `${props.color}`
  }
}))`

  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
`


function ItemCard({title,price,id,image}) {
  return (
    <Link to={`/product/${id}`} style={{display:"flex", flexDirection:"column", }}>
        <CanvasStyled image={image} color={image === null? "#fafafa": "transparent"} />
        <div style={{display:"flex", flexDirection:"column", gap:".5rem", padding:"1.5rem 0"}}>
            <h4>{title}</h4>
            <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)}</p>
        </div>
    </Link>
  )
}

export default ItemCard