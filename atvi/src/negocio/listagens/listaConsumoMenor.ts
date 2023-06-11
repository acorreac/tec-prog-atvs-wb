import Cliente from "../../modelo/cliente";
import Empresa from "../../modelo/empresa";
import Listagem from "../listagem";

export default class ListaConsumoMenor extends Listagem{
    private clientes: Array <Cliente>

    constructor(empresa:Empresa){
        super()
        this.clientes = empresa.getClientes
    }
    public listar(): void {
        let nome, cpf, consumoTotal, ordenacao
        let qtdConsumida: any  = [];
        var i = 1

        this.clientes.forEach( cliente => {
            nome = cliente.nome;
            cpf = cliente.getCpf.getValor

            consumoTotal = cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length;

            qtdConsumida.push({
                nome: nome,
                cpf: cpf,
                quantidade: consumoTotal,
                posicao: i

            });
            i = i + 1 
        })
        ordenacao = qtdConsumida.sort((x, y) => {
            return y.quantidade - x.quantidade;
        })

        ordenacao.reverse()
        ordenacao = ordenacao.slice(0,10)

        console.log(`\n################################################################################# `);
        console.log("Listagem dos 10 Clientes que MENOS consumiram produtos ou servicos em quantidade. ");
        console.log(`################################################################################# \n`);

        ordenacao.forEach( cliente => {
            console.log(`Nome do Cliente: ${cliente.nome} \n` );
            console.log(`CPF do Cliente: ${cliente.cpf} \n` );
            console.log(`Quantidade de produtos e servicos Consumido pelo Cliente: ${cliente.quantidade} \n` );

            console.log(`\n--------------------------------------\n`);
        })

    }
}