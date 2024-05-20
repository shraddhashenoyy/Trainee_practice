let array1=[1,0,2,3,4];
let array2=[3,5,6,7,8,13];
console.log("The first array:",array1);
console.log("Length of array1:",array1.length);
console.log("The Second array:",array2);
console.log("Length of array2:",array2.length);
array1[5]=null;
let sum;
let Final=[];

console.log("The sum series are:");
for(let i=0;i<array1.length && i<array2.length;i++){
   let sum=array1[i]+array2[i];
   let result=console.log(sum);
   Final.push(sum);
}


console.log("Final array:",Final);