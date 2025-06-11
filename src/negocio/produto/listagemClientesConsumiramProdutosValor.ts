import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemClientesConsumiramProdutosValor extends Listagem {
    private clientes: Array<Cliente>;
    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    listar(): void {
        const valoresClientes = new Map<Cliente, number>()
        for (const cliente of this.clientes) {
            const produtosConsumidos = cliente.getProdutosConsumidos
            let valorTotal = 0
            for (const produto of produtosConsumidos) {
                valorTotal += produto.getValorProduto
            }
            valoresClientes.set(cliente, valorTotal)
        }

        const clientesOrdenados = Array.from(valoresClientes.entries()).sort((a, b) => b[1] - a[1])

        console.log(`Listagem dos 5 clientes que mais consumiram produtos (em valor):`);
        clientesOrdenados.slice(0, 5).forEach((clienteAtual, index) => {
            const [cliente, valorTotal] = clienteAtual
            console.log(`${index + 1}. Cliente: ${cliente.nome}, Valor Total: R$${valorTotal.toFixed(2)}`);
        });
    }
}