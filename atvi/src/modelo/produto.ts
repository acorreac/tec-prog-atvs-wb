export default class Produto {
    public nome: string
    public descricao: string
    public valor: number
    public produtoId: number

    constructor(nome: string, descricao: string, valor: number, produtoId: number){
        this.nome = nome
        this.descricao = descricao
        this.valor = valor
        this.produtoId = produtoId
    }
    public get getNome(): string{
        return this.nome
    }
    public get getDescricao(): string{
        return this.descricao
    }
    public get getValor(): number{
        return this.valor
    }
    public get getProdutoId(): number{
        return this.produtoId
    }
}