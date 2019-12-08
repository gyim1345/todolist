

readCurrentList = () => {
    
    let calledarray = localStorage.getItem('savedarray');
    let array = JSON.parse(calledarray);
    console.log(array);

    let listcompleted = document.querySelector('.completed-todo-list');
    array.forEach(i => {
        console.log(i);
        console.log(i.value);
        
        listcompleted.insertAdjacentHTML('beforeend', `
            <li class = 'todo-completed'>                    
                <span>${i}</span>              
            </li>
        `)});



}



// chrome.storage.local.set({key: value}, function() {
//     console.log('Value is set to ' + value);
//   });

//   chrome.storage.local.get(['key'], function(result) {
//     console.log('Value currently is ' + result.key);
//   });