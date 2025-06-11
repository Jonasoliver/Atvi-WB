import Cliente from "../../modelo/cliente";
import Formatacoes from "../formatacoes";
import Listagem from "../listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    private formatacoes: Formatacoes
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.formatacoes = new Formatacoes()
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`Genero: ` + cliente.getGenero);
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
        });
        console.log(`\n`);
    }
}