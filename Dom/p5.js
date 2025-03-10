// Get references to the elements
const outerDiv = document.getElementById("outer");
const innerDiv = document.getElementById("inner");
const button = document.getElementById("button");

// Add event listeners to each element
outerDiv.addEventListener(
  "click",
  () => {
    console.log("Outer Div - Capturing");
  },
  true // Use capturing phase
);

innerDiv.addEventListener(
  "click",
  () => {
    console.log("Inner Div - Capturing");
  },
  true // Use capturing phase
);

button.addEventListener(
  "click",
  () => {
    console.log("Button - Capturing");
  },
  true // Use capturing phase
);

// Add event listeners for the bubbling phase
outerDiv.addEventListener("click", () => {
  console.log("Outer Div - Bubbling");
});

innerDiv.addEventListener("click", () => {
  console.log("Inner Div - Bubbling");
});

button.addEventListener("click", () => {
  console.log("Button - Bubbling");
});
