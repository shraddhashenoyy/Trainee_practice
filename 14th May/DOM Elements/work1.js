//program-2
let array=[4,5,6,6,7,8,4,9];
console.log("Entered array:",array);

function duplicates(array){
    let final=[];
    let finalResult=0;
    for(let i=0;i<array.length;i++){
        let flag=false;
        for(let j=0;j<finalResult;j++){
            if(array[i]===final[j]){
                flag=true;
                break;
            }
        }
        if(!flag){
            final[finalResult]=array[i];
            finalResult++;
        }
    }
    return final;
}

let result=duplicates(array);
console.log(result);