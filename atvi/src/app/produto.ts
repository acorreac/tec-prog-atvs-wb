import Entrada from "../io/entrada"
import Empresa from "../modelo/empresa"
import Listagem from "../negocio/listagem"
import CadastroProduto from "../negocio/produto/cadastroProduto"
import DeleteProduto from "../negocio/produto/deleteProduto"
import ListaProdutos from "../negocio/produto/listagemProdutos"
import UpdateProduto from "../negocio/produto/updateProduto"

export default class MenuProduto extends Listagem{
    private empresa: Empresa

    constructor(empresa: Empresa){
        super()
        this.empresa = empresa
    }

    menuProduto(empresa: Empresa){
        let execucao = true

        console.log(`\n**************************** `);
        console.log(`Bem-vindo ao Menu do Produto `)
        console.log(`**************************** \n`);

        while(execucao){
            console.log(" - Produtos: \n");
            console.log(`1 - Cadastrar produto.`);
            if(empresa.getProdutos.length)console.log(`2 - Listar todos os produto.`);
            if(empresa.getProdutos.length)console.log(`3 - Atualizar Dados do Produto.`);
            if(empresa.getProdutos.length)console.log(`4 - Excluir Produto. \n`);
            console.log(`0 - Voltar para o Menu Principal \n`);

            let entrada = new Entrada()
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch(opcao){
                case 1:
                    let cadastraProduto = new CadastroProduto(empresa.getProdutos)
                    cadastraProduto.cadastrar()
                    break;
                case 2:
                    let listaProduto = new ListaProdutos(empresa.getProdutos)
                    listaProduto.listar()
                    break;
                case 3:
                    let updateProduto = new UpdateProduto(empresa.getProdutos)
                    updateProduto.update()
                    break;
                case 4:
                    let deleteProduto = new DeleteProduto(empresa.getProdutos)
                    deleteProduto.deletar()
                    break;
                case 0:
                    return
                default:
                    console.log(`\n *Operação não entendida* `)

            }
        }
    }

    public listar(): void {
        this.menuProduto(this.empresa)
    }
}
