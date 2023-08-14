import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import pdf from '../assets/resume.pdf'
import img from '../assets/img2.jpg'

const About = () => {
  return (
    <div className="h-screen d-flex justify-content-center align-items-center" id='about'>
      <Container>
        <Row>
          <Col className="d-none d-md-block my-auto p-3" md={ 6 } lg={ 4 }>
            <img src={img} alt="profile" className="img-fluid rounded-4" />
          </Col>
          <Col md={ 6 } lg={ 8 } className="justify-content-center d-flex my-auto p-3">
            <div>
              <p className="h1 fw-bold text-capitalize my-4">about me</p>
            <p className="h6 my-4 fw-lighter">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <p className="fw-lighter fs-5 my-3"><span className="fw-bold text-capitalize me-5">name:</span> Folorunso Praise O.</p>
            <p className="fw-lighter fs-5 my-3"><span className="fw-bold text-capitalize me-5">address:</span>Kajola estate, Moniya, Ibadan, Nigeria</p>
            <p className="fw-lighter fs-5 my-3"><span className="fw-bold text-capitalize me-5">email:</span>folorunsopraise12@gmail.com</p>
            <p className="fw-lighter fs-5 my-3"><span className="fw-bold text-capitalize me-5">phone:</span>+2349029566770, +2349114841947</p>

            <Link to={pdf} download="Folorunso-Praise-Resume" target="_blank" rel="noreferrer" className="btn btn-danger fs-5 fw-bold fs-love rounded-pill text-uppercase">
              Download cv
            </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
