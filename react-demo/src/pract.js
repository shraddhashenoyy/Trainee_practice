// 1.Palindrome or not
// let str="madam";
// console.log("Entered string:",str);
// let len =str.length;
// console.log("Length of string:",len);

// function palindrome(str){
//     for(let i=0;i<=(len/2);i++){
//         if(str[i]!==str[len-1-i]){
//             return "Not a palindrome";
//         }
//     }
//     return "Palindrome";
// }

// let result=palindrome(str);
// console.log("Result:",result);

// let str="javascript";
// console.log("Entered string:",str);
// let result=str.charAt(0).toUpperCase()+str.slice(1);
// console.log(result);

let student={
    marks:99,
    id1:101,
    college:"NMAMIT",
};
let employee={
    id:33,
    name:"yavan",
    place:"Bangalore",
};
console.log(student);
console.log(typeof student);
let result=student.id;
console.log(result);
if(result){
    console.log("Key Exists");
}
else{
    console.log("No key Exists");
}

console.log("Entered object:");
let copy=student;
console.log(copy);
let copy1=employee;
console.log(copy1);

// To merge two objects
let newObject=Object.assign(student,employee);
console.log(newObject);
let result1={...employee,...student};
console.log(result1);

let person1={
    Firstname:"shraddha",
    NewId:101,
   newCollege:"BMS",
    newPlace:"Bangalore",
};

let student1={
    name:"Shravya",
    id:109,
    college:"BCK",
    place:"Mangalore",
};

// let practiceResult=Object.assign(person1,student1);
// console.log(practiceResult);
// let practiceResult1={...person1, ...student1};
// console.log(practiceResult1);
// let newPractice=Object.assign(student1,person1);
// let newPractice1={...student1, ...person1};
// console.log(newPractice);
// console.log(newPractice1);

// 
let count=0;
for(let i in person1){
    count++;
}
console.log(count);


let newPlace={
    name:"Shraddha",
    lastName:"shenoyyyy",
    id:"4143",
    college:"NMAMIT",
    place:"Bangalore",
};
console.log(newPlace);
console.log(newPlace.lastName);
console.log(typeof newPlace);
let count1=0;
for(let newwww in newPlace){
     count1++;
}
console.log(count1++);


// string and substring
let string="WelcometoNew";
console.log("Entered words:",string);
let subString="Hellooooo";
console.log("Entered subString:",subString);
if(string.startsWith("Helloooo")|| string.endsWith("Helloooo")){
    console.log("Present in the string");
}
else{
    console.log("Not present in the string");
}

// objects into strings
let people={
   places:"Mumbaiiii",
   id:1000000,
   NewFullName:"Shraddhaaashenoyyyyyyy",
};
console.log(people);
console.log(typeof people);
let ImpResult=JSON.stringify(people);
console.log(ImpResult);


let string11="Helloooooooooo";
let string22="Helloooooo";
let stringNew=string11.toUpperCase();
let stringNew1=string22.toUpperCase();
if(stringNew===stringNew1){
    console.log("Both the string are same:");
}
else{
    console.log("Both are not same");
}


// Leap year or not 
let year="2023";
console.log("Entered year:",year);
if(year%400==0 || year%4==0){
    console.log(`${year} is leap-year`);
}
else{
    console.log(`${year} is not-leap-year`);
}

// Array and their methods
let array=[10,11,22,332,6];
array.push(33);
console.log("Entered Array:",array);

