import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemClientesConsumiramProdutoQuantidade extends Listagem {
    private clientes: Array<Cliente>;
    
    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    listar(): void {
        const contagemServicos = new Map<Cliente, number>()

        for (const cliente of this.clientes) {
            const servicoConsumido = cliente.getServicosConsumidos
            contagemServicos.set(cliente, servicoConsumido.length)
        }
        const clientesOrdenados = Array.from(contagemServicos.entries()).sort((a, b) => b[1] - a[1])

        console.log(`Listagem dos 10 clientes que mais consumiram serviços (quantidade)`)

        clientesOrdenados.slice(0, 10).forEach((clienteAtual, index) => {
            const [cliente, quantidade] = clienteAtual
            console.log(`${index + 1}. Cliente: ${cliente.nome}, Quantidade de Serviços Consumidos: ${quantidade}`)
        })
    }
}