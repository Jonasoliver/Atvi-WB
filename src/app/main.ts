import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa/empresa"
import Genero from "../modelo/cliente/genero";
import ListagemClientesConsumiramProdutosQuantidade from "../negocio/produto/listagemClientesConsumiramProdutosQuantidade";
import ListagemClientesConsumiramServicosValor from "../negocio/servico/listagemClientesConsumiramServicosValor";
import ListagemClientesConsumiramServicosQuantidade from "../negocio/servico/listagemClientesConsumiramServicosQuantidade";
import CadastroCliente from "../negocio/cliente/cadastroCliente";
import ListagemClientes from "../negocio/cliente/listagemClientes";

console.log(`Bem-vindo ao sistema de cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()

insertProdutos()
insertClientes()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar`)
    console.log(`2 - Listar`)
    console.log(`3 - Atualizar`)
    console.log(`4 - Excluir`)
    console.log('0 - Sair')

    // console.log(`           1 - Cadastrar cliente`);
    // console.log(`           2 - Listagem`);
    // console.log(`           3 - Atualizar Cliente`)
    // console.log(`           4 - Deletar Cliente`)
    // console.log(`           5 - Registrar Produtos ou Serviço`)
    // console.log(`-----------------------------------------------`)
    // console.log(`------------------- PRODUTO -------------------`)
    // console.log(`-----------------------------------------------`)
    // console.log(`           6 - Cadastro de Produto`)
    // console.log(`           7 - Listagem`)
    // console.log(`           8 - Atualizar Produto`)
    // console.log(`           9 - Deletar Produto`)
    // console.log(`-----------------------------------------------`)
    // console.log(`------------------- SERVIÇO -------------------`)
    // console.log(`-----------------------------------------------`)
    // console.log(`          10 - Cadastro de Serviço`)
    // console.log(`          11 - Listagem`)
    // console.log(`          12 - Atualizar Serviço`)
    // console.log(`          13 - Deletar Serviço`)
    // console.log(`-----------------------------------------------`)
    // console.log(`           0 - Sair`);
    // console.log(`-----------------------------------------------`)

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastroExecucao = true
            while (cadastroExecucao) {
                console.log('\n')
                console.log('---Cadastro----')
                console.log('1 - Cadastro de clientes')
                console.log('2 - Cadastro de produtos')
                console.log('3 - Cadastro de serviços')
                console.log('4 - Registrar consumo de cliente')
                console.log('0 - Voltar ao menu principal')
                console.log('----------------')
                let cadastroOpcao = entrada.receberNumero(`Escolha uma opção: `)
                switch (cadastroOpcao) {
                    case 1:
                        let cadastro = new CadastroCliente(empresa.getClientes)
                        cadastro.cadastrar()
                        break;
                    case 2:
                        let cadastroProduto = new CadastrarProduto(empresa.getProdutos)
                        cadastroProduto.cadastrar()
                        break;
                    case 3:
                        let cadastroServico = new CadastroServico(empresa.getServicos)
                        cadastroServico.cadastrar()
                        break;
                    case 4:
                        let consumo = new ClienteConsumiu(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
                        consumo.consumo()
                        break;
                    case 0:
                        cadastroExecucao = false
                        break;
                    default:
                        console.log(`Opção inválida, tente novamente.`)
                }
            }
            break;
        case 2:
            let listagemExecucao = true
            while (listagemExecucao) {
                console.log('\n')
                console.log('---Listagem----')
                console.log('1 - Listar todos os clientes')
                console.log('2 - Listar todos os produtos')
                console.log('3 - Listar todos os serviços')
                console.log('4 - Clientes que mais consumiram produtos (quantidade)')
                console.log('5 - Clientes que mais consumiram serviços (quantidade)')
                console.log('6 - Clientes que mais consumiram produtos (valor)')
                console.log('7 - Clientes que mais consumiram serviços (valor)')
                console.log('8 - Serviços mais consumidos')
                console.log('9 - Produtos mais consumidos')
                console.log('10 - Listar clientes por gênero')
                console.log('11 - Produtos mais consumidos por gênero')
                console.log('12 - Serviços mais consumidos por gênero')
                console.log('13 - Clientes que menos consumiram produtos (quantidade)')
                console.log('14 - Clientes que menos consumiram serviços (quantidade)')
                console.log('0 - Voltar ao menu principal')
                console.log('-------------------')
                let listagemOpcao = entrada.receberNumero(`Escolha uma opção: `)
                switch (listagemOpcao) {
                    case 1:
                        let listagem = new ListagemClientes(empresa.getClientes)
                        listagem.listar()
                        break;
                    case 2:
                        let listagemProduto = new ListagemProdutos(empresa.getClientes, empresa.getProdutos)
                        listagemProduto.listar()
                        break;
                    case 3:
                        let listagemServico = new ListagemServico(empresa.getClientes, empresa.getServicos)
                        listagemServico.listar()
                        break;
                    case 4:
                        let listagemClientesConsumiramProdutosQuantidade = new ListagemClientesConsumiramProdutosQuantidade(empresa.getClientes)
                        listagemClientesConsumiramProdutosQuantidade.listar();
                        break;
                    case 5:
                        let listagemClientesConsumiramServicosQuantidade = new ListagemClientesConsumiramServicosQuantidade(empresa.getClientes)
                        listagemClientesConsumiramServicosQuantidade.listar()
                        break;
                    case 6:
                        let clientesMaisConsumiramProdutosValor = new ListagemClientes(empresa.getClientes)
                        clientesMaisConsumiramProdutosValor.clientesMaisConsumiramProdutosValor()
                        break;
                    case 7:
                        let clientesMaisConsumiramServicosValor = new ListagemClientes(empresa.getClientes)
                        clientesMaisConsumiramServicosValor.clientesMaisConsumiramServicosValor()
                        break;
                    case 8:
                        let servicosMaisConsumidos = new ListagemServico(empresa.getClientes, empresa.getServicos)
                        servicosMaisConsumidos.servicosMaisConsumidos()
                        break;
                    case 9:
                        let produtosMaisConsumidos = new ListagemProdutos(empresa.getClientes, empresa.getProdutos)
                        produtosMaisConsumidos.produtosMaisConsumidos()
                        break;
                    case 10:
                        let clientesPorGenero = new ListagemClientes(empresa.getClientes)
                        clientesPorGenero.listarClientesPorGenero()
                        break;
                    case 11:
                        let produtosMaisConsumidosPorGenero = new ListagemProdutos(empresa.getClientes, empresa.getProdutos)
                        produtosMaisConsumidosPorGenero.produtosMaisConsumidosPorGenero()
                        break;
                    case 12:
                        let servicosMaisConsumidosPorGenero = new ListagemServico(empresa.getClientes, empresa.getServicos)
                        servicosMaisConsumidosPorGenero.servicosMaisConsumidosPorGenero()
                        break;
                    case 13:
                        let clientesMenosConsumiramProdutos = new ListagemClientes(empresa.getClientes)
                        clientesMenosConsumiramProdutos.clientesMenosConsumiramProdutos()
                        break;
                    case 14:
                        let clientesMenosConsumiramServicos = new ListagemClientes(empresa.getClientes)
                        clientesMenosConsumiramServicos.clientesMenosConsumiramServicos()
                        break;
                    case 0:
                        listagemExecucao = false
                        break;
                    default:
                        console.log(`Opção inválida, tente novamente.`)
                }
            }
            break;
        case 3:
            let atualizarExecucao = true
            while (atualizarExecucao) {
                console.log('\n')
                console.log('---Atualização----')
                console.log('1 - Atualizar cliente')
                console.log('2 - Atualizar produto')
                console.log('3 - Atualizar serviço')
                console.log('0 - Voltar ao menu principal')
                console.log('-------------------')
                let atualizarOpcao = entrada.receberNumero(`Escolha uma opção: `)
                switch (atualizarOpcao) {
                    case 1:
                        let atualizar = new AtualizarCliente(empresa.getClientes)
                        atualizar.atualizar()
                        break;
                    case 2:
                        let atualizarProduto = new AtualizarProduto(empresa.getProdutos)
                        atualizarProduto.atualizar()
                        break;
                    case 3:
                        let atualizarServico = new AtualizaServico(empresa.getServicos)
                        atualizarServico.atualizar()
                        break;
                    case 0:
                        atualizarExecucao = false
                        break;
                    default:
                        console.log(`Opção inválida, tente novamente.`)
                }
            }
            break;
        case 4:
            let deletarExecucao = true
            while (deletarExecucao) {
                console.log('\n')
                console.log('---Deleção----')
                console.log('1 - Deletar cliente')
                console.log('2 - Deletar produto')
                console.log('3 - Deletar serviço')
                console.log('0 - Voltar ao menu principal')
                console.log('-------------------')
                let deletarOpcao = entrada.receberNumero(`Escolha uma opção: `)
                switch (deletarOpcao) {
                    case 1:
                        let deletar = new DeletarCliente(empresa.getClientes)
                        deletar.deletar()
                        break;
                    case 2:
                        let deletarProduto = new DeletarProduto(empresa.getProdutos)
                        deletarProduto.deletar()
                        break;
                    case 3:
                        let deletarServico = new DeletarServico(empresa.getServicos)
                        deletarServico.deletar()
                        break;
                    case 0:
                        deletarExecucao = false
                        break;
                    default:
                        console.log(`Opção inválida, tente novamente.`)
                }
            }
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }

    // switch (opcao) {
    //     case 1:
    //         let cadastro = new CadastroCliente(empresa.getClientes)
    //         cadastro.cadastrar()
    //         break;
    //     case 2:
    //         let listagem = new ListagemClientes(empresa.getClientes)
    //         listagem.listar()
    //         break;
    //     case 3:
    //         let atualizar = new AtualizarCliente(empresa.getClientes)
    //         atualizar.atualizar()
    //         break
    //     case 4:
    //         let deletar = new DeletarCliente(empresa.getClientes)
    //         deletar.deletar()
    //         break
    //     case 5:
    //         let consumo = new ClienteConsumiu(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
    //         consumo.consumo()
    //         break
    //     case 6:
    //         let cadastroProduto = new CadastrarProduto(empresa.getProdutos)
    //         cadastroProduto.cadastrar()
    //         break
    //     case 7:
    //         let listagemProduto = new ListagemProdutos(empresa.getClientes, empresa.getProdutos)
    //         listagemProduto.listar()
    //         break
    //     case 8:
    //         let atualizarProduto = new AtualizarProduto(empresa.getProdutos)
    //         atualizarProduto.atualizar()
    //         break
    //     case 9:
    //         let deletarProduto = new DeletarProduto(empresa.getProdutos)
    //         deletarProduto.deletar()
    //         break
    //     case 10:
    //         let cadastroServico = new CadastroServico(empresa.getServicos)
    //         cadastroServico.cadastrar()
    //         break
    //     case 11:
    //         let listagemServico = new ListagemServico(empresa.getClientes, empresa.getServicos)
    //         listagemServico.listar()
    //         break
    //     case 12:
    //         let atualizarServico = new AtualizaServico(empresa.getServicos)
    //         atualizarServico.atualizar()
    //         break
    //     case 13:
    //         let deletarServico = new DeletarServico(empresa.getServicos)
    //         deletarServico.deletar()
    //         break
    //     case 0:
    //         execucao = false
    //         console.log(`Até mais`)
    //         break;
    //     default:
    //         console.log(`Operação não entendida :(`)
    // }
}

