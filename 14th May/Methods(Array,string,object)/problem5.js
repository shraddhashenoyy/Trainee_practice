//Array every()
//1.Example-1
const marks=[22,66,88,99];
console.log("Entered marks:",marks);

function studentMark(marks){
    if(marks>85){
        console.log("Distinction");
    }
}

let result=marks.every(studentMark);
console.log("Final Result:",result);

//2.Example-2
const marks1=[100,10,444];
console.log("Entered Marks1:",marks1);

function studentMarkk(marks1){
    if(marks1>77){
        console.log("Pass");
    }
}

let result1=marks1.every(studentMarkk);
console.log("Final Result:",result1);
