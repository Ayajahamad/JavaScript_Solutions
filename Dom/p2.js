let btn = document.getElementById("btn")


function handleClick(params) {
    alert("hello")
}

btn.addEventListener('click', handleClick)
btn.removeEventListener('click', handleClick)

// -----------------------

let button = document.getElementById("add");
let list = document.getElementById("list");

button.addEventListener("click", function () {
  let newItem = document.createElement("li");
    newItem.textContent = `Item ${list.children.length + 1}`;
    console.log(list);
  list.appendChild(newItem);
});
