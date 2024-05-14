// JSON PRACTICE  | Simple Fetch Request
//  data is a Global Object that can be passed around
const url = "jamesH.json"
let data = '';
myJson()

function myJson(){
    fetch(url)
    .then(rep => rep.json())
    .then(json => {
        data = json;
        console.log(data)
    })
}