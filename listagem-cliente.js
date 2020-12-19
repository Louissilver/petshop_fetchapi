// Ao clicar para deletar o cliente exibe uma modal
// Caso o usuário confirme a modal, então é chamada a função que deleta o cliente passando o id como parametro
const removeCliente = id => {
    if (confirm("Tem certeza que quer excluir esse cliente?")) {
        deletarCliente(id);
        document.location.reload();
    }
}

// Aqui pegamos o elemento <table> do HTML usando data-attribute
const corpoTabela = document.querySelector("[data-conteudo-tabela]");

// Função responsável por exibir na tela os dados do cliente
const exibeCliente = (cpf, nome, id) => {
    // Cria um elemento <tr>
    const linha = document.createElement('tr');

    // Gera os elementos <td> e insere neles os valores dos dados dos clientes usando Template literals
    // Adicionamos uma <td> com um botão para excluir clientes usando a função dentro do onclick
    // Adicionamos dentro da <td> do botão excluir outro botão para editar e, ao ser clicado, chama outra página
    const conteudoLinha =
        `
    <td>${cpf}</td>
    <td>${nome}</td>
    <td>
    <button class="btn btn-danger btn-sm" onclick="removeCliente(${id})">Deletar</button>
    <a href="edita-clientes.html?id=${id}"><button class="btn btn-primary btn-sm">Editar</button></a>
    </td>
    `;

    // Coloca os <td> dentro do <tr>
    linha.innerHTML = conteudoLinha;
    // Retorna o conteúdo da linha em HTML
    return linha
}

// Percorremos cada elemento do retorno da nossa Promise com fetch
listarClientes().then(exibe =>
    exibe.forEach(indice => {
        // Adicionamos no corpo da tabela as <tr> e <td> retornadas pela função
        // Passamos junto o indice.id para poder excluir o cliente
        corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome, indice.id));
    })
);