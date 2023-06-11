import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Cadastro from "../cadastro";

export default class CadastroProduto extends Cadastro{
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos:Array<Produto>){
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        
        console.log(`\n############################ `);
        console.log(`Inicio do Cadastro do Produto `);
        console.log(`############################## \n`);

        let nomeProduto = this.entrada.receberTexto(`Por favor informe o nome do produto: `)
        let nomeProd = this.produtos.map(i => (i.nome))
        
        if (nomeProd.includes(nomeProduto)){
            console.log(`*${nomeProduto} existente no sistema!*`);            
        }
        else{

            let descricaoProduto = this.entrada.receberTexto(`Por favor informe a descrição do produto: `)
            let valorProduto = this.entrada.receberNumero(`Por favor informe o valor do produto R$: `)
            let idProduto = this.entrada.receberNumero(`Por favor informe o codigo de identificação do produto: `)

            let produto = new Produto(nomeProduto, descricaoProduto, valorProduto, idProduto)
            this.produtos.push(produto)
            
            console.log(`\n#################################### `);
            console.log(`${nomeProduto} inserido `);
            console.log(`Cadastro concluído com sucesso`);
            console.log(`#################################### \n`);
        }
    }
}