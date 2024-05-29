// Await
async function newFunction(){
    let myPromise=new Promise(function(myResolve,myReject){
        myResolve("Hello,welcome");
    });
    myPromise.then(result=>{
        console.log(result);
    }

    );
}

newFunction();

