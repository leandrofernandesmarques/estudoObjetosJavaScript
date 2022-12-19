//Vamos criar aqui uma interação com o arquivo: trabalhandoComJson:
//Mas para que serve ess json? Normalmente para quando você tem um objeto 
//ou arquivo de configurção que se precise usar em outro lugar.
//Também pode-se transformar o json em uma string para enviar

const dados = require("./12-trabalhandoComJson.json")
console.log(dados)

// Com o require temos acesso ao objeto do arquivo json
//Vamos ver se é objeto mesmo:
console.log(typeof dados)
console.log("")

//"Stringficando"
const dadosEmString = JSON.stringify(dados)
console.log(`Agora o objeto virou String:`)
console.log(dadosEmString)
console.log(typeof dadosEmString)//agora é string
//Mas qual é a vantagem? Transmitir informação em string é bem mais fácil
//que transmiir em js.

//Vamos transformar string novamente em objeto
const stringEmObjeto = JSON.parse(dadosEmString)
console.log(`Agora a string virou objeto novamente:`)
console.log(stringEmObjeto)

