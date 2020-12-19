// GET
const listarClientes = () => {
    return fetch('http://localhost:4000/clientes')
        .then(resposta => {
            return resposta.json();
        })
        .then(json => {
            return json;
        });
}

// POST
const cadastrarClientes = (nome, cpf) => {
    // Conteúdo a ser passado é transformado de um JSON para string
    const json = JSON.stringify({
        nome: nome,
        cpf: cpf
    })
    // URL
    return fetch('http://localhost:4000/clientes/cliente', {
            // Método (POST, PUT, DELETE), por padrão o método do fetch é o GET, 
            // por isso não precisamos informar quando for GET
            method: 'POST',
            // Formato do conteúdo a ser passado
            headers: {
                'Content-type': 'application/json'
            },
            // Conteúdo a ser passado
            body: json
        })
        .then(response => {
            return response.body;
        })
}

// DELETE
const deletarCliente = id => {
    // Deleta o cliente de acordo com o id passado na url
    return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
        method: 'DELETE'
    })
}

// Traz os dados do cliente ao editar
const detalhaCliente = id => {
    return fetch(`http://localhost:4000/clientes/cliente/${id}`)
        .then(resposta => {
            return resposta.json()
        })
}

//PUT
const editaCliente = (id, cpf, nome) => {
    // Conteúdo a ser passado é transformado de um JSON para string
    const json = JSON.stringify({
        nome: nome,
        cpf: cpf
    })
    // URL
    return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
        // Método PUT para alterar 
        method: 'PUT',
        // Formato do conteúdo a ser passado
        headers: {
            'Content-type': 'application/json'
        },
        // Conteúdo a ser passado
        body: json
    })
}