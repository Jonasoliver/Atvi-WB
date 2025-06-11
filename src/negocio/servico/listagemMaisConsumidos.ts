import Cliente from "../../modelo/cliente";
import Servico from "../../modelo/servico";
import Listagem from "../listagem";

export default class ListagemServicosMaisConsumidos extends Listagem {
    private clientes: Array<Cliente>;
    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    listar(): void {
     const contadorServico = new Map<Servico, number>()

        for (const cliente of this.clientes) {
            const servicosConsumidos = cliente.getServicosConsumidos
            for (const servico of servicosConsumidos) {
                contadorServico.set(servico, (contadorServico.get(servico) || 0) + 1)
            }
        }

        const servicosOrdenados = Array.from(contadorServico.entries()).sort((a, b) => b[1] - a[1])

        console.log(`Listagem dos serviços mais consumidos: `)

        servicosOrdenados.splice(0, 10).forEach((servicoAtual, index) => {
            const [servico, quantidade] = servicoAtual
            console.log(`${index + 1}. Serviço: ${servico.getNome}, Quantidade Consumida: ${quantidade}`)
        })
    }
}