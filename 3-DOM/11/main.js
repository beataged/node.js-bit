const buttonDOM = document.querySelector('button');
const inputDOM = document.querySelector('input');
const spanDOM = document.querySelector('span');
const fonoSp = document.querySelector('#bg-color');
const tekstoSp = document.querySelector('#text-color');

buttonDOM.addEventListener('click', function (event) {
    event.preventDefault();
    inputDOM.style.color = "red";
    spanDOM.innerText = inputDOM.value;
    spanDOM.style.color = tekstoSp.value;
    spanDOM.style.backgroundColor = fonoSp.value;
    inputDOM.value = "";
})
