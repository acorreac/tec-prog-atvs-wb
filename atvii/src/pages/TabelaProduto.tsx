import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './tabela-prod.css'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

function TabelaProduto() {
        return (
          <table className="table-prod">
            <thead>
              <tr className='titulo-prod'>
                <th scope="col" className='nome-prod'>Nome</th>
                <th scope="col" className='codprod'>Código</th>
                <th scope="col">Editar</th>
                <th scope="col">Excluir</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='nome-prod'>Shampoo</td>
                <td className='codigo-prod'>123-4</td>
                <td><FontAwesomeIcon icon={faPencil} className='icon' /></td>
                <td><FontAwesomeIcon icon={faTrash} className='icon' /></td>
              </tr>
              <tr>
                <td className='nome-prod'>Condicionador</td>
                <td className='codigo-prod'>987-6</td>
                <td><FontAwesomeIcon icon={faPencil} className='icon' /></td>
                <td><FontAwesomeIcon icon={faTrash} className='icon' /></td>
              </tr>
              <tr>
                <td className='nome-prod'>Esmalte</td>
                <td className='codigo-prod'>333-6</td>
                <td><FontAwesomeIcon icon={faPencil} className='icon' /></td>
                <td><FontAwesomeIcon icon={faTrash} className='icon' /></td>
              </tr>
            </tbody>
          </table>
        );
      };
      
export default TabelaProduto;