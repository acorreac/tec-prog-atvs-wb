import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListaServicoConsumido extends Listagem{
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
    }

    public listar(): void {
        let cliServico: any = [];

        this.clientes.map(cli =>{
            cli.getServicosConsumidos.forEach(servico =>{
                let nome = servico.nome
                let qtd = cliServico[servico.nome] = (cliServico[servico.nome] || 0) + 1
                cliServico.push({
                    nome:nome,
                    quantidade:qtd
                })
            })
        })

        let ordenado = cliServico.sort( (a: { quantidade: number; }, b: { quantidade: number; })  => {
            return b.quantidade - a.quantidade }).slice(0, 1)

            console.log(`\n###################### `);
            console.log(`Serviço mais consumido `);
            console.log(`###################### \n`);
            

            ordenado.forEach((consumidos: { nome: string, quantidade: string}) => {
            console.log(`Nome: ${consumidos.nome} \n`);
            console.log(`Quantidade consumida: ${consumidos.quantidade} \n`);
            console.log();
        })

    }
}