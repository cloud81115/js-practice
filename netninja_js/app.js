// var titles = document.getElementsByClassName('title');



// Array.from(titles).forEach(function(item){
// 	console.log(item);
// })


// var books = document.querySelectorAll('#book-list li .name')
// // console.log(books)

// Array.from(books).forEach(function(book){
// 	book.textContent += '(test)';
// });

// const bookList = document.querySelector('#book-list');
// // bookList.innerHTML = '<h2>Books and more books...</h2>';
// bookList.innerHTML += '<p>hello hahaha</p>'

// const banner = document.querySelector('#page-banner');
// console.log('#page-banner node type is:',banner.nodeType);
// console.log('#page-banner node name is:',banner.nodeName);
// console.log('#page-banner node has child nodes:',banner.hasChildNodes());

// const clonedBanner = banner.cloneNode(false);
// console.log(clonedBanner);

// const bookList = document.querySelector('#book-list');
// console.log('the parent node is:', bookList.parentNode);
// console.log('the parent element is:', bookList.parentElement.parentElement);
// console.log(bookList.children);

// const bookList = document.querySelector('#book-list');
// console.log('book-list next sibling is:', bookList.nextSibling);
// console.log('book-list next sibling is:', bookList.nextElementSibling);

// console.log('book-list previous sibling is:', bookList.previousSibling);
// console.log('book-list previous sibling is:', bookList.previousElementSibling);

// bookList.previousElementSibling.querySelector('p').innerHTML+='<br><p>this is cool!</p>'

// var btns = document.querySelectorAll('#book-list .delete');
// Array.from(btns).forEach(function(btn){
// 	btn.addEventListener('click', function(e){
// 		const li = e.target.parentElement;
// 		li.parentNode.removeChild(li)
// 	});
// });

// const link = document.querySelector('#page-banner a');
// link.addEventListener('click', function(e){
// 	e.preventDefault();
// 	console.log('navigation to',e.target.textContent,'was prevented');
// })

const list = document.querySelector('#book-list ul');
list.addEventListener('click',function(e){
	if(e.target.className == 'delete'){
		const li = e.target.parentElement;
		list.removeChild(li);
	}
})

// add book-list
const addForm = document.forms['add-book'];

addForm.addEventListener('submit',function(e){
	e.preventDefault();
	const value = addForm.querySelector('input[type="text"]').value;

// create elements
const li = document.createElement('li');
const bookName = document.createElement('span');
const deleteBtn = document.createElement('span');


// add content
deleteBtn.textContent = 'delete';
bookName.textContent = value;

// add classes
bookName.classList.add('name');
deleteBtn.classList.add('delete');


// append to document
li.appendChild(bookName);
li.appendChild(deleteBtn);
list.appendChild(li);

})


