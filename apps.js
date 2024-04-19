let input = document.getElementById("myInput");
let output = document.getElementById("output");

let butt = document.getElementById("myButton");

let inputValue = "";

input.addEventListener("keyup", (event) => {
    inputValue = event.target.value;
    
    output.innerText = inputValue

})

butt.addEventListener("click", () => {
    alert("button clicked")
    console.log("just testing")
})