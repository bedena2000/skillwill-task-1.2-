const inputElement = document.querySelector(".information-about-color");
const selectButton = document.querySelector(".select-button-color");
const arrayOfColours = ['red', 'blue', 'green', 'black', 'white'];
const allSuggetsButton = document.querySelectorAll(".suggest-button");

function changeBackgroundColor(newColor) {
	document.body.style.backgroundColor = newColor;
};

function gaveAlert() {
	window.alert("გთხოვთ შეიყვანეთ სწორი მონაცამებები");
};

function makeInputValue(newInputValue) {
	inputElement.value = newInputValue;
};	

for(let i = 0; i < allSuggetsButton.length; i++) {
	allSuggetsButton[i].addEventListener('click', function(event) {
		const updatedValue = event.target.textContent.toLowerCase();
		makeInputValue(updatedValue);
	});	
};

selectButton.addEventListener('click', function() {
	const inputValue = inputElement.value.toLowerCase();
	if(arrayOfColours.includes(inputValue)) {
		changeBackgroundColor(inputValue);
	} else {
		gaveAlert();
	};
});

document.body.addEventListener('keyup', function(event) {
	if(event.key === "Enter") {
		const inputValue = inputElement.value.toLowerCase();
		if(arrayOfColours.includes(inputValue)) {
			changeBackgroundColor(inputValue);
		} else {
			gaveAlert();
		};
	};
});
