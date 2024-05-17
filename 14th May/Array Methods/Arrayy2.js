//6.Array at()
let array=[101,109,888,66];
console.log("Entered Array:",array);
let newArray1=array.at(1);
console.log(newArray1);

let array1=["tree","plants","herbs"];
console.log("Entered Array:",array1);
let newArray=array.at(0);
console.log("newArray:",newArray);

//7.concat
let result=array.concat(array1);
console.log("After Concatination:",result);
let result1=array1.concat(array);
console.log("After Concatination:",result1);
// let result2=newArray1.concat(newArray);
// console.log(result2);

let a1=[101,55,44];
let a2=[88,77,99];
let result2=a1.concat(a2);
console.log(result2);


//8.Array flat();
let nwArray=[[1,2],[3,4],[5,6]];
console.log("Entered Array:",nwArray);
let myArray=nwArray.flat();
console.log(myArray);

let nwArray1=[1,2,3,4,5,6];
console.log("Entered Array:",nwArray1);
let myArray1=nwArray1.flat();
console.log(myArray1);

//9.Array slice();
let nwArray2=["oranges","Apple","watermelon","grapes"];
console.log(nwArray2);
// let myArray2=nwArray2.slice(1);
// console.log(myArray2);
let myArray2=nwArray2.slice(0,4);
console.log(myArray2);

//10.Array splice();
let arr=[1,2,3,4,5,6,7];
// console.log("Entered array:",arr);
arr.splice(2,1,10);
console.log("newArray:",arr);

let arr1=[10,11,22,44];
arr1.splice(1,2,99,100);
console.log("Entered Array:",arr1);
