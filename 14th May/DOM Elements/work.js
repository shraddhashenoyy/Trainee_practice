//program-1
let array=[1,3,5,6];
let a=4;
console.log("Entered array:",array);
console.log("The length of an array:",array.length);
console.log("Element:",a);


function index(array,a){
    for(let i=0;i<array.length;i++){
        if(array[i]===a){
            return i;
        }
    }
    return -1;
}

let result=index(array,a);
console.log(result);