//1
const ageTable = document.getElementById('age-table');
console.log(ageTable);
//2
const labels = document.getElementsByTagName('label');
console.log(labels);
//3
const firstTd = document.querySelector('td');
console.log(firstTd);
//4
const formNameSearch = document.querySelector('form[name="search"]');
console.log(formNameSearch);
//5
const firstInput = formNameSearch.querySelector('input');
console.log(firstInput);
//6
const inputs = formNameSearch.querySelectorAll('input');
const lastInput = inputs[inputs.length - 1];
console.log(lastInput);