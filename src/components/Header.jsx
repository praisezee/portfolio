import { Container, Nav, NavLink, Navbar } from 'react-bootstrap';
import { BsList } from 'react-icons/bs';
import pdf from '../assets/resume.pdf'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
  <Navbar expand="lg" bg='black' variant='dark' fixed='top' className='my-0' collapseOnSelect>
    <Container>
      <Navbar.Brand href="/" className='h2 text-uppercase'>apus</Navbar.Brand>
      <Navbar.Toggle className='d-flex align-items-center px-3 justify-content-between d-lg-none ' aria-controls='responsive-navbar-nav'>
        <BsList className='my-auto me-1'/>
        <p className='my-auto'>Menu</p>
      </Navbar.Toggle>
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav
          className="ms-auto my-2 my-lg-0"
        >
          <NavLink href='/'>
            Home
          </NavLink>
          <NavLink href='#about' eventKey={1}>
            About
          </NavLink>
          <NavLink href='#skills'>
            Skills
          </NavLink>
          <NavLink href='#projects'>
            Projects
          </NavLink>
          <NavLink href='#contact'>
            Contact
            </NavLink>
            <Link to={pdf} download="Folorunso-Praise-Resume" target="_blank" rel="noreferrer" className="btn btn-danger  text-uppercase">
              Download cv
            </Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header;

