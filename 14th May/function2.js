//swapping two numbers
function swap(a,b){
    let temp=a;
    a=b;
    b=temp;
    return[a,b];
  }
  let result=swap(25,5);
  console.log(result);