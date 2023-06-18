import { useState } from 'react';

type Produto = {
  nome: string;
  codigo: string;
};

type UseExcluirProdutoHook = {
  produtos: Produto[];
  excluirProduto: (codigo: string) => void;
};

const useExcluirProduto = (produtosIniciais: Produto[]): UseExcluirProdutoHook => {
  const [produtos, setProdutos] = useState<Produto[]>(produtosIniciais);

  const excluirProduto = (codigo: string) => {
    setProdutos((prevProdutos) => prevProdutos.filter((produto) => produto.codigo !== codigo));
  };

  return { produtos, excluirProduto };
};

export default useExcluirProduto;
