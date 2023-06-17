import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import './tabela-cliente.css';
import useExcluirClientes from './useExcluirCliente';

function TabelaCliente() {
  const { clientes, excluirCliente } = useExcluirClientes();

  const handleExcluirCliente = (clienteId: number) => {
    excluirCliente(clienteId);
  };

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
        {clientes.map((cliente) => (
          <tr key={cliente.id}>
            <td className='nome'>{cliente.nome}</td>
            <td><FontAwesomeIcon icon={faPencil} className='icon' /></td>
            <td>
              <FontAwesomeIcon
                icon={faTrash}
                className='icon'
                onClick={() => handleExcluirCliente(cliente.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TabelaCliente;
