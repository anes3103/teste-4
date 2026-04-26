
//o window.add serve para por um tipo de evento, como o scroll. nesse caso ele muda o apacidade do nav
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    nav.style.background = window.scrollY > 50 ? "rgba(5, 7, 10, 0.95)" : "rgba(5, 7, 10, 0.8)"; 
    // É a condição (se a rolagem passou de 50 pixels).
    //?: Significa "então faça isso" (aplica o fundo mais escuro).
    //:: Significa "caso contrário" (mantém o fundo mais transparente).
});

const frases = ["Precisa de ajuda com o sensor?", "Estamos online 24h para você."];

function falarMascote() {
    const balao = document.getElementById('balao');
    balao.innerText = frases[Math.floor(Math.random() * frases.length)];
    const bot = document.getElementById('safebot'); // Seleciona a imagem do mascote para aplicar o efeito visual
    bot.style.transform = "scale(1.1)"; // Aumenta o tamanho do robô em 10% para simular uma reação ou pulo
    setTimeout(() => bot.style.transform = "scale(1)", 200); //setTimeout serve pra fazer um delay
}

//função para buscar o CEP usando a API ViaCEP

function buscarCEP() {
    const cep = document.getElementById('cep').value.replace(/\D/g, ''); //remove tudo que não for número
    const out = document.getElementById('resultado-cep'); //elemento onde o resultado será exibido

    //caso o CEP não tenha 8 dígitos, exibe uma mensagem de erro
    if (cep.length !== 8) {
        out.innerHTML = "❌ Digite 8 números!";
        return;
    }

    out.innerHTML = "🔍 Buscando..."; //enquanto consulta a API, exibe uma mensagem de carregamento
    fetch(`https://viacep.com.br/ws/${cep}/json/`) //faz a requisição para a API ViaCEP, passando o CEP digitado (é o mais importante)
        .then(res => res.json()) // Converte a resposta bruta da API para um objeto JSON
        .then(data => {
            //caso o cep não exita, mostramos uma mensagem de erro
            if (data.erro) {
                out.innerHTML = "❌ CEP não encontrado.";
            //se estiver tudo certo, mostramos a localização encontrada e uma mensagem de suporte
            } else {
                out.innerHTML = `✅ Disponível em: ${data.logradouro}, ${data.localidade} - ${data.uf}`;
                document.getElementById('balao').innerText = "Encontrei sua região! Temos suporte por aí.";
            }
        })
        .catch(() => out.innerHTML = "⚠️ Erro na conexão."); //catch serve para tratar erros de conexão e outros
}


//função do botão de vídeo, que mostra ou esconde o container do vídeo

function toggleVideo() { //toggle esconde ou revela o vídeo
    const container = document.getElementById('video-container');
    container.style.display = container.style.display === 'none' ? 'block' : 'none'; //none esconde e block mostra o elemento
}
