function sorteio(minimo=0, maximo=10) {
    let aleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    return aleatorio;
}

// Arrow Function . A função abaixo é uma função equivalente a função acima. Arrow Function nao tem nome mas vc pode armazenala em uma variavel e depois usar o nome da variavel

const sorteio = (minimo=0, maximo=10) => {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}



let lista = ["Joao", "Maria", "Jose", "Wilson"];

// posição é da função sorteio entre 0 e 4-1 a lista tem 4 elementos mas vai de 0 a 3.

let i = 0;
while (i<10){
    console.log(lista[sorteio(0, lista.length-1)]);
    i++
}
// sorteador de nomes. 
// O que acontece na função fica na função
// ESCOPO de função. 

// function: bloco de codigo 
// sorteio nome da função
// minimo e maximo sao argumentos
// nome da função com os artumentos é a assinatura.
// entradas sao arumento, saidas sao retornos.
// return vai pegar o numero aleatorio da variavel e vai mostrar como resultado da variavel;
// funcion ele CRIA a função e nao é nenhuma vez executada
// sorteio(); EXECUTA a função?
// sorteio chama a função;
// parametro é um valor que preenche o argumento. 
// valor é numero, texto, boolean...

// let nuemro1 = sorteio();
// let numero2 = sorteio(0, 50);
// let numero4 = sorteio(15, 35);

// console.log(nuemro1, numero2, numero3);

// entre 0 e 0.999999999-
// multiplica por 11 e arredonda para baixo deixando a lista entre 0 e 10
// numeros aleatorios entre 0 e 10
// let numero1 = Math.floor(Math.random() * 11);
// let numero2 = Math.floor(Math.random() * 51);
// let numero3 = Math.floor(Math.random() * 22) + 15;
// sorteia entre 22 opções arredonda para baixo  oque da 21 opções de numeros. entre 0 e 21e soma 15 dando valores entre 15 e 35.

// console.log(numero1, numero2, numero3);