export default class Servico {
    public nome: string
    public descricao: string
    public preco: number
    public servicoId: number
    
    constructor(nome: string, descricao: string, preco: number, servicoId: number){
        this.nome = nome
        this.descricao = descricao
        this.preco = preco
        this.servicoId = servicoId
    }
    public get getNome(): string{
        return this.nome
    }
    public get getDescricao(): string{
        return this.descricao
    }
    public get getPreco(): number{
        return this.preco
    }
    public get getServicoId(): number{
        return this.servicoId
    }
}