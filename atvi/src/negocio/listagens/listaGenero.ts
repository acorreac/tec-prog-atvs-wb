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
        masculino.forEach(masculino => {
            console.log(`Nome: ` + masculino.nome + '\n');
            console.log(`Nome Social: ` + masculino.nomeSocial + '\n');
            console.log(`Cpf: ` + masculino.getCpf.getValor + '\n');
            console.log(`Telefone: ` + masculino.getTelefones[0].getTelefone + '\n');
            console.log(`------------------ \n`)
        })

        //Feminino
        console.log('*Gênero Masculino*: \n');
        masculino.forEach(feminino => {
            console.log(`Nome: ` + feminino.nome + '\n');
            console.log(`Nome Social: ` + feminino.nomeSocial + '\n');
            console.log(`Cpf: ` + feminino.getCpf.getValor + '\n');
            console.log(`Telefone: ` + feminino.getTelefones[0].getTelefone + '\n');
            console.log(`------------------ \n`)
        })
        
        //Outros
        console.log('*Gênero Outros*: \n');
        masculino.forEach(outros => {
            console.log(`Nome: ` + outros.nome + '\n');
            console.log(`Nome Social: ` + outros.nomeSocial + '\n');
            console.log(`Cpf: ` + outros.getCpf.getValor + '\n');
            console.log(`Telefone: ` + outros.getTelefones[0].getTelefone + '\n');
            console.log(`------------------ \n`)
        })

        //Não Informado
        console.log('*Gênero Não Informado*: \n');
        naoInformado.forEach(naoInformado => {
            console.log(`Nome: ` + naoInformado.nome + '\n');
            console.log(`Nome Social: ` + naoInformado.nomeSocial + '\n');
            console.log(`Cpf: ` + naoInformado.getCpf.getValor + '\n');
            console.log(`Telefone: ` + naoInformado.getTelefones[0].getTelefone + '\n');
            console.log(`------------------ \n`)
        })
        
    }
}