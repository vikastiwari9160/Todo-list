let taskBox = document.getElementById('Task-input');
let container = document.getElementById("tasks-container");
function addTask() {
    let task = taskBox.value;
    if (task===''){
        alert("Please enter a task");
    }
    else{
        let li = document.createElement('li');
        // let h4 = document.createElement('h4');
        let del = document.createElement('span');
        container.appendChild(li);
        li.innerHTML= task;
        del.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        // li.appendChild(h4);
        li.appendChild(del);
    }
    taskBox.value = '';
}
function clicked(){
    alert('button clicked');
}

addEventListener("click", function (e) {
    if(e.target.tagName === 'li'){
        clicked(); 
    }
}); 

// if(e.target.tagName === 'span'){
//     console.log('eventlistner executed');
//     e.target.parentElement.remove();