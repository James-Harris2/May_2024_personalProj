const url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=javascript;';

// SIMPLE API REQUEST MADE TO WIKI

const btn = document.querySelector('.btn');
// eslint-disable-next-line no-unused-vars
const output = document.querySelector('.output');
const inputVal = document.querySelector('.val');
// eslint-disable-next-line no-unused-vars
let attemptCounter = false;

inputVal.value = 'hello';
btn.textContext = 'Load JSON data';
// eslint-disable-next-line no-unused-vars
btn.addEventListener('click',(e) =>{
    fetch(url).then((rep) =>{ return rep.json()})
    .then((data)=>{
        maker(data.query.search)
    })
})


// Adding a function on

function maker(data){
    console.log(data);
    output.innerHTML = 'Results for '
    data.forEach(el => {
        console.log(el);
        const div = document.createElement('div');
        div.innerHTML += `<h3>${el.title}</h3>`;
        div.innerHTML += `<div>Page ID ${el.pageid} | 
        Size ID ${el.size} | Wordcount ID ${el.wordcount} |</div>`;
        div.classList.add('box')
        div.innerHTML += el.snippet;
        output.append(div)
    })
}
