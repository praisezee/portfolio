import { Button, Col, Container, FloatingLabel, FormControl, Row, Spinner } from "react-bootstrap";
import axios from '../api/axios'
import { useState } from "react";
import img from '../assets/img4.png'


const Contact = () =>
{
  const [ surname, setSurname ] = useState( '' )
  const [ firstname, setFirstname ] = useState('')
  const [ phoneNumber, setPhoneNumber ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ message, setMessage ] = useState( '' )
  const [ status, setStatus ] = useState( false )
  const [loading,setLoading] = useState(false)
  
  const submit = async () =>
  {
    setLoading(true)
    try {
      await axios.post( '/contact', JSON.stringify( { surname, firstname, phoneNumber, email, message } ), {
        headers: { "Content-Type": "application/json" },
        withCredentials:true
      })
      setStatus( true )
      setSurname('')
      setFirstname('')
      setPhoneNumber('')
      setEmail('')
      setMessage('')
      setLoading(false)
    } catch (err) {
      if (!err?.response) {
        setStatus('no server response')
      } else if ( err.response.status === 500 ) {
        setStatus('internal server error')
      }
      setLoading(false)
    }
  }
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center flex-column" id="contact">
      <p className="text-center h3 text-capitalize">Contact me</p>
      <Container>
        <Row className="border rounded border-5 border-danger pb-4">
          <Col md={ 6 } lg={ 4 } className='d-none d-md-block my-auto p-4'>
            <img src={img} alt="profile" className=" rounded w-75" />
          </Col>
          <Col xs={10} md={ 6 } lg={ 8 } className="mx-auto pt-5 my-auto">
            { !status ? (
              <Row className="g-3 text-dark">
              <Col xs={6} md={12} lg={6}>
                <FloatingLabel controlId='floatingInputGrid' label="Surname">
                  <FormControl placeholder='Enter your surname' type='text' value={surname} onChange={(e)=> setSurname(e.target.value)} />
                </FloatingLabel>
              </Col>
              <Col xs={6} md={12} lg={6}>
                <FloatingLabel controlId='floatingInputGrid' label="Firstname">
                  <FormControl placeholder='Enter your surname' type='text' value={firstname} onChange={(e)=> setFirstname(e.target.value)} />
                </FloatingLabel>
              </Col>
              <Col xs={6} md={12} lg={6}>
                <FloatingLabel controlId='floatingInputGrid' label="Phone Number">
                  <FormControl placeholder='Enter your phone number' type='tel' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} />
                </FloatingLabel>
              </Col>
              <Col xs={6} md={12} lg={6}>
                <FloatingLabel controlId='floatingInputGrid' label="Email">
                  <FormControl placeholder='Enter your email address' type='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                </FloatingLabel>
              </Col>
              <Col xs={ 12 }>
                <FloatingLabel controlId='floatingInputGrid' label="Your Message">
                    <FormControl placeholder='Enter your message' type='text' as='textarea' rows={ 4 } style={ {minHeight: '100px'} } value={message} onChange={(e)=>setMessage(e.target.value)} />
                </FloatingLabel>
              </Col>
              <Col xs={ 12 } className='text-end'>
                  <Button disabled={ loading ? true : false } variant='outline-danger' className=' text-capitalize' onClick={ submit }>
                    {loading ? <Spinner size="sm" className='me-2'/> : null}
                    send your message
                  </Button>
              </Col>
            </Row>
            ) : (
                <div className="h-100 align-items-center justify-content-center d-flex">
                  <p className="h3 text-center rounded border p-2 bg-light text-black ">Your message has been sent successfully. Thanks and we will get in touch soon</p>
                </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact
