// let nome = prompt("Quem é você? Digite aqui seu nome")


// // crase ela espera que voce insira a variavel nome dentro da variável string. O efeito de concatenar é o mesmo
// alert(`Seja bem vindo, ${nome}`); 

// // escreva algo no navegador
// console.log(`O usuário nome ${nome} acessou a página`); 


// primeiro exercicio de verificação
let nota = prompt("Qual foi a nota do aluno?");

nota = Number(nota);

if(isNaN(nota)){
    alert("ERRO: VALOR INVÁLIDO!");
}

else if (nota < 5) {
    alert("Reprovado");
    }
else if (nota >=7) {
    alert("Aprovado");
    }
else{
    alert("Exame")
    }
