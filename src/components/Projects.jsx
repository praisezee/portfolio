import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import witwater from "../assets/img/img1.png"
import nysc from "../assets/img/img2.png"
import delvet from "../assets/img/img4.png"
import model from "../assets/img/img3.png"
import witwaterServer from "../assets/img/img5.png"
import delvetServer from "../assets/img/img6.png"

const Projects = () => {
  return (
    <div className="h-screen d-flex justify-content-center align-items-center flex-column py-4" id='projects'>
      <p className="h3 text-uppercase text-center">Projects</p>
      <Container>
        <Row>
          <Col xs={ 12 } md={ 6 } lg={ 4 } className="mx-auto p-2 shadow-lg">
            <Link to='https://witwater.vercel.app' className="nav-link">
              <Card className="border border-danger rounded-4 bg-danger text-light">
                <Card.Body>
                  <img src={witwater} alt="witwater project" className="w-100 img-fluid rounded shadow" />
                  <p className="text-center h5 text-capitalize fs-monospace mt-3">Witwater Model app</p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col xs={ 12 } md={ 6 } lg={ 4 } className="mx-auto p-2 shadow-lg">
            <Link to='https://delvet.vercel.app' className="nav-link">
              <Card className="border border-danger rounded-4 bg-danger text-light">
                <Card.Body>
                  <img src={delvet} alt="Delvet project" className="w-100 img-fluid rounded shadow" />
                  <p className="text-center h5 text-capitalize fs-monospace mt-3">delvet pharmacitical</p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col xs={ 12 } md={ 6 } lg={ 4 } className="mx-auto p-2 shadow-lg">
            <Link to='https://modeltemplate.netlify.app/' className="nav-link">
              <Card className="border border-danger rounded-4 bg-danger text-light">
                <Card.Body>
                  <img src={model} alt="Models project" className="w-100 img-fluid rounded shadow" />
                  <p className="text-center h5 text-capitalize fs-monospace mt-3">Models app</p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col xs={ 12 } md={ 6 } lg={ 4 } className="mx-auto p-2 shadow-lg">
            <Link to='https://github.com/praisezee/witwater-server' className="nav-link">
              <Card className="border border-danger rounded-4 bg-danger text-light">
                <Card.Body>
                  <img src={witwaterServer} alt="witwater Server project" className="w-100 img-fluid rounded shadow" />
                  <p className="text-center h5 text-capitalize fs-monospace mt-3">Witwater server API</p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col xs={ 12 } md={ 6 } lg={ 4 } className="mx-auto p-2 shadow-lg">
            <Link to='https://github.com/praisezee/delvet-server' className="nav-link">
              <Card className="border border-danger rounded-4 bg-danger text-light">
                <Card.Body>
                  <img src={delvetServer} alt="Delvet api" className="w-100 img-fluid rounded shadow" />
                  <p className="text-center h5 text-capitalize fs-monospace mt-3">Delvet Server API</p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col xs={ 12 } md={ 6 } lg={ 4 } className="mx-auto p-2 shadow-lg">
            <Link to='https://mynyscproject.vercel.app' className="nav-link">
              <Card className="border border-danger rounded-4 bg-danger text-light">
                <Card.Body>
                  <img src={nysc} alt="witwater project" className="w-100 img-fluid rounded shadow" />
                  <p className="text-center h5 text-capitalize fs-monospace mt-3">NYSC Web App</p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Projects

