const clientes = require ("./13-clientes.json")
//Vamos supor agora que precisemos ordenar os registros por nome em ordem alfabética:
// function ordenar(lista, chave){
//     const resultado = lista.sort((a,b)=> {
//         if (a[chave] < b[chave]){
//             return -1//parametro da função (vide documentação)
//         }
//         if(a[chave] > b[chave]){
//             return 1
//         }else{
//             return 0
//         }
//     })
// return resultado
// }
// console.log("")
// console.log(`Ordenação Alfabética por nome`)
// const nomeEmOrdemAlfabetica = ordenar(clientes,`nome`)
// console.log(nomeEmOrdemAlfabetica)
//----------------------------------------------------------------------------
//Inverso
// console.log("")
// console.log(`Ordenando inverso: `)
// console.log(nomeEmOrdemAlfabetica.reverse())
//--------------------------------------------------------------------------
console.log("")
console.log(`Outra forma de ordenar inverso: `)
function ordenar(lista, chave, ordem = "crescente") {
    const resultado = lista.sort((a, b) => {
      if (a[chave] < b[chave]) {
        return -1;
      }
      if (a[chave] > b[chave]) {
        return 1;
      }
      return 0;
    });
  
    if (ordem !== "crescente") {
      resultado.reverse();
    }
  
    return resultado;
  }
const ordenado = ordenar(clientes,`nome`,`decrescente`)

console.log(ordenado)
//--------------------------------------------------------------------------