const removeFromArray = function(array , ...args) {

    const arr = [];
    array.forEach((item) =>{
        if (!args.includes(item)){
            arr.push(item);
        }
    });

    return arr;

};



// Do not edit below this line
module.exports = removeFromArray;
