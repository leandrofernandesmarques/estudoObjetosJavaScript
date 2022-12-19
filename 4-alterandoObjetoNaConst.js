const pessoa = {
    nome: `Leandro`,
    profissão: `Empresário`
}

console.log (pessoa.nome)//Leandro

console.log(pessoa.telefone)// Undefined

pessoa.telefone = `(11) 944557766`//add telefone na const pessoa(sim isso pode)

console.log(pessoa.telefone)//Agora exibe o telefone

pessoa.nome = `Leandro Marques`//Nome agora é Leandro Marque(sim isso tb pode)

console.log(pessoa)//const pessoa atualizada c/ todos os novos dados

const novaPessoa = {nome: `Pedro`}//Toma erro de alteração de const(constante)
pessoa = novaPessoa 

