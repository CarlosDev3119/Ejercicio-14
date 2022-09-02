

export class EvaluarNumero {

    constructor(private numero: number) {
        this.numero = numero;
    }

    evaluar() {
        return this.numero > 0 ? "Positivo" : "Negativo";
    }
}