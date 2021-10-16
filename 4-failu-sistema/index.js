const data = require('./lib/data.js');

// data.create('users', 'petras', { name: 'Petras', age: 99 }, (state, msg) => {
//     console.log(state, msg);
//     console.log('Sekantys zingsniai po bandymo sukurti faila....');
// });

// data.create('books', 'du-gaideliai', { text: 'baltus zirnius kule'}, (state, msg) => {
//     console.log(state, msg);
//     console.log('Sekantys zingsniai po bandymo sukurti faila....');
// });
data.read('users', 'petras', (err, content) => {
    console.log(err);
    console.log(content);
})