// https://imgur.com/w8B60o8 exemplo do professor de como ele fez.

const h1 = container.querySelector('h1')
// elementos
const elements = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2 ', },
    { tag: 'footer', texto: 'Frase 3',},
    { tag: 'section', texto: 'Frase 4' }
]

// elementos para escrever no documento
for (let i = 0; i < elements.length; i++) {
    // cria um elemento com o parametro do array, e do objeto
    const node = document.createElement(elements[i].tag)
    // cria um textNode baseado no array de objetos texto
    const textNode =  document.createTextNode(elements[i].texto);
    // junta os dois de cima na var node.
    node.appendChild(textNode);
    // "escreve" no documento
    document.querySelector('.container').appendChild(node)
}

