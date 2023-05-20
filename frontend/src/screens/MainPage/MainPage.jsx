import React from 'react';
import './MainPage.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/esm/Button';

const MainPage = () => {


  return (
    <divmain className='main'>
        <Container>
            <Row>
                <div className='intro-text'>
                  <div >
                    <h1 className='title'>Welcome to Admin Page</h1>
                    <p className='subtitle'>LearnElight</p>
                  </div>
                  <div className='buttonContainor'>
                    <a href='/login'>
                        <Button size='lg' className='landingButton'>Login</Button>
                    </a>
                        <a href='/register'>
                        <Button 
                        size='lg' 
                        className='landingButton'
                        variant='outline-primary'
                        >
                            SignUp
                        </Button>
                    </a>
                  </div>
               </div>
            </Row>
        </Container>
    </divmain>
  )
}

export default MainPage