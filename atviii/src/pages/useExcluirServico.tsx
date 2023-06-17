import { useState } from 'react';

function useExcluirServico(servicosIniciais: Array<any>) {
  const [servicos, setServicos] = useState(servicosIniciais);

  const excluirServico = (servico: any) => {
    const prevServicos = [...servicos];
    const index = prevServicos.findIndex((s) => s.codigo === servico.codigo);
    if (index !== -1) {
      prevServicos.splice(index, 1);
      setServicos(prevServicos);
    }
  };

  return { servicos, excluirServico };
}

export default useExcluirServico;
