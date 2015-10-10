//bigger words
var array = ['Steve', 'Joshua', 'Andrew', 'Daniel'];

function returnArray(string, arrayOfStrings){
    var arr = [];
    var x = 0;
    for (x ; x<arrayOfStrings.length; x++){
        if (arrayOfStrings[x].length>string.length){
            arr.push(arrayOfStrings[x]);
        }
    }
    return arr;
}


//total reverse

var arr = [1, 2, 3, 4, 5];

function reverse (array) {
    var newArr =[];
    var x = arr.length-1;
    for(x; x>=0; x--){
        newArr.push(arr[x]);
    }
    return newArr;
}

//One to Multi
var arr = ['hello', 34, 'David', 32];

function returnTypes(array) {
    var newArray=[];
    for (var x = 0; x < array.length; x++) {
        if (typeof array[x] === 'string') {
            newArray.push(array[x]);
        }
    }
    for (var x = 0; x < array.length; x++) {
        if (typeof array[x] === 'number') {
            newArray.push(array[x]);
        }
    }
    for (var x = 0; x < array.length; x++) {
        if (typeof array[x] === 'boolean') {
            newArray.push(array[x]);
        }
    }
    return newArray;
}

returnTypes(arr);

//sort
function sort(array_of_strings){

}
//fizzbuzz
function fizzBuzz(){
    for(var x = 1; x<=100; x++){
        if(x%3===0||x%5===0){
            console.log('FizzBuzz');
        }else if(x%3===0){
            console.log('Fizz');
        }else if(x%5===0){
            console.log('Buzz');
        }else{
            console.log(x);
        }
    }
}

fizzBuzz();





