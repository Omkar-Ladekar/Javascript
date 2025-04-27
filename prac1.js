// // // let todoList=['Buy Milk ','Go to college'];
// // // displayItems();


// // let todoList=['Buy Milk ','Go to college'];
// // displayItems();


// // function addTodo(){
// //   let inputElement=document.querySelector('#todo-input');
// //   let todoItem=inputElement.value;
// //   todoList.push(todoItem);
// //   inputElement.value='';

// //   displayItems();
// // }

// // function displayItems(){
// //   let containerElement=document.querySelector('#todo-container');
// //   let newHtml='';

  
// //   for (let i=0; i<todoList.length; i++){
// //     newHtml+=`
// //     <div>
// //     <span>${todoList[i]}</span>
// //     <button onclick="todoList.splice(${i},1);
// //     displayItems();">Delete</button>
// //       </div>
// //     ` ;  
// //   }

// //   containerElement.innerHTML=newHtml;
// // }
// let todoList=[];

// function addTodo(){
//   let inputElement=document.querySelector('#todo-input');
//   let todoItem=inputElement.value;
//     todoList.push(todoItem);

//     inputElement.value='';

//     displayItems();
// }
//     function displayItems(){
//          let displayElement=document.querySelector('todo-items');
//          displayElement.innerText='';
// for (let i=0; i<todoList.length; i++){
//   displayElement.innerText=displayElement.innerText + todoList[i];
// }

         

// }


// Function to add a task
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
      alert('Please enter a task!');
      return;
  }

  // Create a new list item for the task
  const li = document.createElement('li');

  // Create a text node for the task
  const textNode = document.createTextNode(taskText);
  li.appendChild(textNode);

  // Create a "Remove" button for the task
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.classList.add('remove');
  removeButton.onclick = () => li.remove(); // Remove task when clicked
  li.appendChild(removeButton);

  // Append the new task to the task list
  const taskList = document.getElementById('taskList');
  taskList.appendChild(li);

  // Clear the input field after adding the task
  taskInput.value = '';
}

// Allow pressing Enter to add task
document.getElementById('taskInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
      addTask();
  }
});

