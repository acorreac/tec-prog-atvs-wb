import Cliente from "../../modelo/cliente"
import Listagem from "../listagem"

export default class ListaConsumoPreco extends Listagem{
    private clientes: Array<Cliente>

    constructor( clientes: Array<Cliente>){
        super()
        this.clientes = clientes
    }

    public listar(): void {
        let consumoQtd: any = []

        this.clientes.forEach( cliente => {
            let cpf = cliente.getCpf.getValor;
            let nome = cliente.nome
            let nomeSocial = cliente.nomeSocial
            let consumoTotal : number = 0
            
            cliente.getProdutosConsumidos.forEach((produto)=>{
                consumoTotal = consumoTotal + produto.getValor
            })

            cliente.getServicosConsumidos.forEach((servico)=>{
                consumoTotal = consumoTotal + servico.getPreco
            })
            
            consumoQtd.push({
                nome:nome,
                cpf:cpf,
                nomeSocial:nomeSocial,
                quantidade:consumoTotal
            })
        })

        consumoQtd = consumoQtd.sort((a: { quantidade: number; }, b: { quantidade: number; }) => {
            return b.quantidade - a.quantidade;
          });
      
        consumoQtd = consumoQtd.slice(0, 5);
        
        console.log(`\n####################################################### `);
        console.log("Listagem dos 5 Clientes que mais consumiram (em valor): ");
        console.log(`####################################################### \n`);

            consumoQtd.forEach(cliente => {
                console.log("CPF: " + cliente.cpf + '\n');
                console.log("Nome do cliente: " + cliente.nome  + '\n');
                console.log("Nome Social: " + cliente.nomeSocial  + '\n');
                console.log(`Valor Consumido: R$ ${cliente.quantidade} reais \n`);
                console.log(`-----------------------------------`);
            })
    }
}