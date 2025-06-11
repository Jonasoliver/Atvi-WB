import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemClientesConsumiramServicosValor extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    listar(): void {
        const contagemServicos = new Map<Cliente, number>()
        for (const cliente of this.clientes) {
            const servicoConsumido = cliente.getServicosConsumidos
            let valorTotal = 0
            for (const servico of servicoConsumido) {
                valorTotal += servico.getValorDoServico
            }
            contagemServicos.set(cliente, valorTotal)
        }
        const clientesOrdenados = Array.from(contagemServicos.entries()).sort((a, b) => b[1] - a[1])

        console.log(`Listagem dos 5 clientes que mais consumiram serviços (em valor):`)
        
        clientesOrdenados.slice(0, 5).forEach((clienteAtual, index) => {
            const [cliente, valorTotal] = clienteAtual;
            console.log(`${index + 1}. Cliente: ${cliente.nome}, Valor Total Consumido: R$${valorTotal.toFixed(2)}`);
        })
    }
}