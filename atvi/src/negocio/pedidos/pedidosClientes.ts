import Cadastro from "../cadastro";
import Cliente from "../../modelo/cliente";
import Servico from "../../modelo/servico";
import Empresa from "../../modelo/empresa";
import Produto from "../../modelo/produto";
import Entrada from "../../io/entrada";
import ListaClientes from "../cliente/listagemClientes";
import ListaProdutos from "../produto/listagemProdutos";
import ListaServicos from "../servico/listagemServico";

export default class Pedido extends Cadastro{
    public clientes: Array<Cliente>
    public produtos: Array<Produto>
    public servicos: Array<Servico>

    constructor(empresa:Empresa){
        super()
        this.clientes = empresa.getClientes
        this.produtos = empresa.getProdutos
        this.servicos = empresa.getServicos
    }

    adicionarPedido(){
        console.log(`
        0 - Voltar Para o Menu Principal
        1 - Cadastrar Pedido
        `)

        let entrada = new Entrada()
        let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

        switch(opcao){
            case 0:
                return
            case 1:
                if(this.clientes.length){
                    this.cadastrar()
                }else{
                    console.log('\n *Nenhum Cliente Cadastrado*')
                }
            break;
        }
    }
                
    selectCliente(){
        let listarCliente = new ListaClientes(this.clientes)
        listarCliente.listar()
        let entrada = new Entrada()
        let cpf = entrada.receberTexto(`Digite o CPF do cliente: `)
        let cliente = this.clientes.find( c => cpf === c.getCpf.getValor)
        return cliente
    }

    listProd():Produto{
        let listaProdutos = new ListaProdutos(this.produtos)
        listaProdutos.listar()
        let entrada = new Entrada()
        let produto = entrada.receberNumero(`Insira o codigo do produto: `)
        let prodEscolhido:Produto = this.produtos.find( p => produto === p.getProdutoId) as Produto
        return prodEscolhido
    }

    selectProduto(){
        let entrada = new Entrada()
        let produtos: Array<Produto> = []
        let maisProdutos: boolean = true;
        do{
            
            let compra = entrada.receberTexto(`Deseja comprar um produto ? [ SIM / NAO ] `)
            if( compra.toLocaleUpperCase() === 'SIM' ){
                let produto:Produto = this.listProd()

                produtos.push(produto)
            }else{
                maisProdutos = false
            }
        }while(maisProdutos)

        return produtos
    }

    listServico(){
        let listagemServ = new ListaServicos(this.servicos)
        listagemServ.listar()
        let entrada = new Entrada()
        let servico = entrada.receberNumero(`Insira o codigo do servico: `)
        let servEscolhido:Servico = this.servicos.find( s => servico === s.getServicoId) as Servico
        return servEscolhido
    }

    selectServico(){
        let entrada = new Entrada()
        let servicos: Array<Servico> = []
        let maisServicos: boolean = true;
        do{
            let comprea = entrada.receberTexto(`Deseja um serviço ? [ SIM / NAO ] `)
            if( comprea.toLocaleUpperCase() === 'SIM' ){
                let servico:Servico = this.listServico()

                servicos.push(servico)
            }else{
                maisServicos = false
            }
        }while(maisServicos)

        return servicos
    }

    public cadastrar(): void {
        const cliente = this.selectCliente()

        if( this.produtos.length){
            const produtos = this.selectProduto()
            cliente?.getProdutosConsumidos.push(...produtos)
        }

        if( this.servicos.length ){
            const servicos = this.selectServico()
            cliente?.getServicosConsumidos.push(...servicos)
        }

    }
}