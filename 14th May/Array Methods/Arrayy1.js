//1.Declare Array(Array length)
let array=[100,177,88,93,54,277,55];
console.log("Entered Array:",array);
let array1=["Mumbai","Bangalore","Hyderabad"];
console.log("Array1:",array1);
console.log("Length of array:",array.length);
console.log("Length of array1:",array1.length);

//2.Array toString()
let result=array.toString();
console.log("First Result:",result);
let result1=array1.toString();
console.log("Second Result:",result1);

let a=[11,22,33,44,55];
console.log("Entered a:",a);
console.log("Length of an array:",a.length);
let r=a.toString();
console.log("a Result:",r);

//3.push()
array.push(555);
console.log("After push:",array);
array1.push("Chennai");
console.log("After push:",array1);

//4.pop()
a.pop();
console.log("After pop:",a);
let array3=[1000,99,78,888];
console.log("Entered Array:",array3);
array3.pop();
console.log("Array3 after pop:",array3);

//5.unshift() and shift()
let newArray=[101,99,78];
console.log("Entered Array:",newArray);
// newArray.unshift(105);
// console.log("After unshift():",newArray);
// newArray.unshift(44);
// console.log("After unshift():",newArray);

newArray.shift();
console.log("After shift():",newArray);
newArray.shift();
console.log("After another shift():",newArray);


//6.delete()
delete array[0];
console.log("After Deleting the array:",array);

let firstArray=["apple","apple1","apple2"];
// console.log("Entered Array:",firstArray)
delete firstArray[0];
delete firstArray[2];
console.log("Entered Array:",firstArray);



