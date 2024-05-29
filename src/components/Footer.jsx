import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsInstagram, BsTwitter, BsGithub } from 'react-icons/bs'

const Footer = () =>
{
  const date = new Date()
  const year = date.getFullYear()
  return (
    <div className="mt-4">
      <hr />
      <footer>
        <Container className="p-4">
          <Row>
            <Col md={12} lg={6} className="mb-4">
              <h3 className="mb-3 f-percifico">Apus</h3>
              <p>
                Being a highly skilled professional, I strive to achieve the highest levels of quality, efficiency, and customer satisfaction. My cutting-edge technology and state-of-the-art facilities allow me to stay ahead of the curve and constantly improve my offerings
              </p>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <h5 className="mb-3 text-capitalize">quick links</h5>
              <ul className="list-unstyled mb-0">
                <li key={1} className="mb-1">
                  <a href='/' className="link-danger text-capitalize"  >Home</a>
                </li>
                <li key={2} className="mb-1">
                  <a href='#about' className="link-warning text-capitalize" >About</a>
                </li>
                <li key={3}>
                  <a href='#skills' className="link-danger text-capitalize" >Skills</a>
                </li>
                <li key={4} className="mb-1">
                  <a href='#projects' className="link-warning text-capitalize" >projects</a>
                </li>
              </ul>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <h5 className="mb-1 ">Socials</h5>
              <Row className='g-2'>
                <Col xs={ 6 }>
                  <Link to='https://www.twitter.com/dev_apus'>
                    <BsTwitter className=' bg-white text-primary rounded display-3 p-1'/>
                  </Link>
                </Col>
                <Col xs={ 6 }>
                  <Link to='https://www.linkedin.com/in/praise-folorunso-291826242'>
                    <BsLinkedin className='border rounded display-3 bg-light text-primary p-1'/>
                  </Link>
                </Col>
                <Col xs={ 6 }>
                  <Link to='https://www.instagram.com/folorunso_praise'>
                    <BsInstagram className=' rounded display-3 p-1  bg-white text-danger'/>
                  </Link>
                </Col>
                <Col xs={ 6 }>
                  <Link to='https://www.github.com/praisezee'>
                    <BsGithub className=' rounded display-3 p-1 bg-light text-black'/>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
          © {year} Copyright 
          <Link className=" mx-1 link-danger" to="/">Folorunso Praise</Link>
        </div>
      </footer>
    </div>
)
}

export default Footer
