import { Quiz } from '../models/quiz.model';

export const QUIZ_EXEMPLO: Quiz = {
    id: 'exemplo',
    titulo: 'Quiz de exemplo',
    descricao: 'Responda com as teclas E e I',
    embaralharQuestoes: true,
    questoes: [
        {
            id: 'q1',
            enunciado: 'Angular é um framework de front-end.',
            tipo: 'verdadeiro-falso',
            alternativas: [
                { id: 'a1', texto: 'Verdadeiro', correta: true, tecla: 'e' },
                { id: 'a2', texto: 'Falso', correta: false, tecla: 'i' },
            ],
        },
        {
            id: 'q2',
            enunciado: 'O TypeScript é uma superset do JavaScript que adiciona tipagem estática.',
            tipo: 'verdadeiro-falso',
            alternativas: [
                { id: 'a1', texto: 'Verdadeiro', correta: true, tecla: 'e' },
                { id: 'a2', texto: 'Falso', correta: false, tecla: 'i' },
            ],
        },
        {
            id: 'q3',
            enunciado: 'Componentes standalone exigem que você declare os módulos no NgModule tradicional.',
            tipo: 'verdadeiro-falso',
            alternativas: [
                { id: 'a1', texto: 'Verdadeiro', correta: false, tecla: 'e' },
                { id: 'a2', texto: 'Falso', correta: true, tecla: 'i' },
            ],
        },
        {
            id: 'q4',
            enunciado: 'A diretiva routerLinkActive é usada para aplicar uma classe CSS quando a rota está ativa.',
            tipo: 'verdadeiro-falso',
            alternativas: [
                { id: 'a1', texto: 'Verdadeiro', correta: true, tecla: 'e' },
                { id: 'a2', texto: 'Falso', correta: false, tecla: 'i' },
            ],
        },
        {
            id: 'q5',
            enunciado: 'O comando ng generate component cria apenas um arquivo de estilização.',
            tipo: 'verdadeiro-falso',
            alternativas: [
                { id: 'a1', texto: 'Verdadeiro', correta: false, tecla: 'e' },
                { id: 'a2', texto: 'Falso', correta: true, tecla: 'i' },
            ],
        }
       
    ],
};