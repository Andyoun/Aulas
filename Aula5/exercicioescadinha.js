// seria legal fazer verificação de numero
let tamanho = Number(prompt("Qual o tamanho da escadinha"));
let contador = 0;


// pode começar com 1 ou vazio
let escadinha = "";

// se o cara colocar 6 ele vai rodar 6 vezes
while (contador < tamanho){
    escadinha = escadinha + "#";
    console.log(escadinha);
    contador++;
}


// teste de mesa: entender a linguagem, passo a passo ler linha por linha como se fosse um computador

