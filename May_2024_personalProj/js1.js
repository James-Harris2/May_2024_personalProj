const divs = document.querySelectorAll('div')
const inValue = document.querySelector('.val')
const hTag = document.querySelector('h1')
const span = document.querySelector('span')
inValue.style.fontSize = '3em';


let counter = 0;

const btn = document.createElement('button');
btn.textContent = 'Click Me';
btn.addEventListener('click',(e) =>{
    const newDiv = document.createElement('div');
    document.body.append(newDiv)
    counter++;
    newDiv.textContent = `${inValue.value} ${counter}`;
    newDiv.addEventListener('click', myClick);
    

})
const val1 = span.append(btn)
const val2 = span.appendChild(btn);
console.log(btn);
// This code function is a ForEach that pushes Context to the DOM
// How ever truck driver isn't showing up inside

inValue.addEventListener('click', (e) =>{
    if(inValue.getAttribute('type') == 'text' ){
        inValue.setAttribute('type','number');
    }else {
        inValue.setAttribute('type','text')
    }
    });

    




divs.forEach((div, ind) =>{
    console.log(div);
    inValue.value = ind;
    
    // div.textContent = `<h2>Hey There Driver!</h2> ${inValue.value + 1}`;
    div.innerHTML = `<h2>Watch out for Road Conditions</h2>${inValue.value + 2}`;
    div.addEventListener('click', (e) =>{
        console.log(e.target);
        div.classList.toggle('box')
    })
})

function myClick(e){
    console.log(e.target);
    e.target.classList.toggle('box')
}
hTag.addEventListener('click', (e)=>{
    console.log(e.target);
    hTag.style.color = 'white';
    if(hTag.textContent == 'I love programming'){
        hTag.textContent = 'test';
        hTag.style.backgroundColor = 'royalblue';
    }else{
        hTag.textContent ='I love programming';
        hTag.style.backgroundColor = 'green'
    }
})
