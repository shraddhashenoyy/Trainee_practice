let n=19;
console.log("Entered number:",n);
let isPrime=true;
if(n===0||n===1){
    console.log("Neither prime-number nor composite");
}
else if(n>1){
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i===0){
            isPrime=false;
            break;
        }
    }
    if(isPrime){
        console.log(`${n} is prime-number`);
    }else{
        console.log(`${n} is not prime-number`);
    }
}