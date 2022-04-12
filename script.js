function endereco() {
    let cep = document.getElementById("cep");
    let url = "http://viacep.com.br/ws/" + cep.value + "/json/";

    let localidade = document.getElementById("localidade");
    let uf = document.getElementById("uf");
    let bairro = document.getElementById("bairro");
    let logradouro = document.getElementById("logradouro");

    fetch(url, {method: 'GET'})
     .then(Response => {
         Response.json()
             .then(data => {
                 logradouro.value = data.logradouro;
                 complemento.value = data.complemento;
                 localidade.value = data.localidade;
                 bairro.value = data.bairro;
                 uf.value = data.uf;

             })
     })
     .catch(erro => {
         logradouro.value = "";
         complemento.value = "";
         localidade.value = "";
         bairro.value = "";
         uf.value = "";
         alert("CEP não encontrado");
     })
 }