import Cliente from "../modelo/cliente";
import Telefone from "../modelo/telefone";
import RG from "../modelo/rg";
import CPF from "../modelo/cpf";
import Cadastro from "../negocio/cadastro";

export default class ClientesIniciado extends Cadastro{
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
    }

    public cadastrar(): void {
        Clientlist.forEach(Clientlist=>{
            let nome, nomeSocial, genero, cpf, rg, telefone;

            if(Clientlist.nomeSocial != undefined){
                nome = Clientlist.nome;
                nomeSocial = Clientlist.nomeSocial;
                genero = Clientlist.genero;
                rg = new RG(Clientlist.rg.valor, Clientlist.rg.dataEmissao);
                cpf = new CPF(Clientlist.cpf.valor, Clientlist.cpf.dataEmissao);
                telefone = Clientlist.telefone;

                const NovoCliente = new Cliente(
                    nome,
                    nomeSocial,
                    cpf,       
                    genero
                );
                
                NovoCliente.getRgs.push(rg)
                NovoCliente.getTelefones.push(telefone)
                this.clientes.push(NovoCliente)
            } else{
                nome = Clientlist.nome;            
                genero = Clientlist.genero;
                rg.push(new RG(Clientlist.rg.valor, Clientlist.rg.dataEmissao))
                cpf = new CPF(Clientlist.cpf.valor, Clientlist.cpf.dataEmissao)
                telefone.push(Clientlist.telefone);
    
                const NovoCliente = new Cliente(
                    nome,
                    'não informado',
                    genero,
                    cpf
                );
                this.clientes.push(NovoCliente)        
            }
        })
        console.log(`\n############################################### `);
        console.log(`Autocadastro de clientes concluído com sucesso! `)
        console.log(`############################################### \n`);
    }
}

