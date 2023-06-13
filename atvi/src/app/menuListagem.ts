import Entrada from "../io/entrada"
import Empresa from "../modelo/empresa"
import Listagem from "../negocio/listagem"
import ListaConsumoGenero from "../negocio/listagens/listaConsumoGenero"
import ListaConsumoMaior from "../negocio/listagens/listaConsumoMaior"
import ListaConsumoMenor from "../negocio/listagens/listaConsumoMenor"
import ListaConsumoPreco from "../negocio/listagens/listaConsumoPreco"
import ListaGeneros from "../negocio/listagens/listaGenero"
import ListaProdutoConsumido from "../negocio/listagens/listaProdutosConsumidos"
import ListaServicoConsumido from "../negocio/listagens/listaServicosConsumidos"

export default class MenuListagem extends Listagem{
    private empresa: Empresa

    constructor(empresa: Empresa){
        super()
        this.empresa = empresa
    }

    menuListas(empresa: Empresa){
        let execucao = true

        console.log(`\n***************************** `);
        console.log(`Bem-vindo ao Menu de Listagem `);
        console.log(`***************************** \n`);

        while(execucao){
            console.log(" - Listagens: \n");
            if(empresa.getClientes.length)console.log(`1 - Listagem de Clientes por Gênero.`);   
            if(empresa.getServicos.length)console.log(`2 - Serviços mais consumidos.`);
            if(empresa.getProdutos.length)console.log(`3 - Produtos mais consumidos.`);
            console.log(`4 - Listagem dos 10 Clientes de maior consumo.`);
            console.log(`5 - Listagem dos 10 Clientes de menor consumo.`);
            console.log(`6 - Listagem de Produtos e Serviços mais consumidos por gênero.`);
            console.log(`7 - Top 5 Clientes que mais consumiram em valor. \n`);
            console.log(`0 - Voltar para o Menu Principal \n`);

            let entrada = new Entrada()
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch (opcao) {
                case 1:
                    let listaGenero = new ListaGeneros(empresa.getClientes)
                    listaGenero.listar()
                    break;
                case 2:
                    let servMaisConsumido = new ListaServicoConsumido(empresa.getClientes)
                    servMaisConsumido.listar()
                    break;
                case 3:
                    let prodMaisConsumido = new ListaProdutoConsumido(empresa.getClientes)
                    prodMaisConsumido.listar()
                    break;
                case 4:
                    let qtdMaisConsumida = new ListaConsumoMaior(empresa)
                    qtdMaisConsumida.listar()
                    break;
                case 5:
                    let qtdMenosConsumida = new ListaConsumoMenor(empresa)
                    qtdMenosConsumida.listar()
                    break;
                case 6:
                    let listaConsumoGenero = new ListaConsumoGenero(empresa.getClientes)
                    listaConsumoGenero.listar()
                    break;
                case 7:
                    let listConsumidoPreco = new ListaConsumoPreco(empresa.getClientes)
                    listConsumidoPreco.listar()
                    break;
                case 0:
                    return
                default:
                    console.log(`\n *Operação não entendida* `)
            }
        }
    }

    public listar(): void {
        this.menuListas(this.empresa)
    }
}