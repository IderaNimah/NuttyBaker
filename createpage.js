"use strict";
// const passwordOne = document.getElementById('passwordOne');
// const passwordTwo = document.getElementById('passwordTwo');
// console.log(passwordOne);

// const eyeIconOne = document.getElementById('eyeIconOne');
// const eyeIconTwo = document.getElementById('eyeIconTwo');

// function togglePasswordVisibility(){
//     const isTextType = passwordOne.type === 'text';

//     passwordOne.type = isTextType?'password':'text';
//     passwordTwo.type = isTextType?'password':'text';

//     eyeIconOne.classList.toggle('fa-eye', isTextType);
//     eyeIconOne.classList.toggle('fa-eye-slash',!isTextType);
    
    
//     eyeIconTwo.classList.toggle('fa-eye', isTextType);
//     eyeIconTwo.classList.toggle('fa-eye-slash',!isTextType);
    
// }
// eyeIconOne.addEventListener('click', togglePasswordVisibility);
// eyeIconTwo.addEventListener('click', togglePasswordVisibility);
const eyeButtons = document.querySelectorAll("#eye");
const eyeButtonOne = document.querySelector(".eyeOne");
const eyeButtonTwo = document.querySelector(".eyeTwo");

const passwordOne = document.querySelector("#passwordOne");
const passwordTwo = document.querySelector("#passwordTwo");

eyeButtons.forEach((eyeButton) => {
	eyeButton.addEventListener("click", () => {
		if (passwordOne.type === "password") {
			passwordOne.type = "text";
			passwordTwo.type = "text";
			eyeButtonOne.innerHTML = '<i class="far fa-eye-slash"></i>';
			eyeButtonTwo.innerHTML = '<i class="far fa-eye-slash"></i>';
		} else {
			passwordOne.type = "password";
			passwordTwo.type = "password";
			eyeButtonOne.innerHTML = '<i class="far fa-eye"></i>';
			eyeButtonTwo.innerHTML = '<i class="far fa-eye"></i>';
		}
	});
});
