const table = document.getElementById('table');
const loadingMessage = document.getElementById('loading-message');
const countTask = document.getElementById('count-tasks');

function updateCountTasks() {
    const allTasks = getTasks();
    countTask.innerHTML = allTasks.length;
} 

function fillTable() {
    const allTasks = getTasks();
    allTasks.forEach(addTasks);

    if(allTasks.lenght === 0) {
        loadingMessage.innerHTML = "Você não tem nenhumta tarefa!";
    }else{
        loadingMessage.innerHTML = "";
    }

    updateCountTasks();
}

function addTasks(tasks) {
    const tr = document.createElement('tr');
    tr.innerHTML = innerHTMLTasks(tasks);

    table.appendChild(tr);
}

function innerHTMLTasks(tasks){
  const html = `
    <td>${tasks.description}</td>
    <td>${tasks.date}</td>
    <td>
        <a href="#" onclick="removeTask(${tasks.id})">
            <i class="fas fa-trash"></i>
        </a>
    </td>
  `   

  return html;
}

function removeTask(id) {
    const allTask = getTasks();
    const tasksFiltered = allTask.filter(tasks => tasks.id !== id);

    setTasks(tasksFiltered)
    reload();
}

function reload() {
    table.innerHTML= '';
    fillTable();
}