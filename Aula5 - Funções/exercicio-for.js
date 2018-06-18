// let i=1;

// while (i <= 10){
//     console.log(i);
//     i++;
// }

// console.log("------------");
// como fazer um for exatamente equivalente a esse while. 
// a estrutura do for é semelhante ao while. 

// inicialização condição e atualização para for e while
// esse let i é exclusivo do for
// for (let i = 1; i <= 10; i++){
//     console.log(i);    
// }

// for of e for in

let lista = ["jorge", "mateus", "Wolverino", "Wade", "Hulk", "Cleyton", "tomu", "Jack"];

// in o JS entende que você quer percorrer uma lista. TEM que ser uma lista já existente dentro de uma lista. 
// for in roda faz com que a variavel interna assuma um indice da lista a cada execução. Vai rodar tantas vezes quanto tiver elementos da lista. 
// tambem funciona em objetos
for(let item in lista){
    console.log(item);
}

console.log("------------");

// for off faz com que a variavel interna assuma um VALOR da lista da execução
// indices tem nomes em objetos
// exlusivo para lista
for(let item of lista){
    console.log(item);
}

// objetos tem atributos.
let cliente = {
    nome: "Renan",
    idade: 28,
    vivo: true
}

console.log("------------");

// acessar variaveis com .atributo precisa a variavel estar criada.
for(let atributo in cliente){
    console.log(`O atributo ${atributo} tem o valor ${cliente[atributo]}`)
}