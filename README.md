# Atividade Prática – Catálogo de Heróis

Projeto desenvolvido com Node.js e Express para praticar:
- criação de rotas;
- retorno de páginas HTML com `res.send()`;
- parâmetros de rota com `req.params`.

## Estrutura

```text
atividade-catalogo-de-herois/
├── server.js
├── package.json
└── README.md
```

## Requisitos

- Node.js instalado no computador.
- npm (instalado junto com o Node.js).

## Como executar

1. Extraia o arquivo ZIP.
2. Abra a pasta `atividade-catalogo-de-herois` no VS Code.
3. Abra o terminal dentro da pasta.
4. Instale o Express:

   ```bash
   npm install
   ```

5. Inicie o servidor:

   ```bash
   npm start
   ```

6. Acesse no navegador: http://localhost:3030

## Rotas disponíveis

| Rota | O que apresenta |
|---|---|
| `/` | Página inicial com links para as empresas e quatro personagens |
| `/marvel` | Descrição da Marvel e links de seus personagens |
| `/dc` | Descrição da DC Comics e links de seus personagens |
| `/personagem/:empresa/:nome` | Página que apresenta os dois parâmetros recebidos pela URL |

## Exemplos para testar os parâmetros

- http://localhost:3030/personagem/marvel/Thor
- http://localhost:3030/personagem/marvel/Spider-Man
- http://localhost:3030/personagem/dc/Batman
- http://localhost:3030/personagem/dc/Superman

Na rota `/personagem/:empresa/:nome`, os valores são recuperados com:

```javascript
const empresa = req.params.empresa;
const nome = req.params.nome;
```

## Entrega no Moodle e GitHub

- Envie o arquivo ZIP do projeto no Moodle.
- Para o GitHub, crie um repositório público e envie os arquivos `server.js`, `package.json` e `README.md`.
