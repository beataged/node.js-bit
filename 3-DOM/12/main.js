const inputDOM = document.querySelector('#customer');
const orderDOM = document.querySelector('.order');
const buttonDOM = document.querySelector('button');
const checkBoxDOM = document.querySelectorAll('#patiekalas', '#sriuba', );
const radioButtonDOM = document.querySelectorAll('#sultys', '#gira', '#pienas');

buttonDOM.addEventListener('click', function(event)){
    event.preventDefault();
    const name = inputDOM.ariaValue;
    orderDOM.innerHTML = `uzsakovas vardu ${name}
}