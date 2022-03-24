function random(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
// função declarada para receber callback.
function f1(callback) {
    setTimeout(() => {
        console.log('f1');
        if (callback) callback();
    }, random());
}

function f2(callback) {
    setTimeout(() => {
        if (callback) callback();
        console.log('f2');
    }, random());
}

function f3(callback) {
    setTimeout(() => {
        if (callback) callback();
        console.log('f3');
    }, random());
}

// Função de callback em ação.
// f1(function () {
    // f2(function () {
        // f3(function () {
            // console.log('Hello world');
        // });
    // });
// });
// 
// 


// Jeito mais "simples", de se fazer callback.

f1(f1Callback);

function f1Callback () {
    f2(f2Callback);
}

function f2Callback () {
    f3(f3Callback);
}

function f3Callback () {
    console.log("Hello World");
}