function insertProdutos() {
    const produtosDeBeleza = [
        { nome: "Creme Facial", valor: 25.99 },
        { nome: "Shampoo Antifrizz", valor: 15.49 },
        { nome: "Batom Matte", valor: 12.99 },
        { nome: "Perfume Floral", valor: 45.99 },
        { nome: "Base Líquida", valor: 30.99 },
        { nome: "Máscara Capilar", valor: 18.99 },
        { nome: "Kit de Pincéis", valor: 29.99 },
        { nome: "Sérum Facial", valor: 35.99 },
        { nome: "Esmalte Hipoalergênico", valor: 8.99 },
        { nome: "Condicionador Reparador", valor: 22.99 },
        { nome: "Sombra em Pó", valor: 10.99 },
        { nome: "Gel Fixador para Sobrancelhas", valor: 14.99 },
        { nome: "Removedor de Maquiagem", valor: 7.99 },
        { nome: "Hidratante Corporal", valor: 20.99 },
        { nome: "Iluminador Líquido", valor: 18.99 },
        { nome: "Gloss Labial", valor: 9.99 },
        { nome: "Pó Compacto", valor: 14.99 },
        { nome: "Água Micelar", valor: 12.99 },
        { nome: "Spray Fixador de Cabelo", valor: 16.99 },
        { nome: "Máscara Facial de Argila", valor: 8.99 },
        { nome: "Esmalte Gel", valor: 11.99 },
        { nome: "Delineador Líquido", valor: 13.99 },
        { nome: "Bálsamo Labial", valor: 6.99 },
        { nome: "Shampoo Seco", valor: 14.99 },
        { nome: "Esfoliante Facial", valor: 16.99 },
        { nome: "Blush em Creme", valor: 10.99 },
        { nome: "Creme para as Mãos", valor: 9.99 },
        { nome: "Lápis de Sobrancelha", valor: 7.99 },
        { nome: "Perfume Masculino", valor: 55.99 },
    ]
    produtosDeBeleza.forEach(produtoInfo => {
        const { nome, valor } = produtoInfo;
        const produto = new Produto(nome, valor);
        empresa.getProdutos.push(produto);
    });
}
function insertClientes() {
    const clientes = [
        new Cliente("Maria Silva", "Maria", new CPF("12345678900", recebeData("20/12/2021")), new Genero("Feminino")),
        new Cliente("João Souza", "João", new CPF("98765432100", recebeData("10/10/2021")), new Genero("Masculino")),
        new Cliente("Ana Oliveira", "Ana", new CPF("11122233344", recebeData("20/11/2021")), new Genero("Feminino")),
        new Cliente("Pedro Santos", "Pedro", new CPF("55566677788", recebeData("12/12/2020")), new Genero("Masculino")),
        new Cliente("Carla Mendes", "Carla", new CPF("99988877766", recebeData("20/12/2004")), new Genero("Feminino")),
        new Cliente("Lucas Almeida", "Lucas", new CPF("33322211100", recebeData("20/12/2011")), new Genero("Masculino")),
        new Cliente("Bianca Costa", "Bianca", new CPF("44455566677", recebeData("06/12/2004")), new Genero("Feminino")),
        new Cliente("Marcos Pereira", "Marcos", new CPF("99988877766", recebeData("20/12/1999")), new Genero("Masculino")),
        new Cliente("Laura Carvalho", "Laura", new CPF("77788899900", recebeData("25/01/2021")), new Genero("Feminino")),
        new Cliente("Rafaela Ferreira", "Rafaela", new CPF("11122233344", recebeData("30/11/2022")), new Genero("Feminino")),
        new Cliente("Patrícia Alves", "Patrícia", new CPF("55544433322", recebeData("15/10/2021")), new Genero("Não Binário")),
        new Cliente("Samuel Souza", "Samuel", new CPF("11133355577", recebeData("20/06/2014")), new Genero("Masculino")),
        new Cliente("Andréa Silva", "Andréa", new CPF("77722288855", recebeData("14/11/2012")), new Genero("Não Identificado")),
        new Cliente("Luiz Costa", "Luiz", new CPF("44499966622", recebeData("29/07/2011")), new Genero("Masculino")),
        new Cliente("Mariana Santos", "Mariana", new CPF("66633399988", recebeData("12/03/1996")), new Genero("Feminino")),
        new Cliente("Jordan Smith", "Jordan", new CPF("12365478900", recebeData("10/09/2007")), new Genero("Não Binário")),
        new Cliente("Alexis Johnson", "Alexis", new CPF("98712365400", recebeData("03/04/2021")), new Genero("Não Binário")),
        new Cliente("Casey Taylor", "Casey", new CPF("11122233344", recebeData("31/12/2018")), new Genero("Não Binário")),
        new Cliente("Taylor Green", "Taylor", new CPF("55566677788", recebeData("01/01/2019")), new Genero("Não Identificado")),
        new Cliente("Bailey White", "Bailey", new CPF("99988877766", recebeData("03/12/2006")), new Genero("Não Identificado")),
        new Cliente("Riley Brown", "Riley", new CPF("33322211100", recebeData("01/01/2002")), new Genero("Não Binário")),
        new Cliente("Dakota Martinez", "Dakota", new CPF("44455566677", recebeData("20/12/2005")), new Genero("Não Identificado")),
        new Cliente("Jordan Clark", "Jordan", new CPF("99988877766", recebeData("07/10/2009")), new Genero("Não Binário")),
        new Cliente("Skylar Hall", "Skylar", new CPF("77788899900", recebeData("05/05/1999")), new Genero("Não Identificado")),
        new Cliente("Phoenix Ward", "Phoenix", new CPF("11122233344", recebeData("23/05/2018")), new Genero("Não Binário")),
        new Cliente("Harley Foster", "Harley", new CPF("55544433322", recebeData("10/01/2013")), new Genero("Não Identificado")),
        new Cliente("River Brooks", "River", new CPF("11133355577", recebeData("14/12/2016")), new Genero("Não Binário")),
        new Cliente("Sage Gray", "Sage", new CPF("77722288855", recebeData("20/08/2014")), new Genero("Não Identificado"))
    ]
    clientes.forEach(cliente => {
        empresa.getClientes.push(cliente)
    })


}
function recebeData(data: string): Date {
    let partesData = data.split("/");
    let ano = new Number(partesData[2].valueOf()).valueOf();
    let mes = new Number(partesData[1].valueOf()).valueOf();
    let dia = new Number(partesData[0].valueOf()).valueOf();
    return new Date(ano, mes, dia);
}