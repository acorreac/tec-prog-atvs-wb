import { useState } from 'react';

function useExcluirCliente() {
  const [clientes, setClientes] = useState([
    { id: 1, nome: 'Mabel' },
    { id: 2, nome: 'Ludimila' },
    { id: 3, nome: 'Micaela' }
  ]);

  const excluirCliente = (clienteId: number) => {
    setClientes((prevClientes) => prevClientes.filter((cliente) => cliente.id !== clienteId));
  };

  return { clientes, excluirCliente };
}

export default useExcluirCliente;
