const cliente = {
    nome: `João`,
    idade: 24,
    email: `j@j.com`,
    telefone:[`11555555587`,`1177774444`]
}
cliente.enderecos = {
    logradouro: `Rua sem fim`,
    numero: `234`,
    apartamento: true,
    complemento: `Ap 000`
}

//Supondo que precisemos criar um relatório com os dados de cliente. Como podemos fazer?
//Existe uma palara reservada do JS que percorre isso para nós o " for in":
console.log(``)
console.log(`Varrendo dados com "For in"`)
for (let chave in cliente){
    //console.log(chave)//Aqui pegamos todas as chaves de nosso objeto cliente
    //console.log(cliente[chave])//Neste caso conseguimos puxar somente os valores das chaves
    console.log(``)
    console.log(`A Chave ${chave} tem o valor: ${cliente[chave]}`)
   
    
}
//Mas peraí, a chave endereço aparceu um valor meio estranho aqui[object][object]. Isso acontece mesmo no JS
//E como resolver isso? Nem o professor nos explicou nessa aula. Mas podemos acessar também por tipo
for(let chave in cliente){
    let tipo = typeof cliente[chave]
    if (tipo !== `object` && tipo !== "function"){
        console.log(chave,cliente[chave])
    }
    //Mas nesse caso nem aparece o endereço, vai entender.
}
//Pesquisando encontrei uma forma que podemos varre o objeto todo com metodos reservados do JS
console.log(``)
console.log(`A chave ${Object.keys(cliente)} tem o valor: ${Object.values(cliente)}`)
