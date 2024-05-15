//positive,negative,zero
function number(a){
    if(a>0){
        console.log("positive");
    }
    else if(a<0){
        console.log("Negative");
    }else
    {
        console.log("zero");
    }
return a;
}
let a=25;
console.log("Entered Integar:",a);
let result=number(a);
