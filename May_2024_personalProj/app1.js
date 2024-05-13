// person OBJECT experimentation
const person ={
    "first Name": "James",
    "lastName": "Harris",
    "interests": ["BBQ","React", "CSS3"]

}
console.log(person);

const player1 = {
    "First Name" : ['James'],
    "Last Name" : ["Ron"],
    "Hobbies" : ['React', 'CSS3', 'HTML5', 'JavaScript'],
}

console.log(player1);

const courses = person['courses']
courses.forEach((course, index) => {

})

for(const prop in person){
    console.log(prop);
}