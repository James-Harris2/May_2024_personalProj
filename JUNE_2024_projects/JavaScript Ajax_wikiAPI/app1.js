const url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=;';

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
    let searchTerm = inputVal.value || 'JavaScript';
    let tempURL = url + searchTerm;
    console.log(tempURL);
    fetch(tempURL).then((rep) =>{ return rep.json()})
    .then((data)=>{
        console.log(data);
        output.innerHTML = '<div>Results for ' + searchTerm + '</div>' ;
        output.innerHTML += `Total Results :
        ${data.query.searchinfo.totalhits}<br>`;
        maker(data.query.search)
    })
})


// Adding a function on

function maker(data){
    console.log(data);
    
    data.forEach(el=> {
        console.log(el);
        const div = document.createElement('div');
        div.innerHTML += `<h3><a href="https://en.wikipedia.org/wiki?curid=${el.pageid}" target="_blank">${el.title}</a></h3>`;
        div.innerHTML += `<div>Page ID ${el.pageid} | Size ${el.size} | WordCount ${el.wordcount} </div>`;
        div.classList.add('box');
        div.innerHTML += el.snippet;
        output.append(div);
    })
}
