import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import Cadastro from "./cadastro";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let genero = this.entrada.receberTexto(`Por favor informe seu gênero: `)
        
        let valorCpf = this.entrada.receberTexto(`Por favor informe o número do cpf: `)
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `)
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissaoCPF = new Date(ano, mes, dia)
        let cpf = new CPF(valorCpf, dataEmissaoCPF);
        
        let valorRG = this.entrada.receberTexto(`Por favor informe o número do RG: `)
        let dataRG = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `)
        
        let anoRG = new Number(partesData[2].valueOf()).valueOf()
        let mesRG = new Number(partesData[1].valueOf()).valueOf()
        let diaRG = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissaoRG = new Date(ano, mes, dia)
        let rg = new RG(valorRG, dataEmissaoRG)

        
        let cliente = new Cliente(nome, nomeSocial, genero, cpf)
        this.clientes.push(cliente)


        let tel = this.entrada.receberTexto(`Por favor informe o número de telefone: `)
        let partesTel = tel.split('-')
        let ddd = partesTel[0].valueOf()
        let numero = partesTel[1].valueOf()
        let telefone = new Telefone(ddd, numero)

        cliente.adicionarTelefone(telefone)
        cliente.adicionarRg(rg)

        console.log(`\nCadastro concluído :)\n`);
    }
}
