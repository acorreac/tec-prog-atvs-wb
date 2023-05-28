import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServico";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemProdutos from "../negocio/listagemProdutos";
import ListagemServico from "../negocio/listagemServico";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

function insertProduto(): void {
    new CadastroProduto(empresa.getProdutos).insertProduto('Gel')
    new CadastroProduto(empresa.getProdutos).insertProduto('Shampoo')
    new CadastroProduto(empresa.getProdutos).insertProduto('Condicionador')
    new CadastroProduto(empresa.getProdutos).insertProduto('Hidratante')
    new CadastroProduto(empresa.getProdutos).insertProduto('Máscara de Tratamento')
    new CadastroProduto(empresa.getProdutos).insertProduto('Pomada Modeladora')
    new CadastroProduto(empresa.getProdutos).insertProduto('Creme de Pentear')
    new CadastroProduto(empresa.getProdutos).insertProduto('Tinta de Cabelo')
    new CadastroProduto(empresa.getProdutos).insertProduto('Creme de Barbear')
    new CadastroProduto(empresa.getProdutos).insertProduto('Peruca')
}

// function insertCliente(): void {
//     new CadastroCliente(empresa.getClientes).insertCliente()
    
// }

while (execucao) {
    insertProduto();
    // insertCliente();

    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Cadastrar produto`);
    console.log(`3 - Cadastrar serviço`);
    console.log(`4 - Listar todos os clientes`);
    console.log(`5 - Listar todos os produtos`);
    console.log(`6 - Listar todos os serviços`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastroCliente = new CadastroCliente(empresa.getClientes)
            cadastroCliente.cadastrar()
            break;
        case 2:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
            break;
        case 3:
            let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar()
            break;
        case 4:
            let listagemClientes = new ListagemClientes(empresa.getClientes)
            listagemClientes.listar()
            break;
        case 5:
            let listagemProdutos = new ListagemProdutos(empresa.getProdutos)
            listagemProdutos.listar()
            break;
        case 6:
        let listagemServico = new ListagemServico(empresa.getServicos)
        listagemServico.listar()
        break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}