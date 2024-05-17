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

//