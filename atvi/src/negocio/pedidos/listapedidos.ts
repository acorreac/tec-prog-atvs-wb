import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Empresa from "../../modelo/empresa";
import ListaClientes from "../cliente/listagemClientes";
import Listagem from "../listagem";

export default class ListaPedidos extends Listagem{
    private clientes: Array<Cliente>

    constructor(empresa:Empresa){
        super()
        this.clientes = empresa.getClientes
    }
    selectCliente(){
        let listarClientes = new ListaClientes(this.clientes)
        listarClientes.listar()
        let entrada = new Entrada()
        let cpf = entrada.receberTexto(`Digite o CPF do cliente: `)
        let cliente = this.clientes.find( c => cpf === c.getCpf.getValor)
        
        return cliente
    }

    public listar(): void {
        const cliente = this.selectCliente()
        let cliProd: any = [];
        let cliServico: any = [];

        cliente?.getProdutosConsumidos.map(produto => {
            cliProd.push({
                nome: produto.nome,
                descricao: produto.descricao,
                valor: produto.getValor,
                id: produto.getProdutoId
            })
        })

        cliente?.getServicosConsumidos.map(servico => {
            cliServico.push({
                nome: servico.nome,
                descricao: servico.descricao,
                valor: servico.getPreco,
                id: servico.getServicoId
            })
        })

        console.log(` \nProdutos Consumidos do(a) cliente: ${cliente?.nome} \n`)
        if(cliProd.length < 1){
            console.log("*Cliente ainda não comprou nenhum produto*")
        }else{
            cliProd.map(produto => {
                console.log(`ID do produto: ${produto.id}`);
                console.log(`Produtos: ${produto.nome}`);
                console.log(`Preço do produto R$: ${produto.valor} \n`);
            })
        }

        console.log(`-----------------------------------`);

        console.log(`\nServiços consumidos do(a) cliente ${cliente?.nome}\n`);
        if(cliServico.length < 1){
            console.log("*Cliente ainda não consumiu nenhum serviço*")
        }else{
            cliServico.map(servico =>{
                console.log(`ID do serviço:${servico.id}`);
                console.log(`Serviços:${servico.nome}`);
                console.log(`Preço do serviço R$: ${servico.valor} \n`);
            })   
        }        
    }
} 