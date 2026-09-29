export type TipoQuestao = 'multipla-escolha' | "verdadeiro-falso";

export interface Alternativa {
    id: string;
    texto: string;
    correta: boolean;
    tecla?: string;
}

export interface Questao {
    id: string;
    enunciado: string;
    tipo: TipoQuestao;
    alternativas: Alternativa[]
}

export interface Quiz {
    id: string;
    titulo: string;
    descricao?: string;
    embaralharQuestoes: boolean;
    questoes: Questao[]
}

export type NovoQuiz = Omit<Quiz, 'id'>;
//omite cria um novo tipo a aprtir do tipo existente,
// omitindo certas propriedades que nao quero que estejam presentes
