import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './tabela-ser.css';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import useExcluirServico from './useExcluirServico';

function TabelaServico() {
  const { servicos, excluirServico } = useExcluirServico([
    { nome: 'Cabeleleiro', codigo: '1234-5' },
    { nome: 'Manicure', codigo: '9876-5' },
    { nome: 'Pedicure', codigo: '3333-6' }
  ]);

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
        {servicos.map((servico) => (
          <tr key={servico.codigo}>
            <td className='nome-ser'>{servico.nome}</td>
            <td className='codser'>{servico.codigo}</td>
            <td><FontAwesomeIcon icon={faPencil} className='icon' /></td>
            <td>
              <FontAwesomeIcon
                icon={faTrash}
                className='icon'
                onClick={() => excluirServico(servico)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TabelaServico;
