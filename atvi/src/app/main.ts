import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import MenuAutocadastro from "./menuAutocadastro";
import MenuCliente from "./menuCliente";
import MenuListagem from "./menuListagem";
import MenuPedido from "./pedido";
import MenuProduto from "./produto";
import MenuServico from "./servico";

console.log(`\n******************************************************* `);
console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty `)
console.log(`******************************************************* \n`);

let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(` *Opções*: \n`);
    console.log(`1 - Cliente.`);
    console.log(`2 - Produto.`);
    console.log(`3 - Serviço.`);
    console.log(`4 - Pedido.`);
    console.log(`5 - Listagem.`);
    console.log(`6 - Autocadastro. \n`);
    console.log(`0 - Sair \n`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`*Por favor, escolha uma opção*: `)

    switch (opcao) {
        case 1:
            let testeCliente = new MenuCliente(empresa)
            testeCliente.listar()
            break;

        case 2:
            let testeProduto = new MenuProduto(empresa)
            testeProduto.listar()
            break;

        case 3:
            let testeServico = new MenuServico(empresa)
            testeServico.listar()
            break;

        case 4:
            let testePedido = new MenuPedido(empresa)
            testePedido.listar()
            break;

        case 5:
            let testeListagem = new MenuListagem(empresa)
            testeListagem.listar()
            break;

        case 6:
            let testeAutocadastro = new MenuAutocadastro(empresa)
            testeAutocadastro.listar()
            break;

        case 0:
            execucao = false
            console.log(`*Até mais* \n`)
            break;

        default:
            console.log(`\n *Operação não entendida* \n`)
    }
}