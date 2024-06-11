// Direct Execution
function myFunction(){
    console.log("Hii,hello");
}

function myFunction1(){
    console.log("Welcome!!!");
}
myFunction();
myFunction1();

// Callback function
// Example-1
function myName(){
    console.log("Hii,how are you???");
}

function myName1(num1,num2,callback){
    let sum=num1+num2;
    callback(sum);
    console.log("The sum is:",sum);
}

myName1(5,4,myName);

// Example-2
function myNew(){
    console.log("Welcome to the class of javascript");
}

function myNew1(a,b,callback){
    let diff=a-b;
    console.log("The difference is:",diff);
    callback(diff);
}
myNew1(10,3,myNew);


// Example-3
function myProduct(){
    console.log("Multiplication table:");
}

function myProduct1(callback){
    let n=5;
    for(let i=1;i<=10;i++){
       let multi=n*i;
        console.log(`${n}*${i}=${multi}`);
}
callback();
}

myProduct1(myProduct);