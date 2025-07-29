const reverseString = function(string) {
    let length = string.length;

    if(length == 1){
        return string;
    }

    let arr = string.split("");
    let temp = '';

    for(let i=0 ; i<length/2 ; i++){
       
        temp = arr[i];
        arr[i] = arr[length - i - 1];
        arr[length - i - 1] = temp; 
    }

    return arr.join("");
};

// Do not edit below this line
module.exports = reverseString;
