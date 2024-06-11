//Strings and their methods
//1.string and string length
let str="shraddddddhaaaaa";
let length=str.length;
console.log("Entered string:",str);
console.log("Length of string:",str.length);


//2.string charAt()
let char=str.charAt(0);
console.log(char);
let char1=str.charAt(2);
console.log(char1);

//3.string charCodeAt()
let text="hii,how are you??";
console.log("Entered string:",text);
// let charact=text.charCodeAt(1);
// console.log(charact);
let charact=text.charCodeAt(0);
console.log(charact);

//4.string at()
let name1="shreyyaaa";
console.log("Name:",name1);
let result=name1.charAt(3);
console.log(result);

//5.slice()(substr() is similar to slice())
let neww="HII,WELCOME TO JS";
console.log(neww);
// let result1=neww.slice(4);
// console.log(result1);
let resultt=neww.substr(6,5);
console.log(resultt);

//6.substring()
let result1=neww.substring(2,6);
console.log(result1);

//7.string toUpperCase() and string toLowerCase()
let help="HELLOOOOOO";
let help1="ddddggggg";
let result6=help.toLowerCase();
console.log(result6);
let result7=help1.toUpperCase();
console.log(result7);

//8.str concat()
let x="Bangalore";
let y="Mumbaii";
let z=x.concat(y);
console.log("Display z:",z);
let z1=y.concat(x);
console.log("Display z1:",z1);

//9.str trim()-Removes the whiteSpace
let textX="   Hello,world!";
let textY=textX.trim();
console.log(textY);

//10.trimStart() and trimEnd()
let x2=" Hello,world";
let y2=x2.trimStart();
console.log("Display y2:",y2);
let x3="Helloworld!  ";
let y3=x3.trimEnd();
console.log("Display y3:",y3);

//padStart() and padEnd()
let numb = 5;
let text5 = numb.toString();
let padded = text5.padStart(4,"0");
console.log("padStart of function:",padded);

//repeat()
let number="number is important";
console.log("Entered Number:",number);
let number1=number.repeat(2);
console.log("repeatation:",number1);