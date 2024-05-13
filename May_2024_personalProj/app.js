// ar1 HAVING FUN MANIPULATING DATA

const arr1 = ['one', 1, 'two', 2, 'james',[
    'address', 9999, 'Welch Valley', 
]] ;

console.log(arr1);


// ar2

const arr2 = ['four', 4, 'five', 5, 'six', 6, 'seven', 78]
console.log(arr2);

const arr3 = [];
// get Each element in the arg
arr1.forEach((ele, ind) =>{
    console.log(ele);
    arr3[ind] = "changed_TO_BabyCakes"

})

const arr4 = []

arr2.forEach((ele, ind) =>{
    console.log(ele);
})
// pushing 
arr1.push('Hello Wilbur')
console.log(arr1);
const val1 = arr1.pop()
console.log(val1);

arr3.unshift('Hello Wilbur')


// output of array and duplicate

const arr5 = arr1.map((el) => {
    console.log(el);
    return el;
})
 console.log(arr5);

 arr4[0] = 'START'
 
//  CLONE AND ARRAY the easy_way

const arr55 = arr1.map((x) =>x);

