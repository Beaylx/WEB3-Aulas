const cep = document.getElementById('pegarcep')
const url = `https://viacep.com.br/ws/${cep}/json/`;
const botao = document.querySelector('#botaoform')

botao.addEventListener('click', () => {
    mensagem.textContent = "O botão foi clicado com sucesso!";
    botao.classList.toggle('ativo');
    });

fetch(url)
    .then (response => {
        if (!response.ok) throw new Error("Erro de Rede")
        return response.json();
    })

    .then(dados => {
        console.log("Dados recebidos:", dados);
        document.querySelector('#logradouro').textContent = dados.logradouro;
        document;querySelector( '#bairo' ).textContent = dados.bairro;
    })

    .catch(erro => {
        console.error( "Houve um erro!!", erro);
    });