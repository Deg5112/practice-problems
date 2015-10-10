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

