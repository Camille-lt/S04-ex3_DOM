const counterButton = document.querySelector('#counter');
let count = 0;
function updateButton () {
count++
console.log(count)
counterButton.innerText = count + ' clics !'
}
counterButton.addEventListener('click', updateButton);
