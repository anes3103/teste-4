
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    nav.style.background = window.scrollY > 50 ? "rgba(5, 7, 10, 0.95)" : "rgba(5, 7, 10, 0.8)";
});

const frases = ["Precisa de ajuda com o sensor?", "Estamos online 24h para você."];

function falarMascote() {
    const balao = document.getElementById('balao');
    balao.innerText = frases[Math.floor(Math.random() * frases.length)];
    const bot = document.getElementById('safebot');
    bot.style.transform = "scale(1.1)";
    setTimeout(() => bot.style.transform = "scale(1)", 200);
}

function buscarCEP() {
    const cep = document.getElementById('cep').value.replace(/\D/g, '');
    const out = document.getElementById('resultado-cep');

    if (cep.length !== 8) {
        out.innerHTML = "❌ Digite 8 números!";
        return;
    }

    out.innerHTML = "🔍 Buscando...";
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json())
        .then(data => {
            if (data.erro) {
                out.innerHTML = "❌ CEP não encontrado.";
            } else {
                out.innerHTML = `✅ Disponível em: ${data.logradouro}, ${data.localidade} - ${data.uf}`;
                document.getElementById('balao').innerText = "Encontrei sua região! Temos suporte por aí.";
            }
        })
        .catch(() => out.innerHTML = "⚠️ Erro na conexão.");
}

function toggleVideo() {
    const container = document.getElementById('video-container');
    container.style.display = container.style.display === 'none' ? 'block' : 'none';
}

const accessKey = document.getElementById('accessKey');
if (accessKey) {
    accessKey.addEventListener('keypress', e => {
        if (e.key === 'Enter') verifyAccess();
    });
}



