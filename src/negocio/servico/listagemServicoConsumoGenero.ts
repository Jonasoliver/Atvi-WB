import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Servico from "../../modelo/servico";
import Listagem from "../listagem";

export default class ListagemServicosConsumidosGenero extends Listagem {
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>, entrada: Entrada) {
        super();
        this.clientes = clientes;
        this.entrada = entrada;
    }

    public listar(): void {
        console.log(`Escolha o gênero que deseja fazer a listagem:`)
        console.log(`1 - Feminino`)
        console.log(`2 - Masculino`)
        console.log(`3 - Não Binario`)
        console.log(`4 - Não Identificado`)
        let opcaoEscolhida = this.entrada.receberNumero(`Digite a opção que deseja: `)
        let genero: string = ''
        switch (opcaoEscolhida) {
            case 1:
                genero = 'Feminino'
                break
            case 2:
                genero = 'Masculino'
                break
            case 3:
                genero = 'Não Binario'
                break
            case 4:
                genero = 'Não Identificado'
                break
            default:
                console.log(`Opção Inválida! Escolha apenas as opções disponiveis.`)
        }

        const clienteGeneroEscolhido = this.clientes.filter(cliente => cliente.getGenero.getValor === genero)

        const servicosConsumido: Servico[] = []
        
        for (const cliente of clienteGeneroEscolhido) {
            servicosConsumido.push(...cliente.getServicosConsumidos)
        }
        if (servicosConsumido.length > 0) {
            const contadorServico = new Map<number, number>()
            for (const servico of servicosConsumido) {
                const servicoId = servico.getId
                contadorServico.set(servicoId, (contadorServico.get(servicoId)|| 0)+1)
            }

            const servicosOrdenados = Array.from(contadorServico.entries()).sort((a, b) => b[1] - a[1])

            console.log(`Listagem dos serviços mais consumidos por ${genero}: `)

            servicosOrdenados.slice(0, 10).forEach((quantidadeSer, index) => {
                const [servicoId, quantidade] = quantidadeSer
                const servico = servicosConsumido.find(servico => servico.getId === servicoId)

                if (servico) {
                    console.log(`${index + 1}. Nome: ${servico?.getNome}, Quantidade Consumida ${quantidade}`)
                }
            })
        }
        else {
            console.log(`Nenhum serviço foi consumido pelo gênero: ${genero}`)
        }
    }
}