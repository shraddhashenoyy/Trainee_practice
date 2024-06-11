//1.Program-1
const number=[10,2,3,4];
console.log("The Entered Array:",number);
console.log("The length of an array:",number.length);
const subtract=(acc,cur) =>acc-cur;
// const initialValue = 0;
const result = number.reduce(subtract);
console.log("Result:",result);

console.log("\n");
//2.program-2
const array=[50,3,4,5];
console.log("Entered Array:",array);
console.log("Length of an array:",array.length);
const subtract1=(acc,cur) =>acc-cur;
const result1=array.reduce(subtract1);
console.log("Final Result:",result1);
