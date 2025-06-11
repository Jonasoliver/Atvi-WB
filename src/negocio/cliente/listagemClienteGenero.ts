import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import { Genero } from "../../modelo/genero";
import Formatacoes from "../formatacoes";
import Listagem from "../listagem";

export default class ListagemClienteGenero extends Listagem {
    private clientes: Array<Cliente>;
    private genero: string;
    private entrada: Entrada;
    private formatacoes: Formatacoes;

    constructor(clientes: Array<Cliente>, genero: string) {
        super();
        this.clientes = clientes;
        this.genero = genero;
        this.entrada = new Entrada();
        this.formatacoes = new Formatacoes();
    }

    public listar(): void {
        let opcaoEscolhida = 0;
        let genero: Genero;
        while (opcaoEscolhida < 1 || opcaoEscolhida > 4) {
            console.log(`Escolha o Gênero que você se identifica:`);
            console.log(`1 - Feminino`);
            console.log(`2 - Masculino`);
            console.log(`3 - Não Binário`);
            console.log(`4 - Prefiro não me identificar!`);

            opcaoEscolhida = this.entrada.receberNumero(`Digite a opção escolhida: `);

            switch (opcaoEscolhida) {
                case 1:
                genero = Genero.Feminino
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
                console.log(`Opção inválida! Escolha somente as opções disponíveis.`);
            }
        }
        const clientePorGenero = this.clientes.filter(cliente => cliente.getGenero === genero)
        
        if (clientePorGenero.length === 0) {
            console.log(`Nenhum cliente encontrado com o gênero ${this.genero}.`);
        } else {
            console.log(`\nLista de clientes do gênero ${this.genero}:`);
            clientePorGenero.forEach(cliente => {
                console.log(`Nome: ` + cliente.nome);
                console.log(`Nome social: ` + cliente.nomeSocial);
                console.log(`CPF: ` + cliente.getCpf.getValor);
                console.log(`Data de cadastro: ` + this.formatacoes.DataString(cliente.getDataCadastro));
                let rgs = cliente.getRgs;
                if (rgs.length === 0) {
                    console.log(`Nenhum RG cadastrado.`);
                } else {
                    rgs.forEach(rg => {
                        console.log(`RG: ` + rg.getValor);
                        console.log(`Data de emissão: ` + this.formatacoes.DataString(rg.getDataEmissao));
                    });
                }
                let telefones = cliente.getTelefones;
                if (telefones.length === 0) {
                    console.log(`Nenhum telefone cadastrado.`);
                } else {
                    telefones.forEach(telefone => {
                        console.log(`Telefone: ` + telefone.getDdd + telefone.getNumero);
                    })
                }
                console.log(`--------------------------------------`);
                console.log(`Produtos consumidos:`);
                let produtos = cliente.getProdutosConsumidos;
                if (produtos.length === 0) {
                    console.log(`Nenhum produto consumido.`);
                } else {
                    produtos.forEach(produto => {
                        console.log(`Produto: ` + produto.getNome);
                        console.log(`Valor: R$ ` + produto.getValor.toFixed(2));
                        console.log(`Data de consumo: ` + this.formatacoes.DataString(produto.getDataConsumo));
                    });
                }
                console.log(`--------------------------------------`);
                console.log(`Serviços consumidos:`);
                let servicos = cliente.getServicosConsumidos;
                if (servicos.length === 0) {
                    console.log(`Nenhum serviço consumido.`);
                } else {
                    servicos.forEach(servico => {
                        console.log(`Serviço: ` + servico.getNome);
                        console.log(`Valor: R$ ` + servico.getValor.toFixed(2));
                        console.log(`Data de consumo: ` + this.formatacoes.DataString(servico.getDataConsumo));
                    });
                }
                    console.log(`--------------------------------------`);
                });
        }
    }
}