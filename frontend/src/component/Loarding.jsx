import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

const Loarding = ({size = 100}) => {
  return (
    <div style={{
        display:'flex',
        justifyContent:"center",
        alignItems:"center",
        width:'100%',
        height:"100%",
    }}>
    <Spinner animation="border" role="status"
     style={{
        width: size,
        height: size,
     }}
    >
      <span className="visually-hidden">Loarding</span>
    </Spinner>
    </div>
  )
}

export default Loarding