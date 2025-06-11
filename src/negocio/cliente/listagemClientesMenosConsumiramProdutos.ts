import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemClientesMenosConsumiramProdutos extends Listagem {
    private clientes: Array<Cliente>;
    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        const clientesOrdenados = this.clientes
            .sort((a, b) => a.getProdutosConsumidos.length - b.getProdutosConsumidos.length);

        if (clientesOrdenados.length === 0) {
            console.log("Nenhum cliente consumiu produtos.");
            return;
        }

        console.log("Clientes que menos consumiram produtos:");
        clientesOrdenados.slice(0, 10).forEach(cliente => {
            console.log(`Cliente: ${cliente.nome}, Produtos Consumidos: ${cliente.getProdutosConsumidos.length}`);
        });
    }
}