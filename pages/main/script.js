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

    });

	// ----- BAG - BLOCK
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

	// ----- READ-MORE-BTN
  const readMoreBtns = document.getElementsByClassName('read-more-btn');
  const bookDecrBlock = document.getElementsByClassName('book-descr');
  const closeBookDecr = document.getElementsByClassName('close-book-descr');
	// ----- ADD-TO-CART-BTN
	const addToCart = document.getElementsByClassName('add-book');
	const bookInfo = {
		bookTitle: document.getElementsByClassName('book-title'),
		bookAuthor: document.getElementsByClassName('book-author'),
		bookPrice: document.getElementsByClassName('book-price')
	};

  // ----- using window.onload as I am getting my html from promises, so they must be loaded before I can get them from the page
  window.onload = function() {
		const bag = document.getElementById('bag');
		const booksList = document.createElement('ul');
		let orderedBooksList = [];

		for (let btn in addToCart) {
		 if (btn <= 9) {

			 // ----- ADD-TO-CART-BTN
			 addToCart[btn].onclick = function() { getBook(btn) };

			 // ----- READ-MORE-BTN
			 readMoreBtns[btn].onclick = function() {openDescription(btn)};
		   closeBookDecr[btn].onclick = function() {openDescription(btn)};
		 }
		}

		function openDescription(num) {
			bookDecrBlock[num].classList.toggle("book-descr-hidden");
		}

		function getBook(num) {
			orderedBooksList.push({
				bookTitle: bookInfo.bookTitle[num].innerText,
				bookAuthor: bookInfo.bookAuthor[num].innerText,
				bookPrice: bookInfo.bookPrice[num].innerText
			});

			console.log(orderedBooksList[num]);

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
			bookTitle.innerText = orderedBooksList[num].bookTitle;

			book.appendChild(bookAuthor);
			bookAuthor.classList.add('bag-book-author');
			bookAuthor.innerText = orderedBooksList[num].bookAuthor;

			book.appendChild(bookPrice);
			bookPrice.classList.add('bag-book-price');
			bookPrice.innerText = orderedBooksList[num].bookPrice;

			book.appendChild(removeBook);
			removeBook.classList.add('book-remove');
			removeBook.innerHTML = 'Remove book ' + '<i class="fa-solid fa-trash-can"></i>';
			
		}

		bag.appendChild(confirmOrder);
		confirmOrder.classList.add('confirm-order');
		confirmOrder.innerText = 'Confirm order';

  }





})();
