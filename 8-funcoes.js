/*

const cliente = {
    nome: `João`,
    idade: 24,
    email: `j@j.com`,
    telefone:[`11555555587`,`1177774444`],
    liberacaoDeCompra function(valor){
        if (valor > this.limite){
            console.log(`Limite insuficiente`)
        }else{
            this.limite -= valor//limete - valor liberado
            console.log(`Compra realizada. Limte disponível: R$${this.limite}`)
        }
    }
}

//Vamos supor que o joão tem um limite de crédito que a empresa fornece para efetuar compras:
cliente.limite = 1000
    
console.log(cliente)//cliente com seu novo limite

*/
//----------------------------------------------------------------------------------------------
//Vamos criar uma função dentro de cliente para que todas as vezes que um cliente for 
//realizar uma compra o sistema verifica se existe limite de compra disponível para esse cliente.
const cliente = {
    nome: `João`,
    idade: 24,
    email: `j@j.com`,
    telefone:[`11555555587`,`1177774444`],
    limite:1000,
    
    liberacaoDeCompra: function(valor){
        if (valor > this.limite){
            console.log(`Limite insuficiente`)
        }else{
            this.limite -= valor//limite - valor liberado
            console.log(`Compra realizada. Limte disponível: R$${this.limite}`)
        }
    }
}

//Chamando a funcão com seu paramêtro (valor que o cliente quer comprar)
cliente.liberacaoDeCompra(1100)
