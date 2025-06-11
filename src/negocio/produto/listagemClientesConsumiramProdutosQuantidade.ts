import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemClientesConsumiramProdutosQuantidade extends Listagem {
    private clientes: Array<Cliente>;
    
    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        const contagemProdutos = new Map<Cliente, number>();

        for (const cliente of this.clientes) {
            const produtosConsumidos = cliente.getProdutosConsumidos;
            contagemProdutos.set(cliente, produtosConsumidos.length);
        }

        const clientesOrdenados = Array.from(contagemProdutos.entries()).sort((a, b) => b[1] - a[1]);

        console.log("Listagem dos 10 clientes que mais consumiram produtos (quantidade):");

        clientesOrdenados.slice(0, 10).forEach((clienteAtual, index) => {
            const [cliente, quantidade] = clienteAtual;
            console.log(`${index + 1}. Cliente: ${cliente.nome}, Quantidade de Produtos Consumidos: ${quantidade}`);
        });
    }
}