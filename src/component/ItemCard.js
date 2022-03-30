import React from 'react'
import { Link } from 'react-router-dom'

function ItemCard({title,price,id}) {
  return (
    <Link to={`/product/${id}`} style={{display:"flex", flexDirection:"column", }}>
        <canvas /* width={310} height={308}*/ style={{backgroundColor:"yellowgreen", width:"100%",height:308}} />
        <div style={{display:"flex", flexDirection:"column", gap:".5rem", padding:"1.5rem 0"}}>
            <h4>{title}</h4>
            <p>{price}</p>
        </div>
    </Link>
  )
}

export default ItemCard