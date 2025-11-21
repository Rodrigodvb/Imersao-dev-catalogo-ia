# Catálogo de IA
Aplicação prática da base de conhecimentos da Imerrsão Dev Google Gemini

Este projeto é uma aplicação simples e moderna que permite buscar itens em um arquivo **JSON** e exibi-los dinamicamente em formato de **cards estilizados**, com vídeo de fundo, design futurista e responsivo.

---

## 🚀 Funcionalidades

* **Busca instantânea** por nome, descrição ou tags.
* Carregamento automático dos dados a partir de `data.json`.
* Renderização dinâmica de cards com título, descrição, data e link.
* Design futurista inspirado em UI high‑tech.
* Vídeo de fundo com efeito de escurecimento e blur.
* Responsividade completa para dispositivos móveis.
* Footer fixo com links e localização.

---

## 🧩 Tecnologias Utilizadas

* **HTML5**
* **CSS3**
* **JavaScript**
* **Google Fonts (Orbitron)**

---

## 📂 Estrutura do Projeto

```
📁 projeto
├── index.html
├── style.css
├── script.js
├── data.json
├── linkedin.png
├── github.png
└── video-bg.mp4
```

---

## 🧠 Como Funciona

### 1. Carregamento dos dados

Quando o usuário faz a primeira busca, o arquivo `data.json` é carregado usando `fetch()`:

```js
let resposta = await fetch("data.json");
dados = await resposta.json();
```

### 2. Filtragem

A busca é feita verificando **nome**, **descrição** e **tags**:

```js
dados.filter(dado => {
  const nomeMatch = dado.nome.toLowerCase().includes(termo);
  const descricaoMatch = dado.descricao.toLowerCase().includes(termo);
  const tagMatch = dado.tags.some(tag => tag.toLowerCase().includes(termo));
  return nomeMatch || descricaoMatch || tagMatch;
});
```

### 3. Renderização

Os cards são criados dinamicamente:

```js
article.innerHTML = `
  <h2>${dado.nome}</h2>
  <p>${dado.data_criacao}</p>
  <p>${dado.descricao}</p>
  <a href="${dado.link}" target="_blank">Acesse</a>
`;
```

---

## 📦 Exemplo do arquivo `data.json`

```json
[
  {
    "nome": "Projeto Exemplo",
    "descricao": "Um teste de exibição.",
    "data_criacao": "2024-01-01",
    "tags": ["html", "css", "js"],
    "link": "https://exemplo.com"
  }
]
```

---

## 🛠 Como Rodar o Projeto

1. Baixe ou clone o repositório:

   ```bash
   git clone https://github.com/usuario/meu-projeto
   ```
2. Coloque todos os arquivos na mesma pasta.
3. Abra o arquivo **index.html** no navegador.
4. (Opcional) Use uma extensão de *Live Server* para melhor experiência.

---

## 🎨 Personalização

Você pode alterar:

* O vídeo de fundo (`video-bg.mp4`)
* As cores no `:root` do CSS
* A fonte principal
* O layout dos cards

---

## 📱 Responsividade

O CSS inclui media queries para telas menores de 768px e 480px:

* Input se ajusta à largura total
* Footer oculta em telas muito pequenas
* Títulos diminuem automaticamente

---

## 📄 Licença

Este projeto pode ser usado e modificado livremente.

---

## 💬 Contribuição

Sugestões são bem-vindas! Abra uma issue ou envie um pull request.

---
