// Pegamos o elemento <form>
const formCadastroCliente = document.querySelector('[data-form]');

// Adicionamos uma escuta de evento,
// nesse caso o evento é o envio dos dados do formulário
formCadastroCliente.addEventListener('submit', event => {
    // Evitamos o padrão do evento, que é reiniciar a página ao enviar
    event.preventDefault();

    // Pegamos os elementos dos <input> onde tem nome e cpf
    const nome = event.target.querySelector('[data-nome]');
    const cpf = event.target.querySelector('[data-cpf]');

    // Verificamos se o CPF é valido
    if (validaCPF(cpf.value))
        // Chamamos a função de cadastro de clientes
        // passando como parâmetros os valores dos elementos
        cadastrarClientes(nome.value, cpf.value)
    else alert('CPF inválido')

    // Limpamos o formulário passando um valor vazio para os campos
    nome.value = '';
    cpf.value = '';
    // Colocamos o foco direto no campo de cpf
    cpf.focus();
})