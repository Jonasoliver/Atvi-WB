import promptSync from "prompt-sync";
export default class Entrada {
    public receberNumero(mensagem: string): number {
        let prompt = promptSync();
        let valor = prompt(mensagem)
        let numero  = new Number(valor)
        return numero.valueOf()
    }
    public receberTexto(mensagem: string): string {
        let prompt = promptSync();
        let texto = prompt(mensagem)
        return texto
    }
    public receberTextoObrigatorio(mensagem: string, erro: string): string {
        let prompt = promptSync();
        let texto = prompt(mensagem)
        while (texto === '') {
            console.log(erro)
            texto = prompt(mensagem)
        }
        return texto
    }
    public receberNumeroObrigatorio(mensagem: string, erro: string): number {
        let prompt = promptSync();
        let valor = prompt(mensagem)
        let numero = new Number(valor)
        while (isNaN(numero.valueOf()) && numero.valueOf() <= 0) {
            console.log(erro)
            valor = prompt(mensagem)
            numero = new Number(valor)
        }
        return numero.valueOf()
    }
}