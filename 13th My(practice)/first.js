//for of loops(strings and arrays)
//Example-1
let str="Shraddha";
console.log("Entered String is:",str);

for(let string of str){
    console.log(string);
}
console.log("\n");

//Example-2
let array=["a","b","c","d"];
console.log("The array:",array);

for(let arrays of array){
    console.log(arrays);
}
console.log("\n");

//Example-3
let string1="12345";
let length=0;
console.log("string1:",string1);
for(let str of string1){
    console.log(str);
    length++;
}
console.log("length of string:",length);