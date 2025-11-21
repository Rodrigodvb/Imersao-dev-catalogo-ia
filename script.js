let cardContainer = document.querySelector(".card-container");
let campoBusca = document.querySelector("header input");
let dados = [];

campoBusca.addEventListener("focus", ()=> {
    campoBusca.value = "";
});
campoBusca.addEventListener("input", () => {
    if (campoBusca.value.length > 0){campoBusca.style.color = "black";
    } else {
        campoBusca.style.color = "";
    }
});
campoBusca.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        iniciarBusca();
    }
});

async function iniciarBusca() {
    // Se os dados ainda não foram carregados, busca do JSON.
    if (dados.length === 0) {
        try {
            let resposta = await fetch("data.json");
            dados = await resposta.json();
        } catch (error) {
            console.error("Falha ao buscar dados:", error);
            return; // Interrompe a execução se houver erro
        }
    }

    const termoBusca = campoBusca.value.toLowerCase();
    const dadosFiltrados = dados.filter(dado =>{
        const nomeMatch = dado.nome.toLowerCase().includes(termoBusca);
        const descricaoMatch = dado.descricao.toLowerCase().includes(termoBusca);
        const tagMatch = dado.tags.some(tag => tag.toLowerCase().includes(termoBusca));

        return nomeMatch || descricaoMatch || tagMatch;
    });

    renderizarCards(dadosFiltrados);
}

function renderizarCards(dados) {
    cardContainer.innerHTML = ""; // Limpa os cards existentes antes de renderizar novos
    for (let dado of dados) {
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
        <h2>${dado.nome}</h2>
        <p>${dado.data_criacao}</p>
        <p>${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Acesse</a>
        `
        cardContainer.appendChild(article);
    }
}