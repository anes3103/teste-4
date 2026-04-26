// Cria uma lista de objetos (array) para armazenar os dados de cada pessoa em um só lugar
const membros = [
            { nome: "Maria Eduarda", cargo: "Design do Site", github: "anes3103", email: "m.anes@uni9.edu.br", img: "imagens/avatar/Eduarda.jpeg"},     
            { nome: "Felipe", cargo: "Testes e Integração", github: "felipe-dev", email: "yfelipeferreirasilvay@uni9.edu.br", img: "imagens/avatar/Felipe.jpeg" },
            { nome: "Karen", cargo: "Gestão e Revisão Final", github: "karen-design", email: "karen.freman.nascimento@uni9.edu.br ", img: "imagens/avatar/Karen.jpeg" },
            { nome: "Wesley", cargo: "Lógica de dados e Maps e Conexão", github: "wexsouza", email: "wesley.souza@uni9.edu.br", img: "imagens/avatar/Wesley.jpeg" },
            { nome: "Ighor", cargo: "Arquitetura do Software", github: "ighorieckes-alt", email: "ighor.ieckes@uni9.edu.br", img: "imagens/avatar/Ighor.jpeg" },
            { nome: "Julia", cargo: "Edição de Vídeo e Mídia", github: "julia-sys", email: "julia.c.turatti@uni9.edu.br", img: "imagens/avatar/Julia.jpeg" },
            { nome: "Luana", cargo: "Design do Mascote e Roteiro ", github: "LuanaAlencar0", email: " lc.alencar@uni9.edu.br", img: "imagens/avatar/Luana.jpeg" },
            { nome: "Miguel", cargo: "Finalização, qualidade e ABNT", github: "lucasnunesborges", email: " lucasnunes.borges@uni9.edu.br", img: "imagens/avatar/Miguel.jpeg" },
            { nome: "Laryssa", cargo: "Programação do Arduino", github: "laryssafreitas", email: " laryssa.freitas@uni9.edu.br ", img: "imagens/avatar/Laryssa.jpeg" },
            { nome: "Nicolas", cargo: "Montagem do Circuito", github: "Nferraz10", email: "ferraznicolas2102@gmail.com", img: "imagens/avatar/Nicolas.jpeg" },
            { nome: "Marco", cargo: "Orçamentos e Hardware", github: "marco-arch", email: "ferreira.marco@uni9.edu.br", img: "imagens/avatar/Marco.jpeg" },    
    ];

const container = document.getElementById('team-container'); // Seleciona o elemento onde os membros serão colocados
let html = ''; // Variável para acumular todo o código HTML que será gerado no loop

membros.forEach(m => {   // forEach percorre cada item da lista 'membros', um por um, chamando-o de 'm'
    //as crases `` permitem usar variáveis como ${m.nome} direto no texto, ou seja, facilita o html de ser escrito no js 
    html += `
        <div class="member-small glass-card">
            <img src="${m.img}" alt="${m.nome}">
            <h4>${m.nome}</h4>
            <span class="role-tag">${m.cargo}</span>
        
            <div class="member-links">
                <a href="https://github.com/${m.github}" target="_blank" title="GitHub">
                    <i class="fab fa-github"></i>
                </a>
                <a href="mailto:${m.email}" title="E-mail">
                    <i class="fas fa-envelope"></i>
                </a>
            </div>
        </div>
    `;

    // O código acima cria um bloco HTML para cada membro, usando as informações do objeto 'm' (nome, cargo, github, email e imagem).
    // o member-small define o estilo do cartão dos membros, sendo glass-card um código que dá efeito de vidro
    //member-links define o estilos dos links e seus icones são so font-awesome localizados no index.html
});

container.innerHTML = html;