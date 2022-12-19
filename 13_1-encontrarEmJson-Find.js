const clientes = require ("./13-clientes.json")
//Vamos lebrar aqui que estamos lidando com um array de objetos
//Vamos buscar em lista, uma chave e valor. (definiremos tudo abaixo)
function encontrar(lista, chave, valor){
    //return lista.find((item) => item[chave] === valor) //por sorte arrays tem o metodo find
    return lista.find((item) => item[chave].includes(valor))
}//=== não vai dar certo, porque temos array com 2 itens
const buscaPorNome = encontrar(clientes, `nome`, `Kirby`)

console.log(buscaPorNome)

//Interessante, esse código buscou o objeto todo e só fornecemos a chave e valor
//Vamos ver agora por telefone:
const buscaPorTelefone = encontrar(clientes, `telefone`,`1918820860`)
console.log(buscaPorTelefone)
//Tomamos um undefined. Estranho fizemos a mesma coisa! 
//Neste caso o que está atrapalhando é o === (identico), lá na const encontrar 
//uma array com 2 números é diferente de um unico número.
//vamos trocar para includes que vai dar bom.


