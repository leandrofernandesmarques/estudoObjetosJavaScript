const cliente = {
    nome: `João`,
    idade: 24,
    email: `j@j.com`,
    //telefone:`11555555587`
}
//Vamos imaginar que nosso cliente tem 2 telefones. Poderiamos inserir tel1 e tel2 mas podemos
//acessar por lista:
cliente.telefone = [`11555558888`,`11444447777`]
console.log(cliente)
//Legal, temos os 2 telefones em uma array, mas como acessar? da mesma forma
console.log(cliente.telefone)
//Conseguimos pegar o o Array completo, mas as vezes precisamos pegar individual.
//Para fazer isso basta manipular a array como já sabemos.
console.log(cliente.telefone[0])
console.log(cliente.telefone[1])
