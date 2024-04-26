const inputBox=document.getElementById('inputBox');
const listContainer=document.getElementById('listContainer');
const buttonAdd=document.getElementById('buttonAdd');
function addTask(){
    if(inputBox.value==''){
        alert('Please enter a task!');
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);

        //Создание креста, который будет выполнять выполненные задачи.
        let span=document.createElement('span');
        span.innerHTML='\u00d7';
        li.appendChild(span);
    }
    inputBox.value=''; //Для того, чтобы значение поля ввода оставалось пустым после ввода какой-либо задачи.
    saveData();
}
buttonAdd.addEventListener('click',addTask);

listContainer.addEventListener('click',function(e){
    if(e.target.tagName=='LI'){
        e.target.classList.toggle('checked');//Если клик был на элементе `<li>`, то переключается класс `checked`.
        saveData();
    }
    else if(e.target.tagName=='SPAN'){
        e.target.parentElement.remove();// Если клик был на элементе `<span>`, то родительский элемент этого `<span>` удаляется.
        saveData();
    }
});

document.getElementById('buttonDelete').addEventListener('click',function(){
        const listItems=listContainer.querySelectorAll('li');
        for(let i=0; i<listItems.length; i++){
            if(listItems[i].classList.contains('checked')){
                listContainer.removeChild(listItems[i]);
                saveData();
            }
        }
    });

function saveData(){
    localStorage.setItem('data',listContainer.innerHTML);
}//Эта функция используется для сохранения данных в локальное хранилище (localStorage). 

function showTask(){
    listContainer.innerHTML=localStorage.getItem('data');
}//Эта функция предназначена для отображения задач, сохраненных в локальном хранилище

showTask();