// fetch(endereço, (dados e caracterísiticas do request));

// PADORES DO FETCH;
// Metodo: GET;
// Corpo (body): vazio;

const imagem = document.querySelector("#carta");

// fetch para GET
// Get não ter corpo
fetch("https://enderço do get").then(promessa => promessa.json()).then(dados => {
//    digite aqui  que fazer com os dados. salvar uma variavel para usar depois, tratar os dados para fazer novas requisiçoes e novas promessas. Uma vez com o objeto na mao vc pode trabalhar com javascrip. 
});


// z61qme4n18qr


// fetch para POST. FETCH API POST sample.
fetch("https://enderço.do.post", {
    // além do link tem que passar um objeto
    headers:{
        //define que os dados que vc esta mandando é json
        "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(seu_objeto_de_body),
}).then(promessa => promessa.json()).then(dados => {
//    digite aqui  que fazer com os dados. 
});