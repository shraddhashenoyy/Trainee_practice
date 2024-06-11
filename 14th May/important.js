//Even number in an array
let array=[67,77,88,33];
console.log("Entered Array:",array);
console.log("The length of an Array:",array.length);
console.log("The Even number are:");
for(let i=0;i<array.length;i++){
    if(array[i]%2==0){
        console.log(array[i]);
    }
}


//even and odd
let array1=[111,3,22,455,66];
console.log("Entered Array:",array1);
for(let i=0;i<array1.length;i++){
    if(array1[i]%2==0){
        console.log(array1[i],"is even");
    }
    if(array1[i]%2==1){
        console.log(array1[i],"is odd");
    }
}
