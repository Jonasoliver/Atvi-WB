import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import RG from "../../modelo/rg";
import Telefone from "../../modelo/telefone";
import Edicao from "../edicao"
import Formatacoes from "../formatacoes";

export default class EdicaoCliente extends Edicao {
    private clientes: Array<Cliente>;
    private entrada: Entrada;
    private formatacoes: Formatacoes;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
        this.formatacoes = new Formatacoes();
    }
    
    private dividirData(data: string): Date {
        let partesData = data.split('/')
        let ano = parseInt(partesData[2])
        let mes = parseInt(partesData[1])
        let dia = parseInt(partesData[0])
        
        return new Date(ano, mes-1, dia)
    }

    public editar(): void {

        console.log('\nInício da edição de cliente')
        let editar = true

        while (editar) {
            let cliCpf = this.entrada.receberTexto('Por favor informe o CPF do cliente que deseja editar: ')
            let cliente = this.clientes.find(cliente => cliente.getCpf.getValor === cliCpf)
            if (cliente) {
                let clienteEscolhido = true
                while (clienteEscolhido) {
                    console.log('Cliente encontrado: ', cliente.nome)
                    console.log('O que você deseja editar?')
                    console.log('1 - Nome')
                    console.log('2 - Nome social')
                    console.log('3 - RG')
                    console.log('4 - Telefone')
                    console.log('5 - Gênero')
                    console.log('6 - Produtos consumidos')
                    console.log('7 - Serviços Consumidos')
                    console.log('0 - Voltar')
                    let escolhaEditar = this.entrada.receberNumero('Por favor, escolha uma opção de edição: ')
                    switch (escolhaEditar) {
                        case 1:
                            let novoNome = this.entrada.receberTexto('Por favor informe o novo nome do cliente: ')
                            if (novoNome === '') {
                                novoNome = cliente.nome
                            }
                            cliente.nome = novoNome
                            break
                        case 2:
                            let novoNomeSocial = this.entrada.receberTexto('Por favor informe o novo nome social do cliente: ')
                            if (novoNomeSocial === '') {
                                novoNomeSocial = cliente.nomeSocial
                            }
                            cliente.nomeSocial = novoNomeSocial
                            break
                        case 3:
                            console.log('Você deseja adicionar ou editar um RG?')
                            console.log('1 - Adicionar RG')
                            console.log('2 - Editar RG')
                            console.log('3 - Excluir RG')
                            console.log('0 - Voltar')
                            let opcaoRG = this.entrada.receberNumeroObrigatorio('Por favor, escolha uma opção: ', 'Opção inválida, por favor insira uma opção válida.')
                            switch (opcaoRG) {
                                case 1:
                                    let valorRg = this.entrada.receberTexto('Por favor informe o valor do RG: ')
                                    if (valorRg === '') {
                                        console.log('Valor inválido')
                                    }
                                    else {
                                        let dataRg = this.entrada.receberTextoObrigatorio('Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: ', 'Data inválida, insira uma data válida')
                                        let dataRgData = this.dividirData(dataRg)
                                        let rgNovo = new RG(valorRg, dataRgData)
                                        cliente.addRgs(rgNovo)
                                        console.log('RG adicionado com sucesso.')
                                    }
                                    break;
                                case 2:
                                    console.log('Lista de RGs: ')
                                    cliente.printRgs()
                                    let escolhaRg = this.entrada.receberTexto('Por favor informe o RG que deseja editar: ')
                                    let rg = cliente.getRgs.find(rg => rg.getValor === escolhaRg)
                                    if (!rg) {
                                        console.log('RG não encontrado')
                                    }
                                    else {
                                        let novoValorRg = this.entrada.receberTexto('Por favor informe o novo valor do RG: ')
                                        if (novoValorRg === '') {
                                            novoValorRg = rg.getValor
                                        }
                                        let novaDataRg = this.entrada.receberTexto('Por favor informe a nova data de emissão do RG, no padrão dd/mm/yyyy: ')
                                        if (novaDataRg === '') {
                                            novaDataRg = this.formatacoes.DataString(rg.getDataEmissao)
                                        }
                                        let novaDataRgData = this.dividirData(novaDataRg)
                                        let novoRg = new RG(novoValorRg, novaDataRgData)
                                        let resultadoEdicao = cliente.updateRg(escolhaRg, novoRg)
                                        if (resultadoEdicao) {
                                            console.log('RG editado com sucesso!')
                                        }
                                        else {
                                            console.log('Erro ao editar RG')
                                        }
                                        break;
                                    }
                                    break
                                case 3: 
                                    console.log('Lista de RGs:')
                                    cliente.printRgs()
                                    let escolhaRgExcluir = this.entrada.receberTexto('Por favor informe o RG que deseja excluir: ')
                                    let rgExcluido  = cliente.excluirRg(escolhaRgExcluir)
                                    if (rgExcluido) {
                                        console.log('RG excluído com sucesso!')
                                    }
                                case 0:
                                    break;
                                default:
                                    console.log('Opção inválida')
                                break;
                            }
                            break;
                        case 4:
                            console.log('Você deseja editar ou adicionar um telefone?')
                            console.log('1 - Adicionar telefone')
                            console.log('2 - Editar telefone')
                            console.log('3 - Excluir telefone')
                            console.log('0 - Voltar')
                            let opcaoTelefone = this.entrada.receberNumeroObrigatorio('Por favor, escolha uma opção: ', 'Opção inválida, por favor insira uma opção válida.')
                            switch(opcaoTelefone) {
                                case 1:
                                    let ddd = this.entrada.receberTexto('Por favor insira o DDD do telefone: ')
                                    if (ddd === '') {
                                        console.log('DDD inválido')
                                        break;
                                    }
                                    let numero = this.entrada.receberTexto('Por favor insira o número do telefone: ')
                                    if (numero === '') {
                                        console.log('Número inválido')
                                        break;
                                    }
                                    let telefoneNovo = new Telefone(ddd, numero)
                                    cliente.addTelefones(telefoneNovo)
                                    console.log('Telefone adicionado com sucesso!')
                                    break;
                                case 2:
                                    console.log('Lista de Telefones: ')
                                    cliente.printTelefones()
                                    let escolhaTelefoneDdd = this.entrada.receberTexto('Por favor informe o DDD do telefone que deseja editar: ')
                                    let escolhaTelefoneNum = this.entrada.receberTexto('Por favor informe o número do telefone que deseja editar: ')
                                    let telefone  = cliente.updateTelefone(escolhaTelefoneDdd, escolhaTelefoneNum)
                                    if (telefone) {
                                        console.log('Telefone editado com sucesso!')
                                    }
                                    break;
                                case 3:
                                    console.log('Lista de Telefones: ')
                                    cliente.printTelefones()
                                    let escolhaTelefoneDddExcluir = this.entrada.receberTexto('Por favor informe o DDD do telefone que deseja excluir: ')
                                    let escolhaTelefoneNumExcluir = this.entrada.receberTexto('Por favor informe o número do telefone que deseja excluir: ')
                                    let telefoneExcluido  = cliente.excluirTelefone(escolhaTelefoneDddExcluir, escolhaTelefoneNumExcluir)
                                    if (telefoneExcluido) {
                                        console.log('Telefone excluído com sucesso!')
                                    }
                                    break;
                                case 0:
                                    break
                                default:
                                    console.log('Opção inválida.')
                                }
                                break;
                        case 5:
                            console.log('Você deseja editar ou remover um pet?')
                            console.log('1 - Editar pet')
                            console.log('2 - Remover pet')
                            console.log('0 - Voltar')
                            let opcaoPet = this.entrada.receberNumeroObrigatorio('Por favor, escolha uma opção: ', 'Opção inválida, por favor insira uma opção válida.')
                            switch(opcaoPet) {
                                case 1:
                                    console.log('Lista de pets: \n')
                                    cliente.getPets.forEach(pet => {
                                        console.log('Nome: ', pet.getNome)
                                    })
                                    let edicaoPets = new EdicaoPets(cliente.getPets)
                                    edicaoPets.editar()
                                    break;
                                case 2:
                                    console.log('Lista de pets: \n')
                                    cliente.getPets.forEach(pet => {
                                        console.log('Nome: ', pet.getNome)
                                    })
                                    let exclusaoPet = new ExclusaoPets(cliente.getPets, this.clientes)
                                    exclusaoPet.excluir()
                                    break;
                                case 0:
                                    break;
                                default:
                                    console.log('Opção inválida')
                            }
                            break;    
                        case 6: 
                            console.log('Lista de produtos consumidos: \n')
                            cliente.getProdutosConsumidos.forEach(produto => {
                                console.log('Nome: ', produto.getNome)
                            })
                            let edicaoProdutos = new ExclusaoProduto(cliente.getProdutosConsumidos)
                            edicaoProdutos.excluir()
                            break;
                        case 7:
                            console.log('Lista de serviços consumidos: \n')
                            cliente.getServicosConsumidos.forEach(servico => {
                                console.log('Nome: ', servico.getNome)
                            })
                            let edicaoServicos = new ExclusaoServico(cliente.getServicosConsumidos)
                            edicaoServicos.excluir()
                            break;
                        case 0: 
                            clienteEscolhido = false
                            editar = false
                            break;
                        default:
                            console.log('Opção inválida.')
                        break;
                    }
                }
            } else {
                console.log('Cliente não encontrado')
                editar = false
                break
            } 
        }
    
    }
}
    }
}