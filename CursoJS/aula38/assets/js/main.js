const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const stylesBody = getComputedStyle(document.body);
const backgroundColorBody = stylesBody.backgroundColor
console.log(backgroundColorBody);


for (let i of ps) {
    i.style.backgroundColor = backgroundColorBody;
    i.style.color = 'white';
}


// solução que eu fiz
//for (let i of ps) {
//    i.innerHTML += `<style>
//    p {
//        background-color: ${backgroundColorBody};
//        color: white; 
//    }
//    </style>`
//}