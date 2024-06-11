//1. try-catch error
// try{
//     console.log(a);
// }
// catch(err){
//     console.log(err.name);
//     console.log(err.message);
// }

// let num=4;
// console.log(num);


// 2.throw error
try{
let res=prompt("Are you a Robot");
 if(res==="yes"){
    throw{
        name:'Anuj'
    };
 }
}catch(error){
    console.log(error);
}