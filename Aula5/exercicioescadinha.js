// seria legal fazer verificação de numero
let tamanho = Number(prompt("Qual o tamanho da escadinha"));
let contador = 0;
let degrau = prompt("digite um caractere do degrau")

// se digitar letras, vai dar NaN. NaN < tamanho da false. 
// Number é uma função pronta do JS para fazer casting. 


// pode começar com 1 ou vazio
let escadinha = "";

// se o cara colocar 6 ele vai rodar 6 vezes
// contador inicializado fora do codigo a comparação é dentro do while e há um incremeto. 
// inicialização condição atualização. 
while (contador < tamanho){
    escadinha = escadinha + degrau;
    console.log(escadinha);
    contador++;
}



// teste de mesa: entender a linguagem, passo a passo ler linha por linha como se fosse um computador

