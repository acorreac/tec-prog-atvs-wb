import { Nav } from 'react-bootstrap';
import './produto.css';
import NavBar from '../components/Navbar';
import TabelaProduto from './TabelaProduto';

function Produto() {
    return (
        <>
        <NavBar />
        <div className='page'>
            <div className='produto'>
                <Nav.Link className='adicionar-produto' href="cadastro/produto">+ cadastrar novo produto</Nav.Link>
            </div>
            <div className='tabela'>
               <TabelaProduto />
            </div>
        </div>
        </>
    );
}

export default Produto