//Factorial of number
//
function factorial(a){
    let fact=1;
    for(let i=1;i<=a;i++){
        fact=fact*i;
    }
  return fact;
}

let a=5;
console.log("Entered number:",a);
let result=factorial(a);
console.log(result);

//Sum of number
function Sum(a){
    let sum=0;
    for(let i=1;i<=a;i++){
        sum=sum+i;
    }
    return sum;
}
//Global scope
let a1=10;
console.log("Entered integar:",a1);
let SUM=Sum(a1);
console.log(SUM);