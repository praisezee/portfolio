import { Carousel, CarouselItem, Col, Container, Row } from "react-bootstrap";
import img1 from '../assets/img3.jpg'
import img2 from '../assets/img1.jpg'

const Hero = () => {
  return (
    <div className="h-screen d-flex justify-content-center align-items-center pt-5 my-3">
      <Container>
        <Carousel variant='dark' indicators= {false} controls={false} fade>
          <CarouselItem>
            <Row>
              <Col xs={ 10 } md={ 6 } lg={ 8 } className="my-auto mx-auto">
                <p className="text-uppercase text-danger text-center fw-bold mx-auto">hello!</p>
                <p className="h1 text-capitalize text-center fw-bold mx-auto">I&apos;m a <span className="text-danger text-capitalize">praise folorunso</span></p>
                <p className="text-center h2">A MERN stack developer</p>
              </Col>
              <Col xs={ 10 } md={ 6 } lg={ 4 } className="my-auto mx-auto">
                <img src={img1} alt='profile' className="mx-auto text-center img-fluid rounded-4"/>
              </Col>
            </Row>
          </CarouselItem>
          <CarouselItem>
            <Row>
              <Col xs={ 10 } md={ 6 } lg={ 8 } className="my-auto mx-auto">
                <p className="text-uppercase text-danger text-center fw-bold mx-auto">hello!</p>
                <p className="h1 text-capitalize text-center fw-bold mx-auto">I&apos;m a <span className="text-danger">fullstack developer</span> also a web3 developer</p>
              </Col>
              <Col xs={ 10 } md={ 6 } lg={ 4 } className="my-auto mx-auto">
                <img src={img2} alt='profile' className="mx-auto text-center img-fluid rounded-4"/>
              </Col>
            </Row>
          </CarouselItem>
        </Carousel>
      </Container>
    </div>
  )
}

export default Hero