const Clientlist = [
    {
        nome: 'Alcione',
        nomeSocial: 'Marrom',
        genero: 'F',
        cpf:{
            valor:'1',
            dataEmissao:new Date(1,1,1950)
        },
        rg:{
            valor:'1',
            dataEmissao:new Date(13,22,1950)
        },
        telefone: new Telefone('(11)','1111-11111')
    },
    {
        nome: 'Billie Eilish',
        nomeSocial: 'Bilie',
        genero: 'N',
        cpf:{
            valor:'2',
            dataEmissao:new Date(4,12,2000)
        },
        rg:{
            valor:'2',
            dataEmissao:new Date(16,30,2000)
        },
        telefone: new Telefone('(21)','5166-6266')
    },
    {
        nome: 'Bruno Mars',
        nomeSocial: 'Cover do Michael Jackson',
        genero: 'M',
        cpf:{
            valor:'3',
            dataEmissao:new Date(4,12,2000)
                },
        rg:{
            valor:'3',
            dataEmissao:new Date(16,30,2000)
        },
        telefone: new Telefone('(19)','6955-2775')
    },
    {
        nome: 'Juliete',
        nomeSocial: '',
        genero: 'F',
        cpf:{
            valor:'4',
            dataEmissao:new Date(4,12,2000)
        },
        rg:{
            valor:'4',
            dataEmissao:new Date(4,12,2000)
        },
        telefone: new Telefone('(45)','8485-5148')
    },
    {
        nome: 'Michael Jackson',
        nomeSocial: 'Jacksons Five',
        genero: 'O',
        cpf:{
            valor:'5',
            dataEmissao:new Date(4,12,2000)
        },
        rg:{
            valor:'5',
            dataEmissao:new Date(4,12,2000)
        },
        telefone: new Telefone('(16)','4841-7946')
    },
    {
        nome: 'Péricles',
        nomeSocial: 'Exaltasamba',
        genero: 'M',
        cpf:{
            valor:'6',
            dataEmissao:new Date(4,12,2000)
        },
        rg:{
            valor:'6',
            dataEmissao:new Date(4,12,2000)
        },
        telefone: new Telefone('(91)','6889-4571')
    },
    {
        nome: 'Claudio',
        nomeSocial: 'Claudinho e Buxexa',
        genero: 'N',
        cpf:{
            valor:'7',
            dataEmissao:new Date(4,12,2000)
        },
        rg:{
            valor:'7',
            dataEmissao:new Date(4,12,2000)
        },
        telefone: new Telefone('(21)','8444-1648')
    },
    {
        nome: 'Anitta',
        nomeSocial: 'Larissinha',
        genero: 'O',
        cpf:{
            valor:'8',
            dataEmissao:new Date(4,12,2000)

        },
        rg:{
            valor:'8',
            dataEmissao:new Date(4,12,2000)
        },
        telefone: new Telefone('(51)','7547-3844')
    },
    {
        nome: 'Beyoncé',
        nomeSocial: 'A maior do mundo',
        genero: 'F',
        cpf:{
            valor:'9',
            dataEmissao:new Date(4,12,2000)
        },
        rg:{
            valor:'9',
            dataEmissao:new Date(4,12,2000)
        },
        telefone: new Telefone('(43)','4743-4022')
    },
    {
        nome: 'Ariana Grnade',
        nomeSocial: 'Ariana Pequena',
        genero: 'F',
        cpf:{
            valor:'10',
            dataEmissao:new Date(4,12,2000)
        },
        rg:{
            valor:'10',
            dataEmissao:new Date(4,12,2000)
        },
        telefone: new Telefone('(21)','2615-6910')
    },
    {
        nome: 'Rihana',
        nomeSocial: 'Segunda maior do mundo',
        genero: 'F',
        cpf:{
            valor:'11',
            dataEmissao:new Date(4,12,2000)
        },
        rg:{
            valor:'11',
            dataEmissao:new Date(4,12,2000)
        },
        telefone: new Telefone('(19)','8498-9874')
    },
    {
        nome: 'Taylor Swift',
        nomeSocial: 'Liguagem da Apple',
        genero: 'F',
        cpf:{
            valor:'12',
            dataEmissao:new Date(4,12,2000)
        },
        rg:{
            valor:'12',
            dataEmissao:new Date(4,12,2000)
        },
        telefone: new Telefone('(85)','6662-7130')
    },
    {
        nome: 'Pedro Sampaio',
        nomeSocial: 'Peguete da Anitta',
        genero: 'O',
        cpf:{
            valor:'13',
            dataEmissao:new Date(4,12,2000)
        },
        rg:{
            valor:'13',
            dataEmissao:new Date(4,12,2000)
        },
        telefone: new Telefone('(27)','4734-3119')
    },
    {
        nome: 'Gabriel',
        nomeSocial: 'O pensador',
        genero: 'M',
        cpf:{
            valor:'14',
            dataEmissao:new Date(4,12,2000)
        },
        rg:{
            valor:'14',
            dataEmissao:new Date(4,12,2000)
        },
        telefone: new Telefone('(93)','6475-4040')
    },
    {
        nome: 'Thiaguinho',
        nomeSocial: 'André',
        genero: 'M',
        cpf:{
            valor:'15',
            dataEmissao:new Date(4,12,2000)
        },
        rg:{
            valor:'15',
            dataEmissao:new Date(4,12,2000)
        },
        telefone: new Telefone('(17)','3946-2549')
    },
    {
        nome: 'Maria Bethânia',
        nomeSocial: 'Anciã',
        genero: 'O',
        cpf:{
            valor:'16',
            dataEmissao:new Date(4,12,2000)
        },
        rg:{
            valor:'16',
            dataEmissao:new Date(4,12,2000)
        },
        telefone: new Telefone('(61)','9049-3678')
    },
    {
        nome: 'Djavan',
        nomeSocial: 'O melhor do Brasil',
        genero: 'N',
        cpf:{
            valor:'17',
            dataEmissao:new Date(4,12,2000)
        },
        rg:{
            valor:'17',
            dataEmissao:new Date(4,12,2000)
        },
        telefone: new Telefone('(11)','3266-3129')
    },
    {
        nome: 'Ana Carolina',
        nomeSocial: 'Canta muito',
        genero: 'O',
        cpf:{
            valor:'18',
            dataEmissao:new Date(4,12,2000)
        },
        rg:{
            valor:'18',
            dataEmissao:new Date(4,12,2000)
        },
        telefone: new Telefone('(42)','9283-4802')
    },
    {
        nome: 'Maria Rita',
        nomeSocial: 'Ritinha',
        genero: 'F',
        cpf:{
            valor:'19',
            dataEmissao:new Date(4,12,2000)
        },
        rg:{
            valor:'19',
            dataEmissao:new Date(4,12,2000)
        },
        telefone: new Telefone('(62)','2675-9033')
    },
    {
        nome: 'Cassiá Eller',
        nomeSocial: 'Eller',
        genero: 'N',
        cpf:{
            valor:'20',
            dataEmissao:new Date(4,12,2000)
        },
        rg:{
            valor:'20',
            dataEmissao:new Date(4,12,2000)
        },
        telefone: new Telefone('(83)','6612-5637')
    },
    {
        nome: 'Cazuza',
        nomeSocial: 'Gigante da MPB',
        genero: 'N',
        cpf:{
            valor:'21',
            dataEmissao:new Date(21,12,1000)
        },
        rg:{
            valor:'21',
            dataEmissao:new Date(4,12,2000)
        },
        telefone: new Telefone('(83)','6612-5777')
    },
    {
        nome: 'Caetano Veloso',
        nomeSocial: 'Velozin',
        genero: 'M',
        cpf:{
            valor:'22',
            dataEmissao:new Date(4,12,2000)
        },
        rg:{
            valor:'22',
            dataEmissao:new Date(4,12,2000)
        },
        telefone: new Telefone('(88)','689-5637')
    },
    {
        nome: 'Jorge Vercillo',
        nomeSocial: '',
        genero: 'M',
        cpf:{
            valor:'23',
            dataEmissao:new Date(31,12,2005)
        },
        rg:{
            valor:'23',
            dataEmissao:new Date(15,22,1122)
        },
        telefone: new Telefone('(83)','1485-5637')
    },
    {
        nome: 'Elis Regina',
        nomeSocial: 'Regininha',
        genero: 'F',
        cpf:{
            valor:'24',
            dataEmissao:new Date(4,12,2000)
        },
        rg:{
            valor:'24',
            dataEmissao:new Date(4,12,2000)
        },
        telefone: new Telefone('(13)','6872-5637')
    },
    {
        nome: 'Rita Lee',
        nomeSocial: 'Rainha do Rock',
        genero: 'N',
        cpf:{
            valor:'25',
            dataEmissao:new Date(21,12,2120)
        },
        rg:{
            valor:'25',
            dataEmissao:new Date(14,22,1922)
        },
        telefone: new Telefone('(83)','6612-5637')
    },
    {
        nome: 'Gustavo Miotto',
        nomeSocial: '',
        genero: 'N',
        cpf:{
            valor:'26',
            dataEmissao:new Date(15,12,2000)
        },
        rg:{
            valor:'26',
            dataEmissao:new Date(13,22,2022)
        },
        telefone: new Telefone('(12)','4545-5637')
    },
    {
        nome: 'Jorge',
        nomeSocial: 'Da dupla Matheus',
        genero: 'O',
        cpf:{
            valor:'27',
            dataEmissao:new Date(21,12,1550)
        },
        rg:{
            valor:'27',
            dataEmissao:new Date(23,12,1122)
        },
        telefone: new Telefone('(83)','6612-5637')
    },
    {
        nome: 'Matheus',
        nomeSocial: 'Da dupla Jorge',
        genero: 'N',
        cpf:{
            valor:'28',
            dataEmissao:new Date(4,12,2000)
        },
        rg:{
            valor:'28',
            dataEmissao:new Date(4,12,2000)
        },
        telefone: new Telefone('(73)','8953-5637')
    },
    {
        nome: 'Maiara',
        nomeSocial: 'Da dupla Maraisa',
        genero: 'F',
        cpf:{
            valor:'29',
            dataEmissao:new Date(4,12,2000)
        },
        rg:{
            valor:'29',
            dataEmissao:new Date(4,12,2000)
        },
        telefone: new Telefone('(73)','8953-5637')
    },
    {
        nome: 'Marilia Mendonça',
        nomeSocial: 'Rainha da sofrência',
        genero: 'F',
        cpf:{
            valor:'30',
            dataEmissao:new Date(4,12,2000)
        },
        rg:{
            valor:'30',
            dataEmissao:new Date(4,12,2000)
        },
        telefone: new Telefone('(73)','8953-5637')
    },
]