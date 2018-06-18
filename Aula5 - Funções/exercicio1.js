let idade = Number(prompt("Quantos anos você tem?"))

if (idade < 22){
    alert("sinto muito, você nao está apto :(")
}

else if (idade > 55){
    alert("sinto muito, você nao está apto :(")
}

else {
    let salario = Number(prompt("Quanto você ganha por mês?"))
    if (salario < 1000){
        alert("sinto muito, você nao está apto :(")
    }

    else {
        let emprestimo = Number(prompt("Quanto você quer emprestado?"))
        if (emprestimo > salario*15){
            alert("NAO ACEITO")
        }
        else {
            alert("ACEITO")
        }
    }
}




