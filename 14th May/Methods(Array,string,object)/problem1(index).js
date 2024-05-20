let array1=[1,0,2,-3,-4];
console.log("Entered first array:",array1);
let array2=[3,5,6,7,-8];
console.log("Entered second array:",array2);
console.log("Length of array1:",array1.length);
console.log("Length of array2:",array2.length);
let sum;
let Final=[];


console.log("sum of each index:");
for(let i=0;i<array1.length && i<array2.length;i++){
    sum=array1[i]+array2[i];
    // console.log("sum of each index:",sum);
    Final.push(sum);

}
console.log("Final Array:",Final);


