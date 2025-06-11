export default class Formatacoes {
    constructor() {

    }
    public DataString(data: Date): string {
        return `${data.getDate()}/${data.getMonth()+ 1}/${data.getFullYear()}`
    }
    public StringData(data: string): Date {
        let partesData = data.split('/')
        let ano = parseInt(partesData[2])
        let mes = parseInt(partesData[1])-1
        let dia = parseInt(partesData[0])
        
        return new Date(ano, mes, dia)
    }
}