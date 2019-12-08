
let todolistarray = [];
let completedarray = [];


todofunction = (text) => {
    let todo = {
        text,
        checked: false,
        id: Date.now()
    }

    let today = new Date();
    let date = today.getDate();
    let month = today.getMonth()+1; //January is 0!
    let year = today.getFullYear();
    let hour = today.getHours();    
    let minute = today.getMinutes();
    let second = today.getSeconds();


    todolistarray.push(todo);
    
    

    let list = document.querySelector('.todo-list')
    list.insertAdjacentHTML('beforeend', `
        <li class = 'todoclass' id = '${todo.id}'>
            <input id = '${todo.id}' type = 'checkbox' class = 'checkboxclass' />
            <span>${todo.text}</span>
            <button class = 'deletebuttonclass'>
                <span>\u00d7</span>
            </button>
            <span>${year}/${month}/${date}//${hour}:${minute}:${second}</span>
        </li>
    `);
}

const button = document.querySelector('.buttonclass');
const input = document.querySelector('.textclass');
button.addEventListener('click', event => {
    if (event.target.classList.contains('buttonclass')) {
        todofunction(input.value);
        input.value = '';
        input.focus();

    }
});

const buttond = document.querySelector('.deleteselectedclass');
buttond.addEventListener('click', event => {
    if (event.target.classList.contains('deleteselectedclass')) {
        deleteselectedcheckelements();
    }
});

const clickeditem = document.querySelector('.todo-list');
clickeditem.addEventListener('click', event => {
    if (event.target.classList.contains('deletebuttonclass')) {
        let removethisasd = event.target.parentElement.id;
        deletetodo(removethisasd);
    }
    if (event.target.classList.contains('checkboxclass')) {
        let check123 = event.target.parentElement.id;
        checkedtodo(check123);
    }
})

deletetodo = (removethisasd) => {
    let thisone = document.querySelector(`[id = '${removethisasd}']`);
    let findthisone = todolistarray.filter(findit => findit.id == removethisasd);
    console.log(findthisone);
    console.log(thisone);
    thisone.remove();
}

checkedtodo = (check123) => {
    // console.log(check123);
    // let findthisone = todolistarray.filter(findit => findit.id == check123);
    // console.log(findthisone);
    // todolistarray.find(obj => obj.id == check123).checked =! todolistarray.find(obj => obj.id == check123).checked;
    if (todolistarray.find(obj => obj.id == check123).checked == false) {
        todolistarray.find(obj => obj.id == check123).checked = true;
    }
    else if (todolistarray.find(obj => obj.id == check123).checked == true) {
        todolistarray.find(obj => obj.id == check123).checked = false;
    }
    // console.log(todolistarray.find(obj => obj.id == check123).checked);
    // findthisone[0].checked =! findthisone[0].checked;
    // console.log(findthisone[0].checked);
}

deleteselectedcheckelements = () => {
    todolistarray.filter(i => i.checked === true)
        .forEach(i => {
            document.querySelector(`[id = '${i.id}']`).remove();
            todolistarray = todolistarray.filter(e => e.id !== i.id);
        });
}

tododeleteall = () => {
    document.querySelectorAll('.todoclass').forEach(n => n.remove());
    todolistarray = [];
}

selectcomplete = () => {
    let listcompleted = document.querySelector('.completed-todo-list');

    let today = new Date();
    let date = today.getDate();
    let month = today.getMonth()+1; //January is 0!
    let year = today.getFullYear();
    let hour = today.getHours();    
    let minute = today.getMinutes();
    let second = today.getSeconds();

    todolistarray.filter(i => i.checked === true)
        .forEach(i => {
            listcompleted.insertAdjacentHTML('beforeend', `
                <li class = 'todo-completed'>                    
                    <span id = 'spantext'>${i.text}</span>
                    <span>${year}/${month}/${date}//${hour}:${minute}:${second}</span>                
                </li>
            `);
            document.querySelector(`[id = '${i.id}']`).remove();
            todolistarray = todolistarray.filter(e => e.id !== i.id);
        });

}


clearcompleted = () =>{
    document.querySelectorAll('.todo-completed').forEach(n => n.remove());
}

clearall = () =>{
    tododeleteall();
    clearcompleted();
}



hideIt = () => {
    let scopeofhide = document.getElementById("myDIV");
    if (scopeofhide.style.display === "none") {
      scopeofhide.style.display = "block";
    } else {
      scopeofhide.style.display = "none";
    }
  }

saveCurrentList = () =>{
    let savedarray = [];
    let completedarray = document.querySelectorAll('.todo-completed')
    completedarray.forEach(element =>console.log(element));
    completedarray.forEach(element => savedarray.push(element.text));
    // console.log(savedarray[0]);
    console.log(completedarray.spantext.id);
    localStorage.setItem('savedarray', JSON.stringify(savedarray));
    // document.write(JSON.stringify(todolistarray));



    // let savedarray = [];
    // todolistarray.forEach(element => savedarray.push(element.text));
    // console.log(savedarray[0]);
    // for (let i =0; i<savedarray.length; i++){
    //     console.log(savedarray[i]);
    
    // localStorage.setItem('savedarray', savedarray[i]);
    // // document.write(JSON.stringify(todolistarray));
}


