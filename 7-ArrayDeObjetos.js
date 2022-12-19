const cliente = {
    nome: `João`,
    idade: 24,
    email: `j@j.com`,
    telefone:[`11555555587`,`1177774444`]
}
//Supondo que queiramos armazenar 2 endereços para o cliente. Podemos utilizar uma Array também
//E o bacana é que com isso ganhamos todos os metodos de arrays para lidar com os objetos
//Pra isso basta envolver nossos objetos em colchetes

cliente.enderecos = [{
    logradouro: `Rua sem fim`,
    numero: `234`,
    apartamento: true,
    complemento: `Ap 000`
}] //A partir daqui temos um array com o objeto na primeira posição (índice 0)
//Agora vamos criar um novo endereçõ utilizano o metodo push (metodo de array)
cliente.enderecos.push({
    logradouro: `Rua dos Rueiros`,
    numero:`1 milhão`,
    apartamento: false
})
console.log(cliente)
console.log(``)
//Mas qual é a vatagem desse negócio? Usar metodos de arrays, muito poderoso.
//Vamos usar o metodo filter para filtrar apenas apartamentos.

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
)
console.log(`Listando somente apartamentos:`)
console.log(listaApenasApartamentos)
// Para relatórios é uma boa :)
