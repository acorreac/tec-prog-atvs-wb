import Produto from "../modelo/produto";
import Cadastro from "../negocio/cadastro";

export default class ProdutoIniciado extends Cadastro{
    private produtos: Array<Produto>

    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
    }
    public cadastrar(): void {
        listaProdutos.forEach(listaProdutos=>{
            let nome, descricao, valor, idProduto

            nome = listaProdutos.nomeProduto;
            descricao = listaProdutos.descricaoProduto;
            valor = listaProdutos.valorProduto;
            idProduto = listaProdutos.idProduto;

            const NovoProduto = new Produto(
                nome,
                descricao,
                valor,
                idProduto
            );
            this.produtos.push(NovoProduto)
        })

        console.log(`\n############################################### `);
        console.log(`Autocadastro de produtos concluído com sucesso! `)
        console.log(`############################################### \n`);
    }

}

const listaProdutos = [
    {
        nomeProduto: 'Xampu Masculino',
        descricaoProduto: 'Produto exclusivo para caspas',
        valorProduto: 36.00,
        idProduto: 1
    },
    {
        nomeProduto: 'Pente',
        descricaoProduto: 'Pente.',
        valorProduto: 50.00,
        idProduto: 2
    },
    {
        nomeProduto: 'Peruca',
        descricaoProduto: 'Lace',
        valorProduto: 100.00,
        idProduto: 3
    },
    {
        nomeProduto: 'Tinta',
        descricaoProduto: 'Tinta',
        valorProduto: 70.00,
        idProduto: 4
    },    
    {
        nomeProduto: 'Mascara',
        descricaoProduto: 'Tratamento profundo',
        valorProduto: 18.00,
        idProduto: 5
    },
    {
        nomeProduto: 'Condicionar',
        descricaoProduto: 'Linha profissional',
        valorProduto: 70.00,
        idProduto: 6
    },
    {
        nomeProduto: 'Baton vermelho',
        descricaoProduto: 'Baton vermelho',
        valorProduto: 10.00,
        idProduto: 7
    },
    {
        nomeProduto: 'Baton rosa',
        descricaoProduto: 'Boca rosa Beauty',
        valorProduto: 12.00,
        idProduto: 8
    },
    {
        nomeProduto: 'Esmalte branco',
        descricaoProduto: 'Esmalte Risque',
        valorProduto: 15.00,
        idProduto: 9
    },
    {
        nomeProduto: 'Esmalte azul',
        descricaoProduto: 'Vult.',
        valorProduto: 13.00,
        idProduto: 10
    },
    {
        nomeProduto: 'Esmalte amarelo',
        descricaoProduto: 'Vult',
        valorProduto: 13.50,
        idProduto: 11
    },
    {
        nomeProduto: 'kit salonline',
        descricaoProduto: 'Shampo, condicionador e mascara nutri',
        valorProduto: 220.50,
        idProduto: 12
    },
    {
        nomeProduto: 'queratina novex',
        descricaoProduto: 'Tratamento reconstrutor Novex ',
        valorProduto: 25.50,
        idProduto: 13
    },
    {
        nomeProduto: 'Condicionador embelleze',
        descricaoProduto: 'Condicionador para reconstrução',
        valorProduto: 20.50,
        idProduto: 14
    },
    {
        nomeProduto: 'shampoo embelleze',
        descricaoProduto: 'Condicionador para reconstrução',
        valorProduto: 22.50,
        idProduto: 15
    },
    {
        nomeProduto: 'esponja para maquiagem',
        descricaoProduto: 'Indicado para aplicar corretivos e bases liquidas',
        valorProduto: 13.50,
        idProduto: 16
    },
    {
        nomeProduto: 'Unhas postiças',
        descricaoProduto: 'Unhas postiças coloridas',
        valorProduto: 24.90,
        idProduto: 17
    },
    {
        nomeProduto: 'alicate de unha',
        descricaoProduto: 'alicate de unha',
        valorProduto: 22.90,
        idProduto: 18
    },
    {
        nomeProduto: 'Unhas postiças francesinha',
        descricaoProduto: 'Unhas postiças francesinhas vermelha',
        valorProduto: 22.90,
        idProduto: 19
    },
    {
        nomeProduto: 'Máscara de cílios',
        descricaoProduto: 'Máscara de cílios preta lavável',
        valorProduto: 39.90,
        idProduto: 20
    },
]