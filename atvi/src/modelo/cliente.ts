import CPF from "./cpf"
import Genero from "./genero"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    public genero: Array<Genero>
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    constructor(nome: string, nomeSocial: string, cpf: CPF) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.genero = []
        this.cpf = cpf
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
    }
    public get getGenero(): Array<Genero> {
        return this.genero
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }

    public postTelefone(telefone: Telefone): void {
        this.telefones.push(telefone)
    }
    public postRg(rg: RG): void {
        this.rgs.push(rg)
    }
    public postGenero(genero: Genero): void{
        this.genero.push(genero)
    }
    public postProdutosConsumidos(produtosConsumido: Produto): void{
        this.produtosConsumidos.push(produtosConsumido)
    }
    public postServicosConsumidos(servicosConsumido: Servico): void{
        this.servicosConsumidos.push(servicosConsumido)
    }
}