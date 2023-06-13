import Entrada from "../io/entrada"
import Empresa from "../modelo/empresa"
import CadastroCliente from "../negocio/cliente/cadastroCliente"
import DeleteCliente from "../negocio/cliente/deleteCliente"
import ListaClientes from "../negocio/cliente/listagemClientes"
import UpdateCliente from "../negocio/cliente/updateCliente"
import Listagem from "../negocio/listagem"

export default class MenuCliente extends Listagem{
    private empresa: Empresa

    constructor(empresa: Empresa){
        super()
        this.empresa = empresa
    }

    menuCliente(empresa: Empresa){
        let execucao = true

        console.log(`\n**************************** `);
        console.log(`Bem-vindo ao Menu do Cliente `)
        console.log(`**************************** \n`);

        while(execucao){
            console.log(" - Clientes: \n");
            console.log(`1 - Cadastrar cliente.`);
            if(empresa.getClientes.length)console.log(`2 - Listar todos os clientes.`);
            if(empresa.getClientes.length)console.log(`3 - Atualizar dados do Cliente.`);
            if(empresa.getClientes.length)console.log(`4 - Excluir Cliente. \n`);
            console.log(`0 - Voltar para o Menu Principal \n`);

            let entrada = new Entrada()
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch(opcao){
                case 1:
                    let cadastra = new CadastroCliente(empresa.getClientes)
                    cadastra.cadastrar()
                    break;
                case 2:
                    let lista = new ListaClientes(empresa.getClientes)
                    lista.listar()
                    break;
                case 3:
                    let updateCliente = new UpdateCliente(empresa.getClientes)
                    updateCliente.update()
                    break;
                case 4:
                    let deleteCliente = new DeleteCliente(empresa.getClientes)
                    deleteCliente.deletar()
                    break;
                case 0:
                    return
                default:
                    console.log(`\n *Operação não entendida*`)
            }
        }
    }

    public listar(): void {
        this.menuCliente(this.empresa)
    }
}