let meninos = ["James", "Neymar", "Renan", "Messi", "Kazim"];
let meninas = ["Maria", "Marta", "Morgana", "Ana", "Carol"];

// PARAR de escrever codigo sem pensar
// Propriedade distributiva entre as duas listas. Como fazer isso somente com if e while?
// while dentro do while. um para ver a lista de meninos e o outro para a lista de meninas. Contador para as duas listas e começa no 0. contador++ ate o tamanho da lista independente do tammanho. 

let numeroCasal = 1;
let i = 0;
let j = 0;

// contador < 5 (5 elementos)
// o primeiro roda uma vez e o de dentro percorre inteiro ate o final da lista. O primeiro incrementa 1 e vai para o while interno para rodar inteiro e assim por diante
while (i < meninos.length){
    j = 0;
    // zerando o J na linha 14 o menino [1] bate com a menina[1] e assim por diante.
    // let dentro de while não é uma coisa legal
    while(j < meninas.length){
        console.log(`Casal ${numeroCasal}: ${meninos[i]} e ${meninas[j]}`);
        j++;
        numeroCasal++;
    }
    i++;
}

// algoritmo de propriedade distributiva para qualquer duas lista. Altgoritmo de combinação de lista
// numeroCasal.push colocar coisas em um vetor é mais rapido do que dar console.log.