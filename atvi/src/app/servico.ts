import Entrada from "../io/entrada"
import Empresa from "../modelo/empresa"
import Listagem from "../negocio/listagem"
import CadastroServico from "../negocio/servico/cadastroServico"
import DeleteServico from "../negocio/servico/deleteServico"
import ListaServicos from "../negocio/servico/listagemServico"
import UpdateServico from "../negocio/servico/updateServico"

export default class MenuServico extends Listagem{
    private empresa:Empresa

    constructor(empresa: Empresa){
        super()
        this.empresa = empresa
    }

    menuServ(empresa: Empresa){

        let execucao = true
        console.log(`\n**************************** `);
        console.log(`Bem-vindo ao Menu do Serviço `)
        console.log(`**************************** \n`);

        while(execucao){
            console.log(" - Serviços: \n");
            console.log(`1 - Cadastrar serviço`);
            if(empresa.getServicos.length)console.log(`2 - Listar todos os serviços`);
            if(empresa.getServicos.length)console.log(`3 - Atualizar Dados do Serviço`);
            if(empresa.getServicos.length)console.log(`4 - Excluir Serviço \n`);
            console.log(`0 - Voltar para o Menu Principal\n`);

            let entrada = new Entrada()
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch (opcao) {
                case 1:
                    let cadastraServico = new CadastroServico(empresa.getServicos)
                    cadastraServico.cadastrar()
                    break;
                case 2:
                    let listaServico = new ListaServicos(empresa.getServicos)
                    listaServico.listar()
                    break;
                case 3:
                    let updateServico = new UpdateServico(empresa.getServicos)
                    updateServico.update()
                    break;
                case 4:
                    let deleteServico = new DeleteServico(empresa.getServicos)
                    deleteServico.deletar()
                    break;
                case 0:
                    return
                default:
                    console.log(`\n *Operação não entendida* \n`)
            }
        }
    }

    public listar(): void {
        this.menuServ(this.empresa)
    }
}
