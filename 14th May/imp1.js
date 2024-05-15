//Problems on Arrays
//Factorial of a number
let array=[1,2,3,4,5];
console.log("Entered Array:",array);

for(let i=0;i<array.length;i++){
    let fact=1;
    for(let j=1;j<=array[i];j++){
        fact=fact*j;
    }
    console.log(fact);
}


//Sum of an array
let array1=[2,4,6,7,8,9];
console.log("Entered Array:",array1);

let sum=0;
for(let i=0;i<array1.length;i++){
   sum=sum+array1[i];
}
console.log("Sum of an array: ",sum);