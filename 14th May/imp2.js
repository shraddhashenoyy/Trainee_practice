//largest in the array
let array=[2,7,8,4,3,1];
console.log("Entered array:",array);

let largest=array[0];
for(let i=1;i<array.length;i++) {
    if(array[i]>largest) {
        largest=array[i];
    }
}

console.log("Largest number in the array:", largest);


//similarly smallest among the array
let array1=[2,7,8,4,3,1];
console.log("Entered array:",array1);
let smallest=array[0];
for(let i=1;i<array.length;i++) {
    if(array[i]<smallest){
        smallest=array[i];
    }
}
console.log("Smallest number in the array:", smallest);

