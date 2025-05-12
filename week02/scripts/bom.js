const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');



const li = document.createElement('li');
const delButton = document.createElement('button');


li.textContent = input.value;
delButton.textContent = '❌';
delButton.ariaLabel = 'Delete Item';

li.append(delButton);
list.append(li);