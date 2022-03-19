const ePaisagem =  (h, v) => {
    // Se remover o operador ternário, ele irá retornar True ou False. Mas não a mensagem, e não checka imagem quadrada. 
    return console.log(h > v ? `É paisagem` : `Não é paisagem.`)
}

ePaisagem(720,1280);