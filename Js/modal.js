const modal = document.getElementById('modal');
const alertElement = document.getElementById('alert');
const inputDescription = document.getElementById('description');
const inputDate = document.getElementById('date');
const btnCrateTask = document.getElementById('btn-create-task');

function createTask(e) {
    e.preventDefault();
    
    if(!inputDescription.value || !inputDate.value){
        alertElement.style.display ='block';
        closeAlert();
        return;
        
    }

    const newTask = {
    description: inputDescription.value,
    date: new Date(inputDate.value).toLocaleDateString('pt-br', { timeZone: 'UTC'}),
    id: Math.floor(Math.random() * 10000),
    }

    const allTasks = getTasks();

    setTasks([...allTasks, newTask])

    toggleModal();
    clearfields();
    reload();
}



function toggleModal() {
    modal.classList.toggle('modal-visible');
    clearfields()
}

function clearfields() {
    inputDate.value = '';
    inputDescription.value = '';
}

function closeAlert() {
    setTimeout(() => {
        alertElement.style.display ='none';
    }, 2500);
}

btnCrateTask.addEventListener('click', createTask)