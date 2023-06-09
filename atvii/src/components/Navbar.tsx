import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'
import { Nav } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar expand="lg" className='navbar'>
      <Container>
        <Nav.Link className='logo' href="/">WB</Nav.Link>
        <Nav.Link className='navbar-item' href="/">HOME</Nav.Link>
        <Nav.Link className='navbar-item' href="/cliente">CLIENTES</Nav.Link>
        <Nav.Link className='navbar-item' href="/produto">PRODUTOS</Nav.Link>
        <Nav.Link className='navbar-item' href="/servico">SERVIÇOS</Nav.Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;