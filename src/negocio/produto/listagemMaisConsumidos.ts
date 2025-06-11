import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemProdutosMaisConsumidos extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    listar(): void {
        const contadorProdutos = new Map<Produto, number>();

        for (const cliente of this.clientes) {
            const produtosConsumidos = cliente.getProdutosConsumidos;
            for (const produto of produtosConsumidos) {
                contadorProdutos.set(produto, (contadorProdutos.get(produto) || 0) + 1);
            }
        }

        const produtosOrdenados = Array.from(contadorProdutos.entries()).sort((a, b) => b[1] - a[1]);

        console.log("Listagem dos produtos mais consumidos:");

        produtosOrdenados.slice(0, 10).forEach((produtoAtual, index) => {
            const [produto, quantidade] = produtoAtual;
            console.log(`${index + 1}. Produto: ${produto.getNome}, Quantidade de Vendas: ${quantidade}`);
        });
    }
}