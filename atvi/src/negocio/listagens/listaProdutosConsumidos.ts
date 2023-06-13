import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListaProdutoConsumido extends Listagem{
    private clientes: Array<Cliente>

    constructor( clientes: Array<Cliente>){
        super()
        this.clientes = clientes
    }

    public listar(): void {
        let cliProd: any = [];

        this.clientes.map( cli =>{
            cli.getProdutosConsumidos.forEach(produto => {
                let nome = produto.nome
                let qtd = cliProd[produto.nome] = ( cliProd[produto.nome] || 0 ) + 1
                cliProd.push({
                    nome: nome,
                    quantidade: qtd
                })
            });
        })
        let ordenado = cliProd.sort( (a: { quantidade: number; }, b: { quantidade: number; })  => {
            return b.quantidade - a.quantidade }).slice(0, 1)

            console.log(`\n###################### `);
            console.log(`Produto mais consumido `);
            console.log(`###################### \n`);

            ordenado.forEach((consumidos: { nome: string, quantidade: string}) => {
            console.log(`Nome: ${consumidos.nome} \n`);
            console.log(`Quantidade consumida: ${consumidos.quantidade} \n`);
            console.log();
        })
    }
}