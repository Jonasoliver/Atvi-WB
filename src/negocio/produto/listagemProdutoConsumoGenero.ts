import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import { Genero } from "../../modelo/genero";
import Listagem from "../listagem";

export default class ListagemProdutosConsumidosGenero extends Listagem {
    private clientes: Array<Cliente>;
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public listar(): void {
        console.log(`Escolha o gênero que deseja listar: `);
        console.log(`1 - Feminino`);
        console.log(`2 - Masculino`);
        console.log(`3 - Não Binário`);
        console.log(`4 - Não declarado`);
        let opcaoGenero = this.entrada.receberNumero(`Digite o número do gênero desejado: `);
        let genero: string = ''
        switch (opcaoGenero) {
            case 1:
                genero = Genero.Feminino;
                break;
            case 2:
                genero = Genero.Masculino
                break;
            case 3:
                genero = Genero.NaoBinario
                break;
            case 4:
                genero = Genero.NaoIdentificado
                break;
            default:
                console.log(`Opção inválida!`);
                return;
        }
        
        const clienteGeneroEscolhido = this.clientes.filter((cliente) => cliente.getGenero === genero)

        const produtosConsumidos: Produto[] = [];

        for (const cliente of clienteGeneroEscolhido) {
            produtosConsumidos.push(...cliente.getProdutosConsumidos);
        }
        
        if (produtosConsumidos.length > 0) {
            const contadorProdutos = new Map<number, number>()

            for (const produto of produtosConsumidos) {
                const produtoId = produto.getId
                contadorProdutos.set(produtoId, (contadorProdutos.get(produtoId) || 0)+ 1)
            }
        
            const produtosOrdenados = Array.from(contadorProdutos.entries()).sort((a, b) => b[1] - a[1])

            console.log(`Listagem dos produtos mais consumidos por ${genero}:`);
            produtosOrdenados.slice(0, 10).forEach((produtoAtual, index) => {
                const [produtoId, quantidade] = produtoAtual;
                const produto = produtosConsumidos.find(produto => produto.getId === produtoId);
                
                if (produto) {
                    console.log(`${index + 1}. Nome: ${produto.getNome}, Quantidade de Vendas: ${quantidade}`);
                }
            });
        } else {
            console.log(`Não foram consumidos produtos pelo gênero ${genero}.`);
        }
    }
}