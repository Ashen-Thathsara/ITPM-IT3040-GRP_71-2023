import React from 'react'
import '../styles/home.css';
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from '../shared/Subtitle'
import MasonryImageGallery from '../../component/image-gallery/MasonryImageGallery'

// import SearchBar from '../shared/SearchBar'
// import ServiceList from '../services/ServiceList'
// import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'

const Home = () => {
  return <>
    {/*============== hero section start ============= */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className='hero__content'>
              <div className='hero__subtitle d-flex align-items-center'>
                <Subtitle subtitle={'Know Before You Go'} />
                <img src={worldImg} alt="" />
              </div>
              <h1>
                Deep Blue <span className='highlight'> Horizons </span>
              </h1>
              <p>
                Life below water encompasses the vibrant ecosystems in our oceans and seas.
                To ensure their sustainability, we must combat pollution, overfishing, and habitat destruction.
                Preserving the health of these waters is vital for both marine biodiversity and the well-being of coastal communities.
              </p>
            </div>
          </Col>
          <Col lg='2'>
            <div className='hero__img-box'>
              <img src={heroImg} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className='hero__img-box mt-4'>
              <video src={heroVideo} alt="" controls />
            </div>
          </Col>
          <Col lg='2'>
            <div className='hero__img-box mt-5'>
              <img src={heroImg02} alt="" />
            </div>
          </Col>
          {/* <SearchBar /> */}
        </Row>
      </Container>
      <br />
    </section>
    {/*============== hero section start end ============= */}
    
    {/************* gallery start *************/}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Gallery'} />
            <h2 className='gallery__title'>
              Visit our customers tour gallery
            </h2>
          </Col>
          <Col lg='12'>
            <MasonryImageGallery />
          </Col>
        </Row>
      </Container>
    </section>
    {/************* gallery end *************/}
  </>
}

export default Home
