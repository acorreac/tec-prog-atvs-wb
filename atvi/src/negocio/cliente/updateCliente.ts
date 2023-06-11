import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Telefone from "../../modelo/telefone";
import Update from "../update";
import ListagemClientes from "./listagemClientes";

export default class UpdateCliente extends Update {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public update(): void {
        console.log(`\n##################################### `);
        console.log('Atualizar dados cadastrais do cliente ');
        console.log(`##################################### \n`);

        const clienteList = new ListagemClientes(this.clientes)
        clienteList.listar()

        let cpf = this.entrada.receberTexto('Digite o cpf do cliente: ')
        
        this.clientes.forEach(cliente => {
            if(cpf === cliente.getCpf.getValor){
                let verify = true
                while(verify){
                    console.log("\n O que você deseja atualizar: \n");
                    console.log(`--------------------------------------\n`);                    
                    console.log('1 - Nome');
                    console.log('2 - Nome Social');
                    console.log('3 - Gênero');
                    console.log('4 - Telefone');
                    console.log('0 - Voltar ao Menu \n');
                    console.log(`--------------------------------------\n`);

                    let opcao = this.entrada.receberNumero("Escolha o que deseja atualizar: ")

                    switch (opcao) {
                        case 1:
                            let nome = this.entrada.receberTexto('Digite o nome do cliente: ')
                            cliente.nome = nome
                            break;

                        case 2:
                            let nomeSocial = this.entrada.receberTexto('Digite o nome social do cliente: ')
                            cliente.nomeSocial = nomeSocial
                            break;
                        
                        case 3:
                            let genero = this.entrada.receberTexto('Gênero (F -> Feminino | M -> Masculino | O -> Outros | N -> Não informado): ')
                            cliente.genero = genero
                            break;

                        case 4:
                            const telefones = cliente.getTelefones;
                            for(let i: number = 0; i < cliente.getTelefones.length; i++){
                                let Tel = this.entrada.receberTexto(`Antigo número ${telefones[i].getTelefone}, insira o novo número, no padrão (00) 00000-0000: `)
                                let partesTel = Tel.split(')')

                                let numeroTel = partesTel[0] + ")-" + partesTel[1]
                                let telCompleto = numeroTel.split("-")

                                let ddd = new String(telCompleto[0].valueOf()).valueOf()
                                let numero = new String(telCompleto[1].valueOf()).valueOf()

                                cliente.updateTelefone(telefones[i])
                                cliente.getTelefones.push(new Telefone(ddd, numero))
                                break;
                            }

                        case 0:
                            verify = false
                            console.log('Voltando ao menu...');
                            break;

                        default:
                            console.log('*Por favor digite uma opção existente!*')
                            break;
                    }
                }
            }
        })
        console.log(`\n############################# `);
        console.log('Dados do cliente atualizados! ');
        console.log(`############################# \n`);
    }
}