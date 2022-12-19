const cliente = {
    nome: `João`,
    idade: 24,
    email: `j@j.com`,
    telefone:[`11555555587`,`1177774444`]
}
// cliente.endereco = {
//     logradouro: `Rua sem fim`,
//     numero: `234`,
//     apartamento: true,
//     complemento: `Ap 000`
// }

//Vamos supor aqui que precisamos validar se o cliente tem um endereço para entrega de compra
//Vamos utilizar um metodo que retorna nossas chaves:
const chavesDoObjeto = Object.keys(cliente)//Não podemos confiar na ordem (objeto não tem ordenamento)

console.log(chavesDoObjeto)

if(!chavesDoObjeto.includes(`endereco`)){//se chave do objeto NÂO incluir endereço:
    console.error(`Não possui endereço cadastrado.`)

}
