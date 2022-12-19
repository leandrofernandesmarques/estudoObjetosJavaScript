const cliente = {
    nome: `Leandro`,
    idade: 32,
    cpf: `222.333.444-55`,
    email: `l@l.com`
}

console.log(cliente)
console.log(`${cliente[`nome`]} tem ${cliente.idade} anos.`)//Acessando com conchetes
console.log(`Os 3 primeiros números do CPF são ${cliente.cpf.substring(0,3)}`)
console.log(``)
//---------------------------------------------------------------------------------------

/*//Podemos usar características das Arrays para varrer a lista:
//Vamos supor que só tenhamos acesso as chaves:
const chaves = [`nome`,`idade`,`cpf`, `email`]

chaves.forEach((chave) => {//Arrow function para descobrir os valores das chaves acima
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
})
console.log(``)
*/
//-------------------------------------------------------------------------------------------
//Vamos tentar uma chave que não existe, Ex não temos a propriedade altura
const chaves = [`nome`,`idade`,`cpf`, `email`,`altura`]

chaves.forEach((chave) => {//Arrow function para descobrir os valores das chaves acima
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
})
//Percebemos que tivemos como retorno um Undefined (Indefinda), não quebra e não gera erro.




