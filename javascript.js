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