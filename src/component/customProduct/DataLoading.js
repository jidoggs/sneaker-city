import React, { useEffect, useState } from 'react'

function Box() {
    const [opa, setOpa] = useState(0.2)

    useEffect(() => {
      const interval = setInterval(() => {
          setOpa(Math.random())
      }, 100);
    
      return () => {
        clearInterval(interval);
      }
    }, [])
    

    return (
      <mesh  >
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" transparent opacity={opa} />
      </mesh>
    )
  }

export default Box;