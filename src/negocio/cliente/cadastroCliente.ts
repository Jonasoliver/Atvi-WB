import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import Cadastro from "../cadastro";
import Formatacoes from "../formatacoes";
import { Genero } from "../../modelo/genero";
import RG from "../../modelo/rg";
import Telefone from "../../modelo/telefone";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    private formatacoes: Formatacoes
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
        this.formatacoes = new Formatacoes()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTextoObrigatorio(`Por favor informe o nome do cliente: `, 'Nome inválido, por favor insira um nome válido.')
        let nomeSocial = this.entrada.receberTextoObrigatorio(`Por favor informe o nome social do cliente: `, 'Nome social inválido, por favor insira um nome social válido.')       
        let valorCPF = this.entrada.receberTextoObrigatorio(`Por favor informe o número do cpf: `, 'CPF inválido, por favor insira um CPF válido.');
        let dataCPF = this.entrada.receberTextoObrigatorio(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `, 'Data de emissão inválida, por favor insira uma data de emissão válida.');
        let cpf = new CPF(valorCPF, this.formatacoes.StringData(dataCPF));
        let cpfBuscado = this.clientes.find(cliente => cliente.getCpf.getValor === cpf.getValor)
        if (cpfBuscado) {
            console.log('CPF já cadastrado, por favor utilize um CPF não registrado.')
            return
        }
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
        let generoCliente: Genero = Genero.NaoIdentificado;

        let cliente = new Cliente(nome, nomeSocial, cpf, generoCliente);

        let inserirNovamente = 'S';
        while (inserirNovamente.toUpperCase() === 'S') {
            let valorRG = this.entrada.receberTextoObrigatorio('Por favor informe o número do RG: ', 'RG inválido, por favor insira um RG válido.')
            let dataRG = this.entrada.receberTextoObrigatorio('Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: ', 'Data de emissão inválida, por favor insira uma data de emissão válida.')
            let rg = new RG(valorRG, this.formatacoes.StringData(dataRG))
            cliente.addRgs(rg)
            inserirNovamente = this.entrada.receberTextoObrigatorio('Deseja inserir mais um RG? (S/N): ', 'Opção inválida, por favor insira S ou N.')
        }
 
        let inserirTelefoneNovamente = 'S';
        while (inserirTelefoneNovamente.toUpperCase() === 'S') {
            let ddd = this.entrada.receberTextoObrigatorio('Por favor insira o DDD do seu número de telefone: ', 'DDD inválido, por favor insira um DDD válido.')
            let numero = this.entrada.receberTextoObrigatorio('Por favor insira o número de telefone: ', 'Número de telefone inválido, por favor insira um número de telefone válido.')
            let telefone = new Telefone(ddd, numero)
            inserirTelefoneNovamente = this.entrada.receberTextoObrigatorio('Deseja inserir mais um telefone? (S/N): ', 'Opção inválida, por favor insira S ou N.')
            cliente.addTelefones(telefone)
        }

        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }
}