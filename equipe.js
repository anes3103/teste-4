const membros = [
            { nome: "Maria Eduarda", cargo: "Design do Site", github: "anes3103", email: "m.anes@uni9.edu.br", img: "imagens/avatar/Eduarda.jpeg"},     
            { nome: "Felipe", cargo: "Testes e Integração", github: "felipe-dev", email: "yfelipeferreirasilvay@uni9.edu.br", img: "imagens/avatar/Felipe.jpeg" },
            { nome: "Karen", cargo: "Gestão e Revisão Final", github: "karen-design", email: "karen.freman.nascimento@uni9.edu.br ", img: "imagens/avatar/Karen.jpeg" },
            { nome: "Wesley", cargo: "Lógica de dados e Maps e Conexão", github: "wexsouza", email: "wesley.souza@uni9.edu.br", img: "imagens/avatar/Wesley.jpeg" },
            { nome: "Ighor", cargo: "Arquitetura do Software", github: "ighorieckes-alt", email: "ighor.ieckes@uni9.edu.br", img: "imagens/avatar/Ighor.jpeg" },
            { nome: "Julia", cargo: "Edição de Vídeo e Mídia", github: "julia-sys", email: "julia.c.turatti@uni9.edu.br", img: "imagens/avatar/Julia.jpeg" },
            { nome: "Luana", cargo: "Design do Mascote e Roteiro ", github: "luana-sec", email: " lc.alencar@uni9.edu.br", img: "imagens/avatar/Luana.jpeg" },
            { nome: "Miguel", cargo: "Finalização, qualidade e ABNT", github: "miguel-mob", email: " lucasnunes.borges@uni9.edu.br", img: "imagens/avatar/Miguel.jpeg" },
            { nome: "Laryssa", cargo: "Programação do Arduino", github: "lary-manager", email: " laryssa.freitas@uni9.edu.br ", img: "imagens/avatar/Laryssa.jpeg" },
            { nome: "Nicolas", cargo: "Montagem do Circuito", github: "nicolas-qa", email: "ferraz.nicolas@uni9.edu.br", img: "imagens/avatar/Nicolas.jpeg" },
            { nome: "Marco", cargo: "Orçamentos e Hardware", github: "marco-arch", email: "ferreira.marco@uni9.edu.br", img: "imagens/avatar/Marco.jpeg" },    
    ];

        const container = document.getElementById('team-container');


        membros.forEach(m => {  
            container.innerHTML += `
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
        });