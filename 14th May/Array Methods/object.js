//this method
const student={
    fullName:"shraddha",
    marks:66,
   
    printMarks:function(){
        console.log("marks: ",this.marks);
    },
};

//object
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName:function(){
        return this.firstName;
    },
};
let result=person.fullName;
console.log(result);