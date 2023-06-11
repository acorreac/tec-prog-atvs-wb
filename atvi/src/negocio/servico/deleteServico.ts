import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Delete from "../delete";
import ListaServicos from "./listagemServico";

export default class DeleteServico extends Delete{
    private servicos: Array <Servico>

    constructor (servicos: Array <Servico>){
        super()
        this.servicos = servicos
    }

    listarServicos(){
        let listServico = new ListaServicos(this.servicos)
        listServico.listar()
        let entrada = new Entrada()
        let id = entrada.receberNumero("Digite o id do Serviço: ")
        let indice = this.servicos.findIndex(i=> i.getServicoId === id)
        this.servicos.splice(indice,1)
        return
    }

    public deletar(): void{
        this.listarServicos()

        console.log(`\n########################## `);
        console.log("Serviço excluído com sucesso ");
        console.log(`############################ \n`);      
    }
}