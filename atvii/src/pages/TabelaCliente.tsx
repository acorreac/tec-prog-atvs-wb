import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './tabela-cliente.css'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

function TabelaCliente() {
        return (
          <table className="table">
            <thead>
              <tr className='titulo-cli'>
                <th scope="col" className='nome'>Nome</th>
                <th scope="col">Editar</th>
                <th scope="col">Excluir</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='nome'>Mabel</td>
                <td><FontAwesomeIcon icon={faPencil} className='icon' /></td>
                <td><FontAwesomeIcon icon={faTrash} className='icon' /></td>
              </tr>
              <tr>
                <td className='nome'>Ludimila</td>
                <td><FontAwesomeIcon icon={faPencil} className='icon' /></td>
                <td><FontAwesomeIcon icon={faTrash} className='icon' /></td>
              </tr>
              <tr>
                <td className='nome'>Micaela</td>
                <td><FontAwesomeIcon icon={faPencil} className='icon' /></td>
                <td><FontAwesomeIcon icon={faTrash} className='icon' /></td>
              </tr>
            </tbody>
          </table>
        );
      };
      
export default TabelaCliente;