// Async 
function myFunction(result){
    console.log("Welcome",result);
}

async function newFunction(){
    return "Hello";
}

newFunction().then(
    function(value){myFunction(value);},
    function(error){myFunction(error);}
) ;




