import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa'
import {} from 'react-icons/bs'


const Skills = () => {
  return (
    <div className="h-screen py-5 d-flex justify-content-center align-items-center flex-column " id="skills">
      <p className="h2 text-center text-capitalize fw-bold">my skills</p>
      <Container>
        <Row className='g-2'>
          <Col xs={ 10 } md={ 6 } lg={4} className="mx-auto my-3 p-2">
            <div className="d-flex justify-content-between">
              <h3>HTML</h3>
              <FaHtml5 className="fs-2 bg-danger"/>
            </div>
            <ProgressBar variant="dark" striped animated aria-valuemax={ 100 } aria-valuemin={ 0 } role="progress-bar" now={90 } label='90%' />
          </Col>
          <Col xs={ 10 } md={ 6 } lg={4} className="mx-auto my-3 p-2">
            <div className="d-flex justify-content-between">
              <h3>CSS</h3>
              <FaCss3 className="fs-2 bg-primary"/>
            </div>
            <ProgressBar variant="dark" striped animated aria-valuemax={ 100 } aria-valuemin={ 0 } role="progress-bar" now={75 } label='75%' />
          </Col>
          <Col xs={ 10 } md={ 6 } lg={4} className="mx-auto my-3 p-2">
            <div className="d-flex justify-content-between">
              <h3>JavaScript</h3>
              <FaJs className='bg-warning fs-2 text-dark'/>
            </div>
            <ProgressBar variant="dark" striped animated aria-valuemax={ 100 } aria-valuemin={ 0 } role="progress-bar" now={78 } label='78%' />
          </Col>
          <Col xs={ 10 } md={ 6 } lg={4} className="mx-auto my-3 p-2">
            <div className="d-flex justify-content-between">
              <h3>Node js</h3>
              <FaNodeJs className="bg-success fs-2"/>
            </div>
            <ProgressBar variant="dark" striped animated aria-valuemax={ 100 } aria-valuemin={ 0 } role="progress-bar" now={65} label='65%' />
          </Col>
          <Col xs={ 10 } md={ 6 } lg={4} className="mx-auto my-3 p-2">
            <div className="d-flex justify-content-between">
              <h3>React js</h3>
              <FaReact className="text-primary fs-2 bg-light"/>
            </div>
            <ProgressBar variant="dark" striped animated aria-valuemax={ 100 } aria-valuemin={ 0 } role="progress-bar" now={85 } label='85%' />
          </Col>
          <Col xs={ 10 } md={ 6 } lg={4} className="mx-auto my-3 p-2">
            <div className="d-flex justify-content-between">
              <h3>React Native</h3>
              <FaReact className="bg-light text-primary fs-2"/>
            </div>
            <ProgressBar variant="dark" striped animated aria-valuemax={ 100 } aria-valuemin={ 0 } role="progress-bar" now={40 } label='40%' />
          </Col>
          <Col xs={ 10 } md={ 6 } lg={4} className="mx-auto my-3 p-2">
            <div className="d-flex justify-content-between">
              <h3>Express js</h3>
            </div>
            <ProgressBar variant="dark" striped animated aria-valuemax={ 100 } aria-valuemin={ 0 } role="progress-bar" now={70 } label='70%' />
          </Col>
          <Col xs={ 10 } md={ 6 } lg={4} className="mx-auto my-3 p-2">
            <div className="d-flex justify-content-between">
              <h3>Mongo DB</h3>
            </div>
            <ProgressBar variant="dark" striped animated aria-valuemax={ 100 } aria-valuemin={ 0 } role="progress-bar" now={60 } label='60%' />
          </Col>
          <Col xs={ 10 } md={ 6 } lg={4} className="mx-auto my-3 p-2">
            <div className="d-flex justify-content-between">
              <h3>Solidity</h3>
            </div>
            <ProgressBar variant="dark" striped animated aria-valuemax={ 100 } aria-valuemin={ 0 } role="progress-bar" now={ 55 } label='55%' />
          </Col>
          <Col xs={ 10 } md={ 6 } lg={4} className="mx-auto my-3 p-2">
            <div className="d-flex justify-content-between">
              <h3>HardHat</h3>
            </div>
            <ProgressBar variant="dark" striped animated aria-valuemax={ 100 } aria-valuemin={ 0 } role="progress-bar" now={45 } label='45%' />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Skills
