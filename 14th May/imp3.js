//Method to write a function
//Example-1
function myFunction(){
    console.log("Hii,hello!!");
    console.log("Welcome to the world!");
}

myFunction();


//Example-2
function myFunction1(msg){
    console.log(msg);
}
myFunction1("Welcome to Javascript Course");//arguments

//Add two numbers
function sum(a,b){//parameters become the local variables
    Add=a+b;
    return Add;
}

let result=sum(3,5);
console.log("Sum of two numbers: ",result);
