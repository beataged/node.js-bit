const liDOM = document.querySelectorAll('li');
const liArray = [];

for (let i = 0; i < liDOM.length; i++) {
    const ingredientas = liDOM[i];
    const pavadinimas = ingredientas.textContent;
    console.log(pavadinimas);
    liArray.push(pavadinimas.toUpperCase());
}

  console.log(liArray)
  
// alternatyva
// for (const ingredientas of liDOM) {
//     console.log(ingredientas.textContent);
// }