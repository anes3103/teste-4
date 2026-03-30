
// Animação do Scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) nav.style.background = "rgba(5, 7, 10, 0.95)";
    else nav.style.background = "rgba(5, 7, 10, 0.8)";
});

const frases = [
    "Precisa de ajuda com o sensor?",
    "Estamos online 24h para você."
];

function falarMascote() {
    const balao = document.getElementById('balao');
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    balao.innerText = fraseAleatoria;
    
    // 
    const bot = document.getElementById('safebot');
    bot.style.transform = "scale(1.1)";
    setTimeout(() => bot.style.transform = "scale(1)", 200);
}

// ViaCep
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
                // O SafeBot comenta o resultado
                document.getElementById('balao').innerText = "Encontrei sua região! Temos suporte por aí.";
            }
        })
        .catch(() => out.innerHTML = "⚠️ Erro na conexão.");
}

    function toggleVideo() {
        const container = document.getElementById('video-container');
        container.style.display = container.style.display === 'none' ? 'block' : 'none';

        }



        // Permitir dar "Enter" no teclado para entrar
        document.getElementById('accessKey').addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                verifyAccess();
            }
        });



