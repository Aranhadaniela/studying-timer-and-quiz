export function embaralhar<T>(itens: readonly T[]): T[] {//aceita qualquer tipo de array 
 const copia =[...itens];//cria copia antes de embaralhar 
 for(let i =copia.length -1;i>0;i--){
    const j =Math.floor(Math.random()*(i+1));
    [copia[i],copia[j]]=[copia[j],copia[i]];
 }
 return copia;
}