import { Nav } from 'react-bootstrap';
import NavBar from '../components/Navbar';
import './cliente.css'
import TabelaCliente from './TabelaCliente';


function Cliente() {
    return (
        <>
        <NavBar />
        <div className='page'>
            <div className='cliente'>
                <Nav.Link className='adicionar-cliente' href="cadastro/cliente">+ cadastrar novo cliente</Nav.Link>
            </div>
            <div className='tabela'>
               <TabelaCliente />
            </div>
        </div>
        </>
    );
}

export default Cliente;