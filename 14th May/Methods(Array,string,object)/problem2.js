//1.Create Empty array
let array1=[10,20,30];
console.log("Array1:",array1);
let arr=[];
console.log("Empty array:",arr);

//2.Access first and last element
console.log("Length of array1:",array1.length);
console.log("First Element:",array1[0]);
console.log("Last Element:",array1[array1.length-1]);

//3.Add element to end
array1.push(44);
console.log("New Array:",array1);

//4.Remove last element
array1.pop();
console.log(array1);
let a=["mango","oranges","pineapples"];
console.log("Before pop():",a);
a.pop();
console.log("After pop():",a);

//5.Loops on arrays
//for loop
let array2=[111,112,33];
console.log("Entered array:",array2);
for(let i=0;i<array2.length;i++){
    console.log(array2[i]);
}

//6.Adding entire arrays
let sum=0;
for(let j=0;j<array2.length;j++){
    sum+=array2[j];
}
console.log("Sum of an array2:",sum);

//7.Check if element is there or not
let array3=[111,77,44,332];
console.log("Entered Array:",array3);
let result=array3.includes(111);
console.log("Result:",result);



