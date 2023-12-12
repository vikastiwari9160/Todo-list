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
        let del = document.createElement('button');
        del.setAttribute('onclick','done()');
        container.appendChild(li);
        li.innerHTML= task;
        del.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        // li.appendChild(h4);
        li.appendChild(del);
    }
    taskBox.value = '';
}

function done(){
    event.target.parentElement.parentElement.remove();
}

// addEventListener('click',)

// let del = document.getElementById("del");
// del?.addEventListener('click',function(e){console.log('clicked')});

// function clicked(){
//     alert('button clicked');
// }

// addEventListener("click", function (e) {
//     if(e.target.tagName === 'li'){
//         clicked(); 
//     }
// }); 

// if(e.target.tagName === 'span'){
//     console.log('eventlistner executed');
//     e.target.parentElement.remove();