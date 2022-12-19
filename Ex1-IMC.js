const paciente = {//objeto paciente
    nome: "James T.",//propriedades e valores do objeto paciente
    idade:30,
    email: "jt@email.com",
    identicacao: "Alpha01259859",
    funcao:"comandante",
    peso:80.1,
    altura:1.80,
    calcularIMC:function(){
          return (this.peso/(Math.pow(this.altura,2)))//Math.pow = base elevado ao expoente (essa altura elevado á 2)
    },
    nomeCompleto:function(){
      console.log(this.nome)
    }
   }
   //------------------------------------------------------------------------------
   //Essa confusão abaixo retorna propriedade ===> valor se for objeto (pelo que entendi)
   let dados = "";//nova variável "dados"
   for (let info in paciente) {//para info(nova variável em objeto paciente)
   if (typeof paciente[info] === "object" || typeof paciente[info] === "function") {//se o tipo for objeto ou função
     continue//vá em frente baby
   } else {
    //caso contrário dados recebe dados + info -> info de paciente
    dados += `${info} ==> ${paciente[info]} 
     `}
   };
   console.log(dados)
   console.log(``)
//---------------------------------------------------------------------------------
   //Agora vamos pegar somente as propriedades:
for (let info in paciente) {
    console.log(info)
   
   //for...in naturalmnte só traz as propriedades, todavia podemos usar 
   //os colchetes para pegar o valor:
   //console.log(`${info} do paciente = ${paciente[info]} `)

  };
   