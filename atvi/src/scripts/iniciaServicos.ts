import Servico from "../modelo/servico";
import Cadastro from "../negocio/cadastro";

export default class ServicoIniciado extends Cadastro {
    private servicos: Array<Servico>

    constructor( servicos:Array<Servico> ) {
        super()
        this.servicos = servicos
    }

    public cadastrar(): void {
        listaServico.forEach(listaServico => {
            let nome, descricao, preco, idServico;
            
            nome = listaServico.nomeServico;
            descricao = listaServico.descServico;
            preco = listaServico.precoServico;
            idServico = listaServico.idServico;  

            const NovoServico = new Servico(
                nome,
                descricao,
                preco,
                idServico
            )
            this.servicos.push(NovoServico)

        });

        console.log(`\n############################################### `);
        console.log(`Autocadastro de serviços concluído com sucesso! `)
        console.log(`############################################### \n`);
    }
}

const listaServico = [
    {
        nomeServico: 'Corte',
        descServico: 'corte especializado',
        precoServico: 50.00 ,
        idServico: 1 ,
    },
    {
        nomeServico: 'Barba',
        descServico: 'Aparar Barba',
        precoServico: 30.00,
        idServico: 2,
    },
    {
        nomeServico: 'Sombrancelha',
        descServico: 'Remoção e desenho de sombrancelha',
        precoServico: 25.00,
        idServico: 3,
    },
    {
        nomeServico: 'Escova Progressiva',
        descServico: 'Escova os cabelos ',
        precoServico: 150.00,
        idServico: 4,
    },
    {
        nomeServico: 'Pintar o Cabelo',
        descServico: 'Pintar os Cabelos para esconder a velhice',
        precoServico: 70.00,
        idServico: 5,
    },
    {
        nomeServico: 'Corte de cabelo Feminino',
        descServico: 'Especializado para mulheres',
        precoServico: 100.00,
        idServico: 6,
    },
    {
        nomeServico: 'Corte de cabelo masculino',
        descServico: 'Especializado para masculino',
        precoServico: 50.00,
        idServico: 7,
    },
    {
        nomeServico: 'Matizar cabelo',
        descServico: 'Matização de cabelo',
        precoServico: 100.00,
        idServico: 8,
    },
    {
        nomeServico: 'Hidratação',
        descServico: 'Hidratação produnda',
        precoServico: 150.00,
        idServico: 9,
    },
    {
        nomeServico: 'Corte bordado',
        descServico: 'Corte para tirar pontas duplas',
        precoServico: 150.00,
        idServico: 10,
    },
    {
        nomeServico: 'Selagem capilar',
        descServico: 'tratamento para cabelos fracos',
        precoServico: 150.00,
        idServico: 11,
    },
    {
        nomeServico: 'Unhas de gel',
        descServico: 'Alogamento de unhas',
        precoServico: 140.00,
        idServico: 12,
    },
    {
        nomeServico: 'manicure',
        descServico: 'pintar as unhas das mãos',
        precoServico: 50.00,
        idServico: 13,
    },
    {
        nomeServico: 'pedicure',
        descServico: 'pintar as unhas dos pés',
        precoServico: 50.00,
        idServico: 14,
    },
    {
        nomeServico: 'manicure e pedicure',
        descServico: 'pintar as unhas das mãos e dos pés',
        precoServico: 90.00,
        idServico: 15,
    },
    {
        nomeServico: 'Massagem modeladora',
        descServico: 'Massagem modeladora',
        precoServico: 100.00,
        idServico: 16,
    },
    {
        nomeServico: 'Massagem relaxante',
        descServico: 'Massagem relaxante',
        precoServico: 100.00,
        idServico: 17,
    },
    {
        nomeServico: 'Massagem redutora',
        descServico: 'Massagem redutora',
        precoServico: 100.00,
        idServico: 18,
    },
    {
        nomeServico: 'lavagem capitalar',
        descServico: 'lavagem e secagem do cabelo',
        precoServico: 90.00,
        idServico: 19,
    },
    {
        nomeServico: 'Escova modeladora',
        descServico: 'Escovagem modeladora',
        precoServico: 90.00,
        idServico: 20,
    },
]