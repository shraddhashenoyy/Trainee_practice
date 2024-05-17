let button1=document.querySelector("button");
//

// button1.onclick = ()=>{
//     console.log("Hello,world!");
//     let a=25;
//     a++;
//     console.log(a);
// }


// let box=document.querySelector("div");

// box.onmouseover = ()=>{
//     console.log("yes,yes,yes");
// }


//To ADD Event Listeners(Added 4 Event handlers)
button1.addEventListener("click",()=>{
    console.log("button1 was clicked-handler1");
});

button1.addEventListener("click",()=>{
    console.log("button1 was clicked-handler2");
});

const handler3=()=>{
    console.log("button1 was clicked-handler3");
};
button1.addEventListener("click",handler3)

button1.addEventListener("click",()=>{
    console.log("button1 was clicked-handler4");
});

//to remove callback reference should be same
//To remove Event Listeners(here handler-3 is removed)
button1.removeEventListener("click",handler3);

