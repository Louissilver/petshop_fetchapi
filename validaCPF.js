function verificaCPF(cpf) {
    // Validamos cpfs que claramente são inválidos
    const cpfsInvalidos = [
        "00000000000",
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999"
    ]
    // Retornamos true ou false
    return cpfsInvalidos.indexOf(cpf) === -1;
}

// Fazemos a soma de todos os números dentro do CPF
function somaNumerosCPF(cpf, totalDeDigitos, peso) {
    let soma = 0;
    for (let i = 1; i <= totalDeDigitos; i++) {
        // Converte a substring (cada digito é uma substring) para int e faz a soma
        soma += parseInt(cpf.substring(i - 1, i)) * (peso - i);
    }
    return soma;
}

function verificaDigito(cpf, totalDeDigitos, peso, digitoDeVerificacao) {
    const soma = somaNumerosCPF(cpf, totalDeDigitos, peso);
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    return resto === digitoDeVerificacao;
}

function verificaPrimeiroDigito(cpf) {
    const peso = 11;
    const totalDeDigitosPrimeiraParte = 9;
    const digitoDeVerificacao = parseInt(cpf.substring(9, 10));

    return verificaDigito(cpf, totalDeDigitosPrimeiraParte, peso, digitoDeVerificacao);
}

function verificaSegundoDigito(cpf) {
    const peso = 12;
    const totalDeDigitosSegundaParte = 10;
    const digitoDeVerificacao = parseInt(cpf.substring(10, 11));

    return verificaDigito(cpf, totalDeDigitosSegundaParte, peso, digitoDeVerificacao);
}

// Se todos forem true o cpf é válido
function validaCPF(cpf){
    return(
        verificaPrimeiroDigito(cpf)&&
        verificaSegundoDigito(cpf)&&
        verificaCPF(cpf)
    )
}