
let heading = document.getElementById("heading");
console.log(heading.textContent);

let second = document.getElementById("second")


let btn = document.getElementById("btn")

btn.addEventListener('click', () => {
    const inp = document.getElementById("text").value
    
    second.innerHTML = inp

    alert("hello "+ inp)
    console.log(inp);
})