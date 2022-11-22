;(function () {
	"use strict";
	const header = document.querySelector('header'),
				main = document.querySelector('main'),
				logo = document.createElement('a');

	header.appendChild(logo);
	logo.setAttribute('href','../main/');
	logo.classList.add('logo');
	logo.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> book<span class='logo-span'>shop</span>`;

	const name = document.querySelector('#name'),
				surname = document.querySelector('#surname'),
				houseNum = document.querySelector('#house-num'),
				street = document.querySelector('#street'),
				aptNum = document.querySelector('#apt-num'),
				deliveryDate = document.querySelector('#delivery-date'),
				gifts = document.getElementsByClassName('gift'),
				giftsErr = document.querySelector('#gifts-error'),
				submitBtn = document.querySelector('#order-submit');


	name.addEventListener('change', strCheck);
	surname.addEventListener('change', strCheck);
	houseNum.addEventListener('change', numCheck);
	street.addEventListener('change', streetCheck);
	aptNum.addEventListener('change', aptNumCheck);
	deliveryDate.addEventListener('change', validationCheck);
	submitBtn.addEventListener('click', orderSubmit);

	for (let i = 0; i < gifts.length; i++) {
		gifts[i].addEventListener('change', checkboxCheck);
	}

	let today = new Date(),
			deliveryDay = new Date(today.setDate(today.getDate() + 1));
	deliveryDate.setAttribute('min',deliveryDay.getFullYear() +'-'+ (deliveryDay.getMonth()+1) +'-'+ deliveryDay.getDate());

	function strCheck(str) {
		let strLength;
		if (str.target.id === 'name') { strLength = 4 }
		else if (str.target.id === 'surname') { strLength = 5}

		let validation = /^[A-Za-z]+$/;
		if(str.target.value.match(validation) && str.target.value.length >= strLength) {
			str.path[1].children[1].innerText = ""
			str.target.classList.remove('input-error');
		}
		else {
			str.path[1].children[1].innerText = "Pleace, enter strings only. At least, " + strLength + " characters";
			str.target.classList.add('input-error');
		}
		validationCheck()
	}

	function numCheck(num) {
		console.log();
		if(Number(num.target.value) > 0) {
			num.path[1].children[1].innerText = ""
			num.target.classList.remove('input-error');
		}
		else {
			num.path[1].children[1].innerText = "Pleace, enter positive number only.";
			num.target.classList.add('input-error');
		}
		validationCheck()
	}

	function streetCheck(str) {
		let validation = /^[A-Za-z-0-9-\s]+$/;

		if(str.target.value.match(validation) && str.target.value.length >= 5) {
			str.path[1].children[1].innerText = ""
			str.target.classList.remove('input-error');
		}
		else {
			str.path[1].children[1].innerText = "Pleace, don't enter special characters. Strings and numbers only. At least, 5 characters";
			str.target.classList.add('input-error');
		}
		validationCheck()
	}

	function aptNumCheck(str) {
		let validation = /^[0-9]+[0-9-\-]+[0-9]+$/;

		if(str.target.value.match(validation)) {
			str.path[1].children[1].innerText = ""
			str.target.classList.remove('input-error');
		}
		else {
			str.path[1].children[1].innerText = "Pleace, don't enter special character - only one dash is allowed. Numbers only. At least, 5 characters.";
			str.target.classList.add('input-error');
		}
		validationCheck()
	}

	const gift = document.getElementsByClassName('gift');
	let checkedGift = 0;

	for (let index in gift) {
		if (gift[index].checked) { checkedGift++ }
	}

	function checkboxCheck(el){
		checkedGift = 0;
		console.log(el);
		console.log(checkedGift);
		for (let index in gift) {
			if (gift[index].checked) { checkedGift++ }
		}
		console.log(checkedGift);
		if (checkedGift === 2) {
			giftsErr. innerText = '';
			validationCheck()
		} else {
			giftsErr. innerText = 'Please, choose any 2 gifts.';
			validationCheck()

		}
	}

	function validationCheck() {
		if (
			name.value !== "" &&
			name.value.match(/^[A-Za-z]+$/) &&
			surname.value !== "" &&
			surname.value.match(/^[A-Za-z]+$/) &&
			houseNum.value !== "" &&
			houseNum.value > 0 &&
			street.value !== "" &&
			street.value.match(/^[A-Za-z-0-9-\s]+$/) &&
			aptNum.value !== "" &&
			aptNum.value.match(/^[0-9]+[0-9-\-]+[0-9]+$/) &&
			deliveryDate.value !== "" &&
			checkedGift === 2
		) { submitBtn.removeAttribute('disabled') }
		else {
			submitBtn.setAttribute('disabled','true');
		};
	}

	function orderSubmit(e) {
		e.preventDefault();

		const orderConfirmation = document.createElement('div'),
					mssg = document.createElement('p'),
					mssgClose = document.createElement('div');

		main.appendChild(orderConfirmation);
		orderConfirmation.classList.add('order-confirmation');

		orderConfirmation.appendChild(mssgClose);
		mssgClose.classList.add('mssg-close');
		mssgClose.innerText = 'close';

		orderConfirmation.appendChild(mssg);
		mssg.classList.add('mssg')
		mssg.innerHTML = `Congratulations, your order has been made! </br> Delivery address is ` + aptNum.value + `-` + houseNum.value + ` ` + street.value + `</br>` +
										 `Customer is ` + name.value + ` ` + `surname.value`;

		mssgClose.addEventListener('click', closeMssgFn);
	}

	function closeMssgFn(el) {
		el.target.parentElement.remove();
	}

})();
