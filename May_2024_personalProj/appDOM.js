/*
JavaScript JSON **** need to has%%%% Quote "" *****%%%
    -- Object
        ---Property: firstName
        ----Value: 'James'
*/        

const person = {
    "firstName" : 'James',
    "lastName" : 'Harris',
    "x1": "one",
    "x2": "two",
    "interests" : ["BBQing", "Smoking Meats", "Driving Commercial Trucks", "Buidling Programmings", "Father","Family Provider"]

}
console.log(person);
let x = 1;
console.log(person["x"+x]);
x++;
console.log(person["x"+x]);


const person2 = {
    "firstName": 'Sara',
    "lastName": 'Harris',
    "x1": "three",
    "x2" : "false",
    "interest" : ["Smoking Herb", "Chillin", "Working hard for her family", 'Loves her kids', 'Provider']
}

console.log(person2["firstName"]);