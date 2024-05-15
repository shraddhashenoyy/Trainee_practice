//Multiplication table
function table(a){
    let multi;
    for(let i=1;i<=10;i++){
        multi=a*i;
        console.log(a,'*',i,'=',multi);
    }
    return multi;
}

let a=2;
console.log("Entered number is:",a);
let result=table(a);