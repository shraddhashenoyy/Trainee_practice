//swapping first and last element
let num=[10,22,44,55];
let num1=[223];
console.log("Entered number:",num);
console.log("Length of an array:",num.length);

let temp;
temp=num[0];
num[0]=num[num.length-1];
num[num.length-1]=temp;
console.log("After swap",num);
//push()
num.push(num1);
console.log("Final Array:",num);
//flat()
let result=num.flat();
console.log("Result:",result);

//Largest and smallest number from an array
let array1=[333,555,777,1000];
let largest=array1[0];
let smallest=array1[0];
for(let i=0;i<array1.length;i++){
    if(array1[i]>largest){
        largest=array1[i];
    }

    if(array1[i]<smallest){
        smallest=array1[i];
    }
}

console.log("largest:",largest);
console.log("smallest:",smallest);

//simple programs on strings
let str="Hii,how are you??Are you fine!!!1";
let str2="you are welcome";
let result1=str.concat(str2);
console.log("result1:",result1);
let Final=result1.split();
console.log("Final:",Final);
let n=Final[0].charCodeAt(0);
console.log("Code:",n);




