import Entrada from "../io/entrada"
import Empresa from "../modelo/empresa"
import Listagem from "../negocio/listagem"
import ListaPedidos from "../negocio/pedidos/listapedidos"
import Pedido from "../negocio/pedidos/pedidosClientes"

export default class MenuPedido extends Listagem{
    private empresa: Empresa

    constructor(empresa: Empresa){
        super()
        this.empresa = empresa
    }

    menuPedido(empresa: Empresa){
        let execucao = true
        
        console.log(`\n*************************** `);
        console.log(`Bem-vindo ao Menu do Pedido `);
        console.log(`*************************** \n`);

        while(execucao){
            console.log(" - Pedidos: \n");
            if(empresa.getClientes.length && empresa.getProdutos.length && empresa.getServicos.length){
                console.log(`1 - Adicionar Pedido.`);
            } 
            if(empresa.getClientes.length && empresa.getProdutos.length && empresa.getServicos.length){
                console.log(`2 - Listagem de Pedidos.`);    
            }
            console.log(`0 - Voltar para o Menu Principal\n`);

            let entrada = new Entrada()
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch (opcao) {
                case 1:
                    let pedidoCliente = new Pedido(empresa)
                    pedidoCliente.adicionarPedido()
                    break;
                case 2:
                    let listaPedidos = new ListaPedidos(empresa)
                    listaPedidos.listar()
                    break;
                case 0:
                    return
                default:
                    console.log(`\n *Operação não entendida* `)
            }
        }
    }

    public listar(): void {
        this.menuPedido(this.empresa)
    }
}
