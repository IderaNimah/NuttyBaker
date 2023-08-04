"use strict";
const passwordOne = document.getElementById('passwordOne');
const passwordTwo = document.getElementById('passwordTwo');
console.log(passwordOne);

const eyeIconOne = document.getElementById('eyeIconOne');
const eyeIconTwo = document.getElementById('eyeIconTwo');

function togglePasswordVisibility(){
    const isTextType = passwordOne.type === 'text';

    passwordOne.type = isTextType?'password':'text';
    passwordTwo.type = isTextType?'password':'text';

    eyeIconOne.classList.toggle('fa-eye', isTextType);
    eyeIconOne.classList.toggle('fa-eye-slash',!isTextType);
    
    
    eyeIconTwo.classList.toggle('fa-eye', isTextType);
    eyeIconTwo.classList.toggle('fa-eye-slash',!isTextType);
    
}
eyeIconOne.addEventListener('click', togglePasswordVisibility);
eyeIconTwo.addEventListener('click', togglePasswordVisibility);