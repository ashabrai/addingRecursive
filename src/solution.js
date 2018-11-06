'use strict';

module.exports = function addingRecursive(array){

    if(array.length < 1){
        array[0] += arr[1];
        array.splice(1,1);
        addingRecursive(array);
    }
    return array;
};
