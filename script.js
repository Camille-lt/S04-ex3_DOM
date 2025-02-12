const counterButton = document.querySelector('#counter');
let count = 0;
function updateButton () {
count++ // count = count + 1
console.log(count)
counterButton.innerText = count + ' clics !'
}
counterButton.addEventListener('click', updateButton);
