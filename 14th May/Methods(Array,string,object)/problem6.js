//Array map()
//1.
let array=[1,2,3,4,5,6,7];
console.log("Entered Array:",array);

// let square=x=> Math.pow(x, 2)
function square(x){
    return Math.pow(x,2);
   
}
let result=array.map(square);
console.log("Final Result:",result);


//Array filter()
//1.
let array1=[2,3,4,7,8];
console.log("Array1:",array1);
function evenNumber(num){
     return num%2===0;
}

let result1=array.filter(evenNumber);
console.log("Result1:",result1);





