let todoList=[
  {
    item:'Buy bike',
    dueDate:'4/10/2025'
  },
  {
    item: 'go to collage',
    dueDate:'4/10/2025'
  },
  {
    item: 'have fun',
    dueDate:'4/10/2025'
  }
];

function addTodo(){
  let inputElement=document.querySelector('#todo-input');
  let dateItem=document.querySelector('#todo-date');
  let todoItem=inputElement.value;
  let todoDate=dateItem.value;
  todoList.push({item:todoItem,dueDate:todoDate});
  inputElement.value="";
  dateItem.value='';
  displayItems();
}
  function displayItems(){
  let containerElement =document.querySelector('.todo-container');

  let newHtml='';
  for(let i=0; i < todoList.length; i++){
    let{item,dueDate}=todoList[i];
    newHtml+=`
    <span>${item} </span>
    <span>${dueDate} </span>
    <button class='btn-delete' onclick="todoList.splice(${i},1);
    displayItems();">Delete </button>
    `;
  }
  containerElement.innerHTML=newHtml;
  }
