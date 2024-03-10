/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Hyrum Whittier';
let currentYear = '2024';
let profilePicture ='images/myface.jpg';


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
Element.textContent = `${currentYear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `"profile Image Of " ${fullName}`);




/* Step 5 - Array */

let listFood = [' Sushi', ' Steak burgers', ' Smoked BBQ', ' Pizza', ' Fried rice'];
foodElement.innerHTML = `${listFood}`;

let singleFood =[' Steak']
listFood.push(singleFood);
foodElement.innerHTML += `<br>${listFood}`;

listFood.shift();
foodElement.innerHTML += `<br>${listFood}`;

listFood.pop();
foodElement.innerHTML += `<br>${listFood}`;
