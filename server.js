const express = require("express");

const app = express();
const PORT = 3030;

// Função simples para evitar que caracteres especiais sejam interpretados como HTML.
function escaparHTML(valor) {
    return String(valor).replace(/[&<>"']/g, (caractere) => {
        const entidades = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };
        return entidades[caractere];
    });
}

// Página inicial: /
app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Catálogo de Heróis</title>
        </head>
        <body>
            <h1>Catálogo de Heróis</h1>
            <p>Bem-vindo(a) ao catálogo de heróis! Escolha uma empresa ou personagem para conhecer.</p>

            <h2>Empresas</h2>
            <ul>
                <li><a href="/marvel">Marvel</a></li>
                <li><a href="/dc">DC Comics</a></li>
            </ul>

            <hr>

            <h2>Personagens</h2>
            <ul>
                <li><a href="/personagem/marvel/Thor">Thor (Marvel)</a></li>
                <li><a href="/personagem/marvel/Spider-Man">Spider-Man (Marvel)</a></li>
                <li><a href="/personagem/dc/Batman">Batman (DC)</a></li>
                <li><a href="/personagem/dc/Superman">Superman (DC)</a></li>
            </ul>
        </body>
        </html>
    `);
});

// Página da empresa Marvel
app.get("/marvel", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Marvel</title>
        </head>
        <body>
            <h1>Marvel</h1>
            <p>A Marvel é uma empresa de entretenimento conhecida por suas histórias em quadrinhos e personagens de super-heróis.</p>

            <h2>Personagens da Marvel</h2>
            <ul>
                <li><a href="/personagem/marvel/Thor">Thor</a></li>
                <li><a href="/personagem/marvel/Spider-Man">Spider-Man</a></li>
            </ul>

            <p><a href="/">Voltar à página inicial</a></p>
        </body>
        </html>
    `);
});

// Página da empresa DC
app.get("/dc", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>DC Comics</title>
        </head>
        <body>
            <h1>DC Comics</h1>
            <p>A DC Comics é uma editora conhecida por suas histórias em quadrinhos e personagens como Batman e Superman.</p>

            <h2>Personagens da DC</h2>
            <ul>
                <li><a href="/personagem/dc/Batman">Batman</a></li>
                <li><a href="/personagem/dc/Superman">Superman</a></li>
            </ul>

            <p><a href="/">Voltar à página inicial</a></p>
        </body>
        </html>
    `);
});

// Rota com dois parâmetros obrigatórios: empresa e nome
app.get("/personagem/:empresa/:nome", (req, res) => {
    const empresa = escaparHTML(req.params.empresa);
    const nome = escaparHTML(req.params.nome);

    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${nome} - Catálogo de Heróis</title>
        </head>
        <body>
            <h1>Informações do personagem</h1>
            <p><strong>Empresa:</strong> ${empresa}</p>
            <p><strong>Nome do personagem:</strong> ${nome}</p>

            <p><a href="/">Voltar à página inicial</a></p>
        </body>
        </html>
    `);
});

// Página para endereços que não existem
app.use((req, res) => {
    res.status(404).send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>Página não encontrada</title>
        </head>
        <body>
            <h1>Erro 404 - Página não encontrada</h1>
            <p>O endereço informado não existe neste catálogo.</p>
            <a href="/">Voltar à página inicial</a>
        </body>
        </html>
    `);
});

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Servidor funcionando em http://localhost:${PORT}`);
});
