const TodoList = [{
  name:'Todo name',
  dueDate: '23-09-2024'
}];

renderTodoList()

function renderTodoList() {

let todoListHTML = '';

  for (let i = 0; i < TodoList.length; i++) {
    const todoObject = TodoList[i];
    //const name = todoObject.name;
    //const doDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        TodoList.splice(${i}, 1);
        renderTodoList()
      " class="delete-button">Delete</button>
    `;
    todoListHTML += html
  }

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dueDateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dueDateInputElement.value;
    
    TodoList.push({
      name,
      dueDate
    });
    console.log(TodoList)

    inputElement.value = '';

    renderTodoList();
}