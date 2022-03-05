btn = document.querySelector('#btn');
todo = document.querySelector('input');
tasks = document.querySelector('#tasks');

btn.addEventListener('click', function(){
    text = todo.value
    if (text.length == 0){
        alert('please write down a todo');
    }
    else{
        tasks.innerHTML += `
        <div class = 'task'>
            <span id = 'taskname'>
                ${text}
            </span>
            <button class="delete">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>
     `;
    }

    var currentTask = document.querySelectorAll('.delete');
    for (i = 0; i < currentTask.length; i++){
        currentTask[i].addEventListener('click', function(){
            this.parentNode.remove();
            
        });
    }

    var task = document.querySelectorAll('.task');
    for (j = 0; j < task.length; j++){
        task[j].addEventListener('click', function(){
            this.classList.toggle('completed');
        });
    }

});
