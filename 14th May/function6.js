//Factors of a number

function factors(a){
    console.log("The factors are:");
    for(let i=1;i<=a;i++){
        if(a%i==0){
            console.log(i);
        }
    }
    return a;
}
let a=25;
console.log("Entered number is:",a);
let FACTORS=factors(a);
