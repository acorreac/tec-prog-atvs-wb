import { Nav } from 'react-bootstrap';
import './servicos.css';
import NavBar from '../components/Navbar';
import TabelaServico from './TabelaServico';

function Servico() {
    return (
        <>
        <NavBar />
        <div className='page'>
            <div className='servico'>
                <Nav.Link className='adicionar-servico' href="cadastro/servico">+ cadastrar novo serviço</Nav.Link>
            </div>
            <div className='tabela'>
               <TabelaServico />
            </div>
        </div>
        </>
    );
}

export default Servico