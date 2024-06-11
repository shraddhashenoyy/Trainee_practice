let modeButton=document.querySelector("#mode1");
let Mode="light";

modeButton.addEventListener("click",() => {
    if(Mode==="light"){
        Mode="dark";
    }
    else{
        Mode="light";
    }
    console.log(Mode);

});