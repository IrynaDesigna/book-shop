;(function () {
	"use strict";
	const main = document.querySelector('main');
	const ul = document.createElement('ul');
	const makeAnOrder = document.createElement('a');

	const fragment = new DocumentFragment();

	fetch('../books.json') //path to the file with json data
        .then(response => {
            return response.json();
        })
        .then(data => {
						let orderList = [];

						if(localStorage.length > 0) {

							for (let i = 0; i < data.length; i++) {
								if (localStorage.hasOwnProperty(i)) {
									orderList.push({
										'bookTitle': data[i].title,
										'bookAuthor': data[i].author,
										'bookPrice': '$' + data[i].price,
										'bookNumber': [i]
									});
								}
							}
							console.log(orderList);

							for (let book in orderList) {
								const li = document.createElement('li');
								const bookAuthor = document.createElement('h5');
						    const bookTitle = document.createElement('h3');
						    const bookPrice = document.createElement('h4');
								const removeBook = document.createElement('div');
								const bookNumber = document.createElement('div');


								fragment.append(li);
								li.classList.add('order-item');
						    li.appendChild(bookTitle);
								bookTitle.innerText = orderList[book].bookTitle;

								li.appendChild(bookAuthor);
								bookAuthor.innerText = orderList[book].bookAuthor;

								li.appendChild(bookPrice);
								bookPrice.innerText = orderList[book].bookPrice;

								li.appendChild(removeBook);
								removeBook.innerHTML = 'Remove book ' + '<i class="fa-solid fa-trash-can"></i>';

								li.appendChild(bookNumber);
								bookNumber.classList.add('hidden-book-number');
								bookNumber.innerText = orderList[book].bookNumber;

							}

							main.appendChild(ul);
						  ul.append(fragment);
						  ul.classList.add('order-list');

						} else {
							main.appendChild(makeAnOrder);
							makeAnOrder.setAttribute('href','../main/');
							makeAnOrder.innerText = 'You can order books here';
							makeAnOrder.classList.add('books-list-link');
						}
        });

})();
