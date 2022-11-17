;(function () {
	"use strict";

  const main = document.querySelector('.main');
  const ul = document.createElement('ul');
	const bag = document.createElement('div');
  const fragment = new DocumentFragment();

  // MAIN-CONTENT-BOOKS

  fetch('../books.json') //path to the file with json data
    .then(response => {
        return response.json();
    })
    .then(data => {
			for (const book of data) {
		    const li = document.createElement('li');
		    const book_ = document.createElement('div');
		    const bookCover = document.createElement('div');
		    const bookCoverImg = document.createElement('img');
		    const bookDescrCover = document.createElement('div');
		    const bookAuthor = document.createElement('h5');
		    const bookTitle = document.createElement('h3');
		    const bookPrice = document.createElement('h4');
		    const bookDescr = document.createElement('p');
		    const addBook = document.createElement('div');
		    const readMore = document.createElement('div');
		    const closeBookDescr = document.createElement('div');

		    fragment.append(li);
		    li.classList.add('book-container');
		    li.appendChild(book_);
		    book_.classList.add('book');


		    book_.appendChild(bookCover);
		    book_.appendChild(bookCoverImg);
		    bookCoverImg.setAttribute('src', book.imageLink);
		    bookCoverImg.classList.add('book-cover-img');


		    book_.appendChild(bookDescrCover);
		    bookDescrCover.classList.add('book-descr-cover');

		    bookDescrCover.appendChild(bookTitle);
		    bookTitle.innerText = book.title;
		    bookTitle.classList.add('book-title');

		    bookDescrCover.appendChild(bookAuthor);
		    bookAuthor.innerText = book.author;
		    bookAuthor.classList.add('book-author');

		    bookDescrCover.appendChild(bookPrice);
		    bookPrice.innerText = '$' + book.price;
		    bookPrice.classList.add('book-price');

		    bookDescrCover.appendChild(readMore);
		    readMore.innerText = 'Read more...';
		    readMore.classList.add('read-more-btn');

		    bookDescrCover.appendChild(bookDescr);
		    bookDescr.innerText = book.description;
		    bookDescr.classList.add('book-descr');
		    bookDescr.classList.add('book-descr-hidden');
		    bookDescr.appendChild(closeBookDescr);
		    closeBookDescr.classList.add('close-book-descr');
		    closeBookDescr.innerText = 'close';



		    bookDescrCover.appendChild(addBook);
		    addBook.classList.add('add-book');
		    addBook.setAttribute('draggable','true');

		    addBook.setAttribute('book', book.title);
		    addBook.innerText = 'Add to cart';
		  };


			main.appendChild(ul);
		  ul.append(fragment);
		  ul.classList.add('book-list');

			// ----- READ-MORE-BTN -----------------------------------------------------------
			const bookDecrBlock = document.getElementsByClassName('book-descr');
			const readMoreBtns = document.getElementsByClassName('read-more-btn');
			const closeBookDecr = document.getElementsByClassName('close-book-descr');

			for (let i = 0; i < readMoreBtns.length; i++) {
				readMoreBtns[i].onclick = function() {openDescription(i)};
				closeBookDecr[i].onclick = function() {openDescription(i)};
			}

			function openDescription(num) {
				bookDecrBlock[num].classList.toggle("book-descr-hidden");
				// console.log(num.innerHTML + " is clicked")
			}

			// ----- BAG - BLOCK -----------------------------------------------------------
			// const bag = document.getElementById('bag');
			const booksList = document.createElement('ul');

			main.appendChild(bag);
			bag.setAttribute('id','bag')


			const logo = document.createElement('a');
			const bagDescr = document.createElement('p');
			const confirmOrder = document.createElement('a');

			bag.appendChild(logo);
			logo.setAttribute('href','../main/');
			logo.classList.add('logo');
			logo.innerHTML = `book<span class='logo-span'>shop</span>`;

			bag.appendChild(bagDescr);
			bagDescr.classList.add('bag-descr');
			bagDescr.innerText = 'Welcome to our amazing book shop! Add your books here!'

			// ----- ADD-TO-CART-BTN -----------------------------------------------------------
			const addToCart = document.getElementsByClassName('add-book');

			let booksInCart = [];

			for (let i = 0; i < addToCart.length; i++) {
				addToCart[i].onclick = function() { getBook(i) };
			}

			function getBook(num) {
				confirmOrder.setAttribute('style', 'display: flex');

				if (booksInCart.length > 0) {
					for (let book in booksInCart ) {
						if (booksInCart[book].bookTitle === addToCart[num].parentElement.children[0].innerText) {
							// console.log(booksInCart[book].bookTitle);
							// console.log(num);
							event.stopPropagation();
        			alert("You have already have this book in your bag!");
							return;
						}
					}
				}

				const newBook = {
					bookTitle: addToCart[num].parentElement.children[0].innerText,
					bookAuthor: addToCart[num].parentElement.children[1].innerText,
					bookPrice: addToCart[num].parentElement.children[2].innerText
				};

				booksInCart.push(newBook);

				const book = document.createElement('li');
				const bookTitle = document.createElement('div');
				const bookAuthor = document.createElement('div');
				const bookPrice = document.createElement('div');
				const removeBook = document.createElement('div');

				bag.appendChild(booksList);
				booksList.classList.add('bag-list');

				booksList.appendChild(book);

				book.appendChild(bookTitle);
				bookTitle.classList.add('bag-book-title');
				bookTitle.innerText = addToCart[num].parentElement.children[0].innerText;

				book.appendChild(bookAuthor);
				bookAuthor.classList.add('bag-book-author');
				bookAuthor.innerText = addToCart[num].parentElement.children[1].innerText;

				book.appendChild(bookPrice);
				bookPrice.classList.add('bag-book-price');
				bookPrice.innerText = addToCart[num].parentElement.children[2].innerText;

				book.appendChild(removeBook);
				removeBook.classList.add('book-remove');
				removeBook.innerHTML = 'Remove book ' + '<i class="fa-solid fa-trash-can"></i>';

				removeBook.onclick = function() { removeBookFn(removeBook, num) };
			}

			// ----- REMOVE-BOOK-BTN -----------------------------------------------------------


			function removeBookFn(book, i) {
				book.parentElement.remove();
				delete booksInCart[i];
			}

			bag.appendChild(confirmOrder);
			confirmOrder.classList.add('confirm-order');
			confirmOrder.innerText = 'Confirm order';


    });

})();
