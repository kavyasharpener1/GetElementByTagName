//GETELEMENTBYCLASSNAME
var items = document.getElementsByClassName('list-group-item');
items[2].textContent = 'Hello';


//GETELEMENTBYTAGNAME
var listitems = document.getElementsByTagName('li');
console.log(listitems[4].textContent)
listitems[4].textContent='New Item';

//QUERYSELECTOR
var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green';
