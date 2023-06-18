import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import useExcluirProduto from './useExcluirProduto';
import './tabela-prod.css';

function TabelaProduto() {
  const { produtos, excluirProduto } = useExcluirProduto([
    { nome: 'Shampoo', codigo: '123-4' },
    { nome: 'Condicionador', codigo: '987-6' },
    { nome: 'Esmalte', codigo: '333-6' }
  ]);

  const handleExcluirProduto = (codigo: string) => {
    excluirProduto(codigo);
  };

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
        {produtos.map((produto) => (
          <tr key={produto.codigo}>
            <td className='nome-prod'>{produto.nome}</td>
            <td className='codigo-prod'>{produto.codigo}</td>
            <td><FontAwesomeIcon icon={faPencil} className='icon' /></td>
            <td>
              <FontAwesomeIcon
                icon={faTrash}
                className='icon'
                onClick={() => handleExcluirProduto(produto.codigo)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TabelaProduto;
