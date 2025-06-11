import Entrada from "../io/entrada"
import CPF from "./cpf"
import { Genero } from "./genero"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private genero: Genero
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    private entrada: Entrada
    constructor(nome: string, nomeSocial: string, cpf: CPF, genero: Genero = Genero.NaoIdentificado) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = []
        this.dataCadastro = new Date()
        this.genero = genero
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
        this.entrada = new Entrada()
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public printRgs(): void {
        if (this.rgs.length === 0) {
            console.log('O cliente não possui RGs cadastrados')
        }
        this.rgs.forEach(rg => {
            console.log('Lista de RGs:');
            console.log(`${rg.getValor} - Data de emissão: ${rg.getDataEmissao}`)
        })
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public addRgs(RG: RG): void{
        this.rgs.push(RG)
    }
    public updateRg(valor: string, novoRg: RG): boolean {
        let indice = this.rgs.findIndex(rg => rg.getValor === valor)
        if (indice !== -1) {
            this.rgs[indice] = novoRg;
            return true
        } else {
            console.log('RG não encontrado. Por favor insira um valor correto.')
            return false
        }
    }
    public excluirRg(valor: string): boolean {
        let indice = this.rgs.findIndex(rg => rg.getValor === valor)
        if (indice !== -1) {
            this.rgs.splice(indice, 1)
            return true
        } else {
            console.log('RG não encontrado. Por favor insira um valor correto.')
            return false
        }
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getGenero(): Genero {
        return this.genero
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public printTelefones(): void {
        if (this.telefones.length === 0) {
            console.log('O cliente não possui telefones cadastrados')
        }
        this.telefones.forEach(Telefone => {
            console.log('Lista de telefones:')
            console.log(`${Telefone.getDdd}` + `${Telefone.getNumero}`)
    })
    }
    public addTelefones(telefone: Telefone): void{
        this.telefones.push(telefone)
    }
    public updateTelefone(ddd: string, numero: string): boolean {
        let indice = this.telefones.findIndex(telefone => telefone.getNumero === numero && telefone.getDdd === ddd)
        if (indice !== -1) {
            let novoDDD = this.entrada.receberNumero('Por favor insira o novo DDD: ')
            if (novoDDD === 0) {
                novoDDD = parseInt(this.telefones[indice].getDdd)
            }
            let novoNumero = this.entrada.receberNumero('Por favor insira o novo número: ')
            if (novoNumero === 0) {
                novoNumero = parseInt(this.telefones[indice].getNumero)
            }
            let novoTelefone  = new Telefone (ddd, numero)
            this.telefones[indice] = novoTelefone;
            return true
        } else {
            console.log('Telefone não encontrado. Por favor insira um número correto.')
            return false
        }
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
}