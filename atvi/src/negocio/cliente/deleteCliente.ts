import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Delete from "../delete";
import ListagemClientes from "./listagemClientes";

export default class DeleteCliente extends Delete {
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }

    listarCliente(){
        let clienteList = new ListagemClientes(this.clientes)
        clienteList.listar()
        let entrada = new Entrada()
        let cpf = entrada.receberTexto("digite o CPF do cliente: ")
        let indice = this.clientes.findIndex( i => i.getCpf.getValor === cpf)
        this.clientes.splice(indice, 1)
        return
    }

    public deletar(): void{
        this.listarCliente()
        
        console.log(`\n############################# `);
        console.log('Cliente excluído com sucesso!')
        console.log(`############################# \n`);
    }
}