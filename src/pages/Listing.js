import React from 'react'
import styled from 'styled-components'
import ItemCard from '../component/ItemCard'
const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1.5rem;
  row-gap: 4rem;

  & > a {
    text-decoration: none;
    color: inherit;
  }
`
const Title = styled.h2`
  margin: 2rem 0;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
`

function Listing() {
  const arr = [{title:"Jordan Delta 2", price: "78,000RWF"},{title:"Jordan Delta 2", price: "78,000RWF"},{title:"Jordan Delta 2", price: "78,000RWF"},{title:"Jordan Delta 2", price: "78,000RWF"},{title:"Jordan Delta 2", price: "78,000RWF"},{title:"Jordan Delta 2", price: "78,000RWF"},{title:"Jordan Delta 2", price: "78,000RWF"},{title:"Jordan Delta 2", price: "78,000RWF"},{title:"Jordan Delta 2", price: "78,000RWF"},{title:"Jordan Delta 2", price: "78,000RWF"},{title:"Jordan Delta 2", price: "78,000RWF"},{title:"Jordan Delta 2", price: "78,000RWF"},{title:"Jordan Delta 2", price: "78,000RWF"},{title:"Jordan Delta 2", price: "78,000RWF"},{title:"Jordan Delta 2", price: "78,000RWF"},{title:"Jordan Delta 2", price: "78,000RWF"},{title:"Jordan Delta 2", price: "78,000RWF"},{title:"Jordan Delta 2", price: "78,000RWF"},{title:"Jordan Delta 2", price: "78,000RWF"},{title:"Jordan Delta 2", price: "78,000RWF"},{title:"Jordan Delta 2", price: "78,000RWF"},{title:"Jordan Delta 2", price: "78,000RWF"},{title:"Jordan Delta 2", price: "78,000RWF"},{title:"Jordan Delta 2", price: "78,000RWF"},{title:"Jordan Delta 2", price: "78,000RWF"},{title:"Jordan Delta 2", price: "78,000RWF"},{title:"Jordan Delta 2", price: "78,000RWF"},{title:"Jordan Delta 2", price: "78,000RWF"},{title:"Jordan Delta 2", price: "78,000RWF"},{title:"Jordan Delta 2", price: "78,000RWF"},{title:"Jordan Delta 2", price: "78,000RWF"},{title:"Jordan Delta 2", price: "78,000RWF"},]

  return (
    <>
      <Title>List title</Title>
      <ItemWrapper>
      {
        arr.map((itm,id) =>  <ItemCard key={id} title={itm.title} price={itm.price} id={id} />)
      }
      </ItemWrapper>
    
    </>
  
  )
}

export default Listing