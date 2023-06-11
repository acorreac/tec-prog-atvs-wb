import Entrada from "../../io/entrada"
import Produto from "../../modelo/produto";
import Update from "../update";
import ListaProdutos from "./listagemProdutos";

export default class UpdateProduto extends Update{
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public update(): void {
        console.log(`\n####################### `);
        console.log("Atualização de Produtos ");
        console.log(`####################### \n`);
        
        const listProduto = new ListaProdutos(this.produtos)
        listProduto.listar()

        let id = this.entrada.receberNumero('Digite o ID do Produto que deseja atualizar: ')
        
        this.produtos.forEach(produto => {
            if(id === produto.getProdutoId){
                let verifica = true
                
                while (verifica) {
                    console.log("\n Selecione o que você deseja atualizar: \n");
                    console.log(`--------------------------------------\n`);                    
                    console.log('1 - Nome do Produto');
                    console.log('2 - Descrição do Produto');
                    console.log('3 - Preço');
                    console.log('0 - Sair para o Menu \n');
                    console.log(`--------------------------------------\n`);

                    let entrada = new Entrada()
                    let opcao = entrada.receberNumero('Escolha o que deseja atualizar: ')
                    console.log('\n');

                    switch (opcao) {
                        case 1:
                            let nomeProduto = this.entrada.receberTexto('Digite o novo nome do Produto: ')
                            produto.nome = nomeProduto
                            break;

                        case 2:
                            let descricaoProduto = this.entrada.receberTexto('Digite a nova descrição: ')
                            produto.descricao = descricaoProduto
                            break;

                        case 3:
                            let valorProduto = this.entrada.receberNumero('Digite o novo preço R$: ')
                            produto.valor = valorProduto
                            break;
                            
                        case 0:
                            verifica = false
                            console.log('Voltando para o menu...');
                            break;

                        default:
                            console.log(`*Por favor digite uma opção existente!*`)
                            break;
                    }
                }
            }
        })
        console.log(`\n######################################## `);
        console.log("Dados do Produto atualizado com Sucesso! ");
        console.log(`######################################## \n`);
    }
}