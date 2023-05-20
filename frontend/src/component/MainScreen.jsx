import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import '../component/MainScreen.css'

const MainScreen = ({titles,children}) => {
  return (
    <div>
       <div className='mainback'>
        <Container>
          <Row>
            <div className='page'>
              {
                titles && ( <>
                  <h1 className='heading'>{titles}</h1>
                  <hr/>
                  </>
              )}
              {children}
             </div>
          </Row>
        </Container>
        </div>
      </div>
  )
}

export default MainScreen