const cliente = {
    nome: `João`,
    idade: 24,
    email: `j@j.com`,
    telefone:[`11555555587`,`1177774444`]
}
//Vamos adicionar uma nova propriedade(atributo) com o endereço do nosso cliente:

cliente.endereco = {
    logradouro: `Rua sem fim`,
    numero: `234`,
    apartamento: true,
    complemento: `Ap 000`
}
console.log(cliente)
console.log(``)
//endereco agora é um objeto, que está dentro (aninhado) dentro do objeto cliente.
//Ma como acessar os itens desse objeto? Como já aprendemos pelo objeto ou pelos colchetes:
console.log(`cliente.endereco me retorna o objeto endereço:${cliente.endereco}`)
console.log(cliente.endereco)//não sei por que raios não funcionou a template string
console.log(``)

//Vamos acessar pelos colchetes:
console.log (`Acessando por colchetes`)
console.log(`${cliente[`endereco`]}`)//Também não funcionou a template string :(
console.log(cliente[`endereco`])
