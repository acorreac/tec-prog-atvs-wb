import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListaGeneros extends Listagem{
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void{
        let masculino: Cliente[] = [];
        let feminino: Cliente[] = [];
        let outros: Cliente[] = [];
        let naoInformado: Cliente[] = [];

        this.clientes.forEach(cliente => {
            if(cliente.genero === 'M'){
                masculino.push(cliente)
            }
            if(cliente.genero === 'F'){
                feminino.push(cliente)
            }
            if(cliente.genero === 'O'){
                outros.push(cliente)
            }
            if(cliente.genero === 'N'){
                naoInformado.push(cliente)
            }
        })

        console.log(`\n################################ `);
        console.log('Listagem dos Clientes por Gênero ');
        console.log(`################################ \n`);

        //Masculino
        console.log('*Gênero Masculino*: \n');
        masculino.forEach(m => {
            console.log(`Nome: ` + m.nome + '\n');
            console.log(`Nome Social: ` + m.nomeSocial + '\n');
            console.log(`Cpf: ` + m.getCpf.getValor + '\n');
            console.log(`Telefone: ` + m.getTelefones[0].getTelefone + '\n');
            console.log(`------------------ \n`)
        })

        //Feminino
        console.log('*Gênero Feminino*: \n');
        feminino.forEach(f => {
            console.log(`Nome: ` + f.nome + '\n');
            console.log(`Nome Social: ` + f.nomeSocial + '\n');
            console.log(`Cpf: ` + f.getCpf.getValor + '\n');
            console.log(`Telefone: ` + f.getTelefones[0].getTelefone + '\n');
            console.log(`------------------ \n`)
        })
        
        //Outros
        console.log('*Gênero Outros*: \n');
        outros.forEach(o => {
            console.log(`Nome: ` + o.nome + '\n');
            console.log(`Nome Social: ` + o.nomeSocial + '\n');
            console.log(`Cpf: ` + o.getCpf.getValor + '\n');
            console.log(`Telefone: ` + o.getTelefones[0].getTelefone + '\n');
            console.log(`------------------ \n`)
        })

        //Não Informado
        console.log('*Gênero Não Informado*: \n');
        naoInformado.forEach(ni => {
            console.log(`Nome: ` + ni.nome + '\n');
            console.log(`Nome Social: ` + ni.nomeSocial + '\n');
            console.log(`Cpf: ` + ni.getCpf.getValor + '\n');
            console.log(`Telefone: ` + ni.getTelefones[0].getTelefone + '\n');
            console.log(`------------------ \n`)
        })
        
    }
}