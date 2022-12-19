const cliente = {
    nome: `João`,
    idade: 24,
    email: `j@j.com`,
    telefone:[`11555555587`,`1177774444`]
}
cliente.endereco = [
    {
    logradouro: `Rua sem fim`,
    numero: `234`,
    apartamento: true,
    complemento: `Ap 000`
}
]
//Vamos supor que temos uma função jé em funcionamento(não podemos mecher)
// e precisamos entrar em contato com os clientes:

function ligarParaCliente (telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`)
    console.log(`Ligando para ${telefoneResidencial}`)
}
//Vamos ligar para o cliente nos 2 números:
ligarParaCliente(cliente.telefone[0],cliente.telefone[1])
console.log(``)
//Deu certo, mas dá pra melhorar com o desestructuring:
ligarParaCliente(...cliente.telefone)
//Deu certo. Mas que raios foi feito aqui em cima? Ele desestruturou
//colocou em uma Array e capturou os dados contidos de maneira mais fácil

//Ok agora vamos imaginar que tenhamos que criar etiquetas para enviar
//encomendas para o cliente:
console.log(``)
//--------------------------------------------------------------------
/*
const encomenda = {
    destinatario: cliente.nome,
    endereco: cliente.endereco[0]
}
console.log(encomenda)
//pegou mas pegou meio estranho o endereço esta como objeto, dentro de 
//outro objeto não é isso o que queremos. Precisamos de dados limpos.
*/
//------------------------------------------------------------------------
/*
//podemo fazer na unha:
const encomenda={
    destinatario: cliente.nome,
    logradouro: cliente.endereco[0].logradouro,
    numero: cliente.endereco[0].numero
}
console.log(encomenda)
//Demora uns 500 anos mas também funciona, mas para muitos clientes não rola.
*/
//--------------------------------------------------------------------
//Já com desestructuring fica bom:
console.log(`Etiqueta para encomenda:`)
const encomenda = {
    destinatario: cliente.nome,
    ...cliente.endereco[0]//...Spread operator
}
console.log(encomenda)

//Desestruturou o objeto e varreu os dados do endereço [0]. Deu bonzão.
//IMPORTANTE: O spread operator gera bastante processamento. Consuma com moderação.
//IMPORTANTE: Quando temos muitos objetos com chaves iguais o spread operator
//substitui as chaves e valores se atente nisso.