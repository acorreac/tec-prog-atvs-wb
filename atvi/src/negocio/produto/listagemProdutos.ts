import Produto from "../../modelo/produto";
import Listagem from "../listagem";

export default class ListaProdutos extends Listagem{
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
    }
    public listar(): void {
        console.log(`\n################################# `);
        console.log(`Listagem de produtos cadastrados `);
        console.log(`################################# \n`);
        
        this.produtos.forEach(produto => {
            console.log(`Nome do produto: ` + produto.nome);
            console.log(`Descrição do produto: ` + produto.descricao);
            console.log(`Valor do Produto R$: ` + produto.valor);
            console.log(`Codigo identificador do Produto: ` + produto.getProdutoId + '\n');
            console.log(`--------------------------------------\n`);
        })
        console.log(`\n`);
    }
}