import Cliente from "../../modelo/cliente"
import Listagem from "../listagem"


export default class ListaConsumoGenero extends Listagem {
    private clientes: Array<Cliente>
    
    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
    }

    public listar(): void {
        let filtrado: any;

        filtrado = this.clientes.reduce(( acc, cur ) => {

            cur.getProdutosConsumidos.forEach( p => {
                if(acc[cur.genero][`produto_${p.getProdutoId}`]){
                    acc[cur.genero][`produto_${p.getProdutoId}`].qtd++
                }else{
                    acc[cur.genero][`produto_${p.getProdutoId}`] = { qtd:1, nome:p.getNome }
                }
            })
            cur.getServicosConsumidos.forEach( s => {
                if(acc[cur.genero][`servico_${s.getServicoId}`]){
                    acc[cur.genero][`servico_${s.getServicoId}`].qtd++
                }else{
                    acc[cur.genero][`servico_${s.getServicoId}`] = {qtd:1, nome:s.getNome}
                }
            })
            return acc

        },{M:{}, F:{}, O:{}, N:{}})

        let ordenadoM = Object.keys(filtrado.M).map(k => {
            const [tipo,id] = k.split("_")
            return {id, tipo, qtd:filtrado.M[k].qtd, nome:filtrado.M[k].nome}
        }).sort((a, b) => b.qtd - a.qtd).slice(0, 3)

        let ordenadoF = Object.keys(filtrado.F).map( k => {
            const [tipo,id] = k.split("_")
            return {id, tipo, qtd:filtrado.F[k].qtd, nome:filtrado.F[k].nome}
        }).sort((a, b) => b.qtd - a.qtd).slice(0, 3)

        let ordenadoO = Object.keys(filtrado.O).map( k => {
            const [tipo,id] = k.split("_")
            return {id, tipo, qtd:filtrado.O[k].qtd, nome:filtrado.O[k].nome}
        }).sort((a, b) => b.qtd - a.qtd).slice(0, 3)
        
        let ordenadoN = Object.keys(filtrado.N).map(k => {
            const [tipo,id] = k.split("_")
            return {id, tipo, qtd:filtrado.N[k].qtd, nome:filtrado.N[k].nome}
        }).sort((a, b) => b.qtd - a.qtd).slice(0, 3)

        console.log(`\n############################################################ `);
        console.log(`Listagem dos serviços ou produtos mais consumidos por gênero `);
        console.log(`############################################################ \n`);


        console.log(`*Masculino*`);

        ordenadoM.forEach( (items, index) => {
            console.log(`${index + 1}°`);
            console.log(`Id do ${items.tipo}: ${items.id}`);
            console.log(`Nome do ${items.tipo}: ${items.nome}`);
            console.log(`Quantidade Consumido: ${items.qtd}\n`);
        } )

        console.log(`\n--------------------------------------\n`);

        console.log(`*Feminino*`);

        ordenadoF.forEach( (items, index) => {
            console.log(`${index + 1}°`);
            console.log(`Id do produto: ${items.id}`);
            console.log(`Nome do ${items.tipo}: ${items.nome}`);
            console.log(`Quantidade Consumido: ${items.qtd}\n`);
        } )

        console.log(`\n--------------------------------------\n`);

        console.log(`*Outros*`);

        ordenadoO.forEach( (items, index) => {
            console.log(`${index + 1}°`);
            console.log(`Id do produto: ${items.id}`);
            console.log(`Nome do ${items.tipo}: ${items.nome}`);
            console.log(`Quantidade Consumido: ${items.qtd}\n`);
        } )

        console.log(`\n--------------------------------------\n`);

        console.log(`*Não Informado*`);

        ordenadoN.forEach( (items, index) => {
            console.log(`${index + 1}°`);
            console.log(`Id do produto: ${items.id}`);
            console.log(`Nome do ${items.tipo}: ${items.nome}`);
            console.log(`Quantidade Consumido: ${items.qtd}\n`);
        } )
    }

}