import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemClientesMenosConsumiramServicos extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        const clientesOrdenados = this.clientes
            .sort((a, b) => a.getServicosConsumidos.length - b.getServicosConsumidos.length);

        if (clientesOrdenados.length === 0) {
            console.log("Nenhum cliente consumiu serviços.");
            return;
        }

        console.log("Clientes que menos consumiram serviços:");
        clientesOrdenados.slice(0, 10).forEach(cliente => {
            console.log(`Cliente: ${cliente.nome}, Serviços Consumidos: ${cliente.getServicosConsumidos.length}`);
        });
    }
}