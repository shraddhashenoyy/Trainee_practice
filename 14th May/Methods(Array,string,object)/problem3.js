//1.concatinating and sorting.
//Ascending and descending order
let array1=[10,22,3,5];
console.log("First Array:",array1);
let array2=[44,66,8];
console.log("Second Array:",array2);
console.log("Length of an array1:",array1.length);
console.log("Length of an array2:",array2.length);
let result=array1.concat(array2);
console.log("After Concatination:",result);
let result1=array1.concat(array2);
console.log("After Concatination:",result1);

//Ascending order
function sortNumber(a,b){
    return a-b;
}

//Descending order
function sortNumber1(a,b){
    return b-a;
}

result.sort(sortNumber);
console.log("Result:",result);
result.sort(sortNumber1);
console.log("Result1:",result1);


