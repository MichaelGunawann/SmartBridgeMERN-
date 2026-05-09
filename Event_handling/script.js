const clickBtn = document.getElementById("ClickBtn");
const hoverBox = document.getElementById("hoverBox");
const output = document.getElementById("output");
const textInput = document.getElementById("textInput");
const colorSelect = document.getElementById("colorSelect");
const demoForm = document.getElementById("demoForm");
const nameInput = document.getElementById("nameInput");

// click
clickBtn.addEventListener("click", () => {
    output.textContent = "Button clicked!";
    output.style.backgroundColor = "lightblue";
});

// mouse
hoverBox.addEventListener("mouseover", () => {
    output.textContent = "Mouse is over the box!";
});

hoverBox.addEventListener("mouseout", () => {
    output.textContent = "Mouse left the box!";
});

// input
textInput.addEventListener("input", () => {
    output.textContent = `Input: ${textInput.value}`;
});

// change
colorSelect.addEventListener("change", () => {
    output.textContent = `Selected color: ${colorSelect.value}`;
});

// keyup
nameInput.addEventListener("keyup", (event) => {
    output.textContent = "Last key typed: " + event.key;
});

// focus blur
textInput.addEventListener("focus", () => {
    output.textContent = "Input focused";
    textInput.style.backgroundColor = "lightyellow";
});

textInput.addEventListener("blur", () => {
    output.textContent = "Input lost focus";
    textInput.style.backgroundColor = "";
});

// submit
demoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    output.textContent = `Form submitted with name: ${nameInput.value}`;
});