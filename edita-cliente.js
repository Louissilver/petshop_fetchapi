// Salvamos na variável qual a URL que está sendo usada no browser
const pegaURL = new URL(window.location);
// Recuperamos o Id presente na URL
const id = pegaURL.searchParams.get('id');
// Pegamos os elementos <input> de CPF e Nome na página de edição
const inputCPF = document.querySelector('[data-cpf]');
const inputNome = document.querySelector('[data-nome]');

// Chamamos a função que irá preencher os campos com os dados do cliente
detalhaCliente(id)
    .then(dados => {
        inputCPF.value = dados[0].cpf;
        inputNome.value = dados[0].nome;
    })

// Salvamos o elemento <form> na variável

const mensagemSucesso = (mensagem) => {
    // Cria um elemento <div>
    const linha = document.createElement('div');
    // Gera o elemento <div> onde terá a mensagem de sucesso dentro
    const conteudoLinha = `<div class="alert alert-success" role="alert">${mensagem}</div>`;
    // Coloca os <td> dentro do <tr>
    linha.innerHTML = conteudoLinha;
    // Retorna o conteúdo da linha em HTML
    return linha
}

const mensagemErro = (mensagem) => {
    // Cria um elemento <div>
    const linha = document.createElement('div');
    // Gera o elemento <div> onde terá a mensagem de sucesso dentro
    const conteudoLinha = `<div class="alert alert-warning" role="alert">${mensagem}</div>`;
    // Coloca os <td> dentro do <tr>
    linha.innerHTML = conteudoLinha;
    // Retorna o conteúdo da linha em HTML
    return linha
}

const formEdicao = document.querySelector('[data-form]')

// Adicionamos um evento quando o formulário for enviado
formEdicao.addEventListener('submit', event => {
    // Evitamos o comportamento padrão
    event.preventDefault();

    // Validamos o CPF
    if (!validaCPF(inputCPF.value)) {
        alert('O CPF é inválido!');
        return;
    }
    // Editamos o cliente passando id, cpf e nome
    editaCliente(id, inputCPF.value, inputNome.value).then(resposta => {
        if (resposta.ok) {
            formEdicao.appendChild(mensagemSucesso('Cliente editado com sucesso!'));
        } else {
            formEdicao.appendChild(mensagemErro('Não foi possível editar os dados do cliente.'));
        }
    });

    // Limpamos o formulário passando um valor vazio para os campos
    inputNome.value = '';
    inputCPF.value = '';
    // Colocamos o foco direto no campo de cpf
    inputCPF.focus();
})