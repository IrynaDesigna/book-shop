;(function () {
	"use strict";

  const books = [{
    "author": "Douglas Crockford",
    "imageLink": "../../assets/images/books/0.jpg",
    "title": "JavaScript: The Good Parts: The Good Parts",
    "price": 30,
    "description": "With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must"
  },
    {
      "author": "David Herman",
      "imageLink": "../../assets/images/books/1.jpg",
      "title": "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
      "price": 22,
      "description": "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency"
    },
    {
      "author": "David Flanagan",
      "imageLink": "../../assets/images/books/2.jpg",
      "title": "JavaScript: The Definitive Guide",
      "price": 40,
      "description": "This Fifth Edition is completely revised and expanded to cover JavaScript as it is used in today's Web 2.0 applications. This book is both an example-driven programmer's guide and a keep-on-your-desk reference, with new chapters that explain everything you need to know to get the most out of JavaScript"
    },
    {
      "author": " Eric Elliott",
      "imageLink": "../../assets/images/books/3.jpg",
      "title": "Programming JavaScript Applications",
      "price": 19,
      "description": "Take advantage of JavaScript’s power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that’s easier—yes, easier—to work with as your code base grows."
    },
    {
      "author": "Addy Osmani",
      "imageLink": "../../assets/images/books/4.jpg",
      "title": "Learning JavaScript Design Patterns",
      "price": 32,
      "description": "With Learning JavaScript Design Patterns, you’ll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you."
    },
    {
      "author": "Boris Cherny",
      "imageLink": "../../assets/images/books/5.jpg",
      "title": "Programming TypeScript",
      "price": 28,
      "description": "Any programmer working with a dynamically typed language will tell you how hard it is to scale to more lines of code and more engineers. That’s why Facebook, Google, and Microsoft invented gradual static type layers for their dynamically typed JavaScript and Python code. This practical book shows you how one such type layer, TypeScript, is unique among them: it makes programming fun with its powerful static type system."
    },
    {
      "author": "Alex Banks, Eve Porcello",
      "imageLink": "../../assets/images/books/6.jpg",
      "title": "Learning React, 2nd Edition",
      "price": 25,
      "description": "If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript, CSS, and HTML work in the browser, this updated edition provides best practices and patterns for writing modern React code. No prior knowledge of React or functional JavaScript is necessary."
    },
    {
      "author": "Bradley Meck Alex Young and Mike Cantelon",
      "imageLink": "../../assets/images/books/7.jpg",
      "title": "Node.js in Action",
      "price": 38,
      "description": "Node.js in Action, Second Edition is a thoroughly revised book based on the best-selling first edition. It starts at square one and guides you through all the features, techniques, and concepts you'll need to build production-quality Node applications."
    },
    {
      "author": "Kyle Simpson",
      "imageLink": "../../assets/images/books/8.jpg",
      "title": "You Don't Know JS Yet: Get Started",
      "price": 26,
      "description": "It seems like there's never been as much widespread desire before for a better way to deeply learn the fundamentals of JavaScript. But with a million blogs, books, and videos out there, just where do you START? Look no further!"
    },
    {
      "author": "John Resig and Bear Bibeault",
      "imageLink": "../../assets/images/books/9.jpg",
      "title": "Secrets of the JavaScript Ninja",
      "price": 33,
      "description": "Secrets of the Javascript Ninja takes you on a journey towards mastering modern JavaScript development in three phases: design, construction, and maintenance. Written for JavaScript developers with intermediate-level skills, this book will give you the knowledge you need to create a cross-browser JavaScript library from the ground up."
    }
  ];

  const header = document.querySelector('header');
  const main = document.querySelector('.main');
  const footer = document.querySelector('footer');

  const ul = document.createElement('ul');
  const nav = document.createElement('ul');
  const footerNav = document.createElement('ul');
  const user = document.createElement('ul');

  const fragment = new DocumentFragment();

  // HEADER

  nav.classList.add('nav');
  footerNav.classList.add('footer-nav');
  user.classList.add('user');

  let navContent = [
    {
      'text': `<span class='logo'>book<span class='logo-span'>shop</span></span>`,
      'link': '../main/index.html'
    },
    {
      'text': 'Home',
      'link': '../main/index.html'
    },
    {
      'text': 'Wishlist',
      'link': '#'
    },
    {
      'text': 'My Collection',
      'link': '#'
    }
  ],
  userInfo = [
    {
      text: `<i class="fa-solid fa-cart-shopping"></i>`,
      link: '#',
      imgAttr: 'cart'
    },
    {
      text: 'IrynaDesigna',
      link: '#',
      img: '../../assets/images/user-iryna.webp',
      imgAttr: 'user-photo'
    }
  ];


  // NAVIGATION
  for (let link in navContent) {
    const navLink = document.createElement('li');
    const a = document.createElement('a');
    fragment.append(navLink);

    navLink.appendChild(a);
    a.setAttribute('href',navContent[link].link);
    a.innerHTML = navContent[link].text;
  }

  header.appendChild(nav);
  nav.append(fragment);


  for (let info in userInfo) {
    const infoList = document.createElement('li');
    const a = document.createElement('a');
    const span = document.createElement('span');
    fragment.append(infoList);
    infoList.appendChild(a);

    a.setAttribute('href',userInfo[info].link);
    a.appendChild(span);
    a.classList.add('user-info');
    span.innerHTML = userInfo[info].text;


    if (userInfo[info].hasOwnProperty('img')) {
      const img = document.createElement('img');
      a.appendChild(img);
      img.setAttribute('src', userInfo[info].img);
      img.classList.add(userInfo[info].imgAttr);
    }
  }

  header.appendChild(user);
  user.append(fragment);


  // MAIN-CONTENT-BOOKS

  // fetch('../books.json') //path to the file with json data
  //       .then(response => {
  //           return response.json();
  //       })
  //       .then(data => {
  //
  //         for (const book of data) {
  //
  //       });
  for (const book of books) {

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
  }

  // document.getElementsByClassName("read-more-btn").onclick = function() {myFunction()};
  //
  // function myFunction() {
  //   console.log(document.getElementsByClassName("read-more-btn"))
  // }

  const readMoreBtns = document.getElementsByClassName("read-more-btn");
  const bookDecrBlock = document.getElementsByClassName("book-descr");
  const closeBookDecr = document.getElementsByClassName("close-book-descr");

  // const closeDescr = document.querySelectorAll('book-descr::after');

  //
  // console.log(readMoreBtns);

  // ----- using window.onload as I am getting my html from promises, so they must be loaded before I can get them from the page
  window.onload = function()
    {
       for (let btn in readMoreBtns) {
         if (btn <= 9) {
           readMoreBtns[btn].onclick = function() {openDescription(btn)};
           closeBookDecr[btn].onclick = function() {openDescription(btn)};

         }
       }
    }

    function openDescription(num) {
      bookDecrBlock[num].classList.toggle("book-descr-hidden");
    }


  main.appendChild(ul);
  ul.append(fragment);
  ul.classList.add('book-list');

  // footer
  for (let link in navContent) {
    const navLink = document.createElement('li');
    const a = document.createElement('a');
    fragment.append(navLink);

    navLink.appendChild(a);
    a.setAttribute('href',navContent[link].link);
    a.innerHTML = navContent[link].text;
  }
  footer.appendChild(footerNav);
  footerNav.append(fragment);

})();
