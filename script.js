
// getting html elements
const input = document.querySelector('.list__input');
const addBtn = document.querySelector('.list__btn');
const myTaskList  = document.querySelector('.list__tasks');



// event listeners
addBtn.addEventListener('click',()=> {
	
	if (input.value !== '') {
		// create the list item 
		const listItem = document.createElement('LI');
		listItem.classList.add('list__item');
		listItem.innerHTML = input.value;
	
		myTaskList.appendChild(listItem);
	
		// clear the input
		input.value = '';
	
		// line through the list item 
		listItem.addEventListener('click',()=> {
			listItem.style.textDecoration = '1px #9d0208 line-through';
		});
		
		// remove the list item
		listItem.addEventListener('dblclick',()=> {
			myTaskList.removeChild(listItem);
		});
	}
	else {
		alert('please enter a task!');
	}

});






	





