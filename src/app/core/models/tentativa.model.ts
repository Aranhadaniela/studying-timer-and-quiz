export interface Resposta{
    questaoId:string;
    alternativaId:string;
    tempoMs:number;
    acertou:boolean;
    errosAntesDeAcertar:number;
}

export interface Tentativa {
    id:string;
    quizId:string;
    inicio:string;
    fim:string;
    respostas:Resposta[]

}