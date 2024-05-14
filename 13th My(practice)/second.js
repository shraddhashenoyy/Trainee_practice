//for-in loops(objects)
//Example-1
let Student={
    marks:100,
    cgpa:8.0,
    age:20,
};

for (answer in Student){
    console.log(answer);
}
console.log("\n");

//Example-2
let marks={
    mark1:55,
    mark2:101,
    mark3:66,
};

for(value in marks){
    console.log(value,marks[value]);
}