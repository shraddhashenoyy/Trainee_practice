const URL="https://cat-fact.herokuapp.com/facts";
const btn=document.querySelector("#btn");

// Fetch Method
// let promise=fetch(URL);
// console.log(promise);

// Using async and await
const getFacts=async()=>{
    console.log("getting data.....");
    let response=await fetch(URL);
    console.log(response);
    // JSON method
    let data=await response.json();
    console.log(data);
    console.log(data[0].text);
}



btn.addEventListener("click",getFacts);
