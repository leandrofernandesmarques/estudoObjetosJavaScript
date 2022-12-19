const cliente = {
    nome: `Leandro`,
    idade: 32,
    cpf: `222.333.444-55`,
    email: `l@l.com`
}

console.log(cliente)
console.log(`${cliente.nome} tem ${cliente.idade} anos.`)
console.log(`Os 3 primeiros números do CPF são ${cliente.cpf.substring(0,3)}`)