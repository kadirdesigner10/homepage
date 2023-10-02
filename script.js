const input = document.querySelector("#todo");
const btn = document.querySelector("button");
const todosdiv = document.querySelector(".todos");

let todosArr = [];
btn.addEventListener("click", addevent);

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    btn.click();
  }
});
window.onload = () => {
  let x = JSON.parse(localStorage.getItem("todos"));
  console.log(x);
  x.forEach((element) => {
    addtodo(element);
  });
};

function addevent() {
  todosArr.push(input.value);
  localStorage.setItem("todos", JSON.stringify(todosArr));
  addtodo(input.value);
}

function addtodo(todo) {
  let paragraph = document.createElement("p");
  paragraph.textContent = todo;
  todosdiv.appendChild(paragraph);
  input.value = "";
  //-------------------------------------------------------
  paragraph.addEventListener("click", () => {
    paragraph.style.textDecoration = "line-through";
    removeTodo(todo);
  });
  //-------------------------------------------------------
  paragraph.addEventListener("dblclick", () => {
    todosdiv.removeChild(paragraph);
    localStorage.setItem("todos", JSON.stringify(todosArr));
  });
  function removeTodo(todo) {
    let x = todosArr.indexOf(todo);
    if (x > -1) todosArr.splice(x, 1);
  }
}
