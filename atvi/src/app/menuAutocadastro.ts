import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import Listagem from "../negocio/listagem";
import ClientesIniciado from "../scripts/iniciaClientes";
import PedidosIniciado from "../scripts/iniciaPedidos";
import ProdutoIniciado from "../scripts/iniciaProdutos";
import ServicoIniciado from "../scripts/iniciaServicos";

export default class MenuAutocadastro extends Listagem{
    private empresa: Empresa

    constructor(empresa: Empresa){
        super();
        this.empresa = empresa
    }

    menuAutocadastro(empresa: Empresa){
        let execucao = true

        console.log(`\n********************************* `);
        console.log(`Bem-vindo ao Menu de Autocadastro `)
        console.log(`********************************* \n`);

        while(execucao){
            console.log(" - Autocadastro: \n");
            console.log(`1 - Autocadastro de Clientes.`);
            console.log(`2 - Autocadastro de Produtos.`);
            console.log(`3 - Autocadastro de Serviços.`);
            console.log(`4 - Autocadastro de Clientes com Produtos e Serviços. \n`);
            console.log(`0 - Voltar para o Menu Principal \n`);

            let entrada = new Entrada()
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch (opcao) {
                case 1:
                    let clientesIniciado = new ClientesIniciado(empresa.getClientes)
                    clientesIniciado.cadastrar()         
                    break;
                case 2:
                    let produtoIniciado = new ProdutoIniciado(empresa.getProdutos)
                    produtoIniciado.cadastrar()
                    break;
                case 3:
                    let servicoIniciado = new ServicoIniciado(empresa.getServicos)
                    servicoIniciado.cadastrar()
                    break;
                case 4:
                    let pedidosIniciado = new PedidosIniciado(empresa)
                    pedidosIniciado.cadastrar()
                    break;
                case 0:
                    return
                default:
                    break;
            }
        }
    }

    public listar(): void {
        this.menuAutocadastro(this.empresa)
    }
}