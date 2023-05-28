import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class ListagemProdutos extends Listagem {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }
    public listar(): void {
        let n = 1
        console.log(`\nLista de todos os produtos:`);
        this.produtos.forEach(Produto => {
            console.log(`Produto ${n++}: ` + Produto.nome);
        });
        console.log(`\n`);
    }
}