import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Update from "../update";
import ListaServicos from "./listagemServico";

export default class UpdateServico extends Update{
    private servicos: Array <Servico>
    private entrada: Entrada

    constructor(servicos: Array <Servico>){
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public update(): void {
        console.log(`\n################################ `);
        console.log("Atualização de cadastro do Serviço ");
        console.log(`################################## \n`);

        const listServico = new ListaServicos( this.servicos )
        listServico.listar()

        let idServ = this.entrada.receberNumero("Digite o Id do Serviço: ")

        this.servicos.forEach( servicos => {

            if (idServ === servicos.getServicoId){
                let verifica = true
                
                while (verifica) {
                    console.log("\n Selecione o que você deseja atualizar: \n");
                    console.log(`--------------------------------------\n`);                    
                    console.log('1 - Nome do Serviço');
                    console.log('2 - Descrição do Serviço');
                    console.log('3 - Preço do Serviço');
                    console.log('0 - Sair para o Menu \n');
                    console.log(`--------------------------------------\n`);

                    let entrada = new Entrada()
                    let opcao = entrada.receberNumero('Escolha o que deseja atualizar: ')
                    console.log('\n');

                    switch (opcao) {
                        case 1:
                            let nomeServico = entrada.receberTexto("Digite o novo nome do serviço: ")
                            servicos.nome = nomeServico
                            break;

                        case 2:
                            let descServico = entrada.receberTexto("Digite a nova descrição do serviço: ")
                            servicos.descricao = descServico
                            break;

                        case 3:
                            let precoServico = entrada.receberNumero("Digite o novo preço do serviço R$: ")
                            servicos.preco = precoServico
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
        console.log(`\n####################################### `);
        console.log("Dados do Serviço atualizados com Sucesso! ");
        console.log(`######################################### \n`);
    }
}