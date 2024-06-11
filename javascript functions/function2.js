// Promise syntax
// Example-1
function myFunction(result){
    console.log("The example of Promise is",result);

}
// Producing the code
let myPromise=new Promise(function(myResolve,myReject){
    let x=0;
    if(x==0){
       myResolve("OK");
    }else{
       myReject("Error");
    }
}
);
// Consuming the code
myPromise.then(
    function(value){myFunction(value);},
    function(error){myFunction(error);}
) ;


