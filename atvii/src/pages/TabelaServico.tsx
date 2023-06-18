import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './tabela-ser.css'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

function TabelaServico() {
        return (
          <table className="table-ser">
            <thead>
              <tr className='titulo-ser'>
                <th scope="col" className='nome-ser'>Nome</th>
                <th scope="col" className='codser'>Código</th>
                <th scope="col">Editar</th>
                <th scope="col">Excluir</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='nome-ser'>Cabeleleiro</td>
                <td className='codser'>1234-5</td>
                <td><FontAwesomeIcon icon={faPencil} className='icon' /></td>
                <td><FontAwesomeIcon icon={faTrash} className='icon' /></td>
              </tr>
              <tr>
                <td className='nome-ser'>Manicure</td>
                <td className='codser'>9876-5</td>
                <td><FontAwesomeIcon icon={faPencil} className='icon' /></td>
                <td><FontAwesomeIcon icon={faTrash} className='icon' /></td>
              </tr>
              <tr>
                <td className='nome-ser'>Pedicure</td>
                <td className='codser'>3333-6</td>
                <td><FontAwesomeIcon icon={faPencil} className='icon' /></td>
                <td><FontAwesomeIcon icon={faTrash} className='icon' /></td>
              </tr>
            </tbody>
          </table>
        );
      };
      
export default TabelaServico;