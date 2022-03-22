// Variaveis para funcionar.
// pegando o input da tarefas
const inputNewTask = document.querySelector('.inputNewTask');
// input do botão
const btnAddTask = document.querySelector('.btnAddTask');
const tasks = document.querySelector('.tasks');

// Cria o <li> no HTML
function createLi () {
    const li = document.createElement('li');
    return li;
}

// Para funcionar o envior com a tecla ENTER
inputNewTask.addEventListener('keypress', function (e) {
    // checa se a tecla pressionada é Enter, para fazer a função do click.
    if (e.key === 'Enter') {
        // checa se o valor do input é vázio.
        if (!inputNewTask.value) return;
        createTask(inputNewTask.value);
    }   
})

// Função para criar o botão de apagar, ao lado do elemento LI referente.
function createButton(li) {
    li.innerHTML += ' '; 
    const btnClear = document.createElement('button');
    btnClear.innerText = 'Apagar';
  //  btnClear.classList.add('clear')
    // setar qualquer atribute para qualquer coisa elemento no HTML
    btnClear.setAttribute('class', 'clear')
    btnClear.setAttribute('title', 'Apagar essa tarefa')
    li.appendChild(btnClear); 
}

// Função principal de criar as tarefas.
function createTask (textInput) {
    const li = createLi();
    li.innerHTML = textInput;
    tasks.appendChild(li);
    clearInput();
    createButton(li);
    saveTask();
}

// Limpar a caixa de INPUT do HTML e foca nela novamente após digitar.
function clearInput () {
    inputNewTask.value = '';
    // cria o evento focus no input HTML, para assim que aperta enter, volta para o foco.
    inputNewTask.focus();
}

function saveTask() {
    const liTasks = tasks.querySelectorAll('li');
    const liTaskList = [];
    // a cada iteração do laço, pegar o valor do <li> e jogar para dentro de um array.
    for (let tasks of liTasks) {
        let tasksText = tasks.innerText;    
        // tira o    'apagar' que vem junto da <li>,   remove os espaços do <li>
        tasksText = tasksText.replace('Apagar', '').trim();
        // coloca os textos do <li> dentro do array
        liTaskList.push(tasksText);
        console.log(tasksText);
    }
    // Trasnforma o array da <li> em string de JSON.
    const tasksJSON = JSON.stringify(liTaskList);
    // Salva no armazenamento do navegador o JSON para ser recuperado.efa
    localStorage.setItem('tasks', tasksJSON);
     
}


function addTaskSaved () {
    // pega o valor do JSON guardado e joga em uma variavel.
    const tasks = localStorage.getItem('tasks')
    // Transforma de String JSON para Objeto JS novamente, voltando a ser um array e não um Strin de JSON.
    const liTaskList = JSON.parse(tasks)
    console.log(tasks);
    // Itera denovo colocando as tarefas salvas no HTML em <li>
    for (let tasks of liTaskList) {
        createTask(tasks)
    }
}
// chama a função de Adicionar as tarefas salvas no HTML

addTaskSaved();

// Adicionar um eventListener no documento para os botoões de Adicionar e de apagar.
document.addEventListener('click', function(e) {
    const el = e.target;
    if(el.classList.contains('btnAddTask')) {
        // se não tiver valor no i nput da tafera ele não envia. 
        if (!inputNewTask.value) return;
        createTask(inputNewTask.value);
    }
    if (el.classList.contains('clear')) {
        // remove o botão de apagar, com o parentElement();
        el.parentElement.remove();
        saveTask();
    }
});

