import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import RG from "../../modelo/rg";
import Telefone from "../../modelo/telefone";
import Cadastro from "../cadastro";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\n############################# `);
        console.log(`Início do cadastro do cliente `);
        console.log(`########################### \n`);

        let cpfNumber = this.entrada.receberTexto(`Por favor informe o número do cpf, no padrão(000.000.000-00):`)
        let buscaCpf= this.clientes.map(i => (i.getCpf.getValor))

        if (buscaCpf.includes(cpfNumber)){
            console.log(`O CPF de n°: ${cpfNumber} existente no sistema!`);            
        }
        else{
            let dataCpf = this.entrada.receberTexto(`Por favor informe a CPF de emissão do cpf, no padrão dd/mm/yyyy: `)
            let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
            let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
            let genero = this.entrada.receberTexto(`Por favor informe seu gênero (F -> Feminino || M -> Masculino || O -> Outros || N -> Não informado): `)       
            
            let partesDataCpf = dataCpf.split('/')
           
            let diaCpf = new Number(partesDataCpf[0].valueOf()).valueOf()
            let mesCpf = new Number(partesDataCpf[1].valueOf()).valueOf()
            let anoCpf = new Number(partesDataCpf[2].valueOf()).valueOf()
            
            let dataEmissaoCpf = new Date(anoCpf, mesCpf, diaCpf)
            let cpf = new CPF(cpfNumber, dataEmissaoCpf);
            
            let valorRG = this.entrada.receberTexto(`Por favor informe o número do RG, no padrão 00.000.000-0: `)
            let dataRG = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `)
            
            let partesRg = dataRG.split('/')
            
            let diaRG = new Number(partesRg[0].valueOf()).valueOf()
            let mesRG = new Number(partesRg[1].valueOf()).valueOf()
            let anoRG = new Number(partesRg[2].valueOf()).valueOf()
            
            let dataEmissaoRG = new Date(anoRG, mesRG, diaRG)
            let rg = new RG(valorRG, dataEmissaoRG)

            let tel = this.entrada.receberTexto(`Por favor informe o número de telefone, no padrão (00) 0000-0000: `)
            
            let partesTel = tel.split(')')
            let numeroTel = partesTel[0] + ')-' + partesTel[1]

            let telCompleto = numeroTel.split('-')

            let ddd = new String(telCompleto[0].valueOf()).valueOf()
            let numero = new String(telCompleto[1].valueOf()).valueOf()
            let telefone = new Telefone(ddd, numero)

            let cliente = new Cliente(nome, nomeSocial, cpf, genero);

            cliente.getTelefones.push(telefone)
            cliente.getRgs.push(rg)
            this.clientes.push(cliente)

            console.log(`\n############################### `);
            console.log(`Cadastro concluído com sucesso! `);
            console.log(`############################### \n`);
        }
    }
}

