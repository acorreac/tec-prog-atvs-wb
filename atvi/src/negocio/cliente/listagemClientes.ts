import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListaClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\n########################### `);
        console.log(`Lista de todos os clientes: `);
        console.log(`########################### \n`);

        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`Gênero: ` + cliente.genero);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`RG: ` + cliente.getRgs[0].getValor);
            console.log(`Telefone: ` + cliente.getTelefones[0].getTelefone + '\n');
            console.log(`--------------------------------------\n`);
        });
        console.log(`\n`);
    }
}