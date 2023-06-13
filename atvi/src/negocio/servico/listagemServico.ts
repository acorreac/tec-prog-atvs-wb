import Listagem from "../listagem";
import Servico from "../../modelo/servico";

export default class ListaServicos extends Listagem{
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
    }
    public listar(): void {
        console.log(`\n############################### `);
        console.log(`Listagem de servicos cadastrados `);
        console.log(`################################# \n`);
        
        this.servicos.forEach( servico => {
            console.log(`Nome do serviço: ` + servico.nome + `\n`);
            console.log(`Descrição do serviço: ` + servico.descricao + `\n`);
            console.log(`Preço do serviço R$: ` + servico.preco + `\n`);
            console.log(`Código identificador do serviço: ` +servico.getServicoId + '\n');
            console.log(`-------------------------------------- \n`);
        })
        console.log(`\n`);
    }
}