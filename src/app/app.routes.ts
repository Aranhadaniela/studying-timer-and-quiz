import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'quizzes', pathMatch: 'full' },
  {
    path: 'quizzes',
    title: 'Meus quizzes',
    loadComponent: () => import('./features/quiz-list/quiz-list').then((m) => m.QuizList),
  },
  {
    path: 'quizzes/novo',
    title: 'Novo quiz',
    loadComponent: () => import('./features/quiz-editor/quiz-editor').then((m) => m.QuizEditor),
  },
  {
    path: 'quizzes/:id/editar',
    title: 'Editar quiz',
    loadComponent: () => import('./features/quiz-editor/quiz-editor').then((m) => m.QuizEditor),
  },
  {
    path: 'quizzes/:id/jogar',
    title: 'Jogar quiz',
    loadComponent: () => import('./features/quiz-player/quiz-player').then((m) => m.QuizPlayer),
  },
  {
    path: 'quizzes/:id/resultados',
    title: 'Resultados',
    loadComponent: () => import('./features/results/results').then((m) => m.Results),
  },
  {
    path: 'estudo',
    title: 'Timer de estudo',
    loadComponent: () => import('./features/study-timer/study-timer').then((m) => m.StudyTimer),
  },
  { path: '**', redirectTo: 'quizzes' },
];