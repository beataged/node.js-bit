const data = require('./lib/data.js');

// data.create('darzoves', 'pomidoras', { color: 'Red', size:{x: 5, y: 8, z: 5} }, (state, msg) => {
//         console.log(state, msg);
//         console.log('Sekantys zingsniai po bandymo sukurti faila....');
//     });

data.read('darzoves', 'pomidoras', (err, content) => {
    console.log(err);
    console.log(content);
})

const initialDataPomidoras = { color: "Red", size: { x: 5, y: 8, z: 5 } };
data.create('darzoves', 'pomidoras', initialDataPomidoras, (err, msg) => {
    console.log('CREATE 1:', err, msg);

    data.update('darzoves', 'pomidoras', { ...initialDataPomidoras, size: { x: 8, y: 8, z: 8 } }, (err, msg) => {
        console.log('UPDATE 1:', err, msg);

        data.read('darzoves', 'pomidoras', (err, content) => {
            const fileData = JSON.parse(content);
            console.log('READ 2:', fileData);
        })
    })