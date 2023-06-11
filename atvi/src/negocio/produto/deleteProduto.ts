import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Delete from "../delete";
import ListaProdutos from "./listagemProdutos";

export default class DeleteProduto extends Delete{
    private produtos: Array <Produto>

    constructor (produtos: Array <Produto>){
        super()
        this.produtos = produtos
    }
    
    listarProdutos(){
        let listProduto = new ListaProdutos(this.produtos)
        listProduto.listar()
        let entrada = new Entrada()
        let id = entrada.receberNumero("Digite o id do Produto: ")
        let indice = this.produtos.findIndex(i => i.getProdutoId === id)
        this.produtos.splice(indice,1)
        return
    }

    public deletar(): void {
        this.listarProdutos()

        console.log(`\n############################ `);
        console.log("Produto excluído com sucesso ");
        console.log(`############################ \n`);      
    }
}