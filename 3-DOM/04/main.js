const h1DOM = document.querySelector('h1');
h1DOM.innerText = 'Zuikio darzas';

const liDOM = document.querySelectorAll('li');

for(let i = 0; i < liDOM.length; i++){
    liDOM[i].innerText = 'Israuta darzove';
};