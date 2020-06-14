// alert("hello from script.js")

// document.getElementById("output").innerHTML = "HELLO WORLD!";

// document.getElementById("output").textContent = "HELLO WORLD!";

// // this will write "Hello World!" at the end of the page
// document.write("Hello World!");

// window.alert("Hello World!");

// console.log("Hello World!");


// var age = 17;
// var mastersYears = 3;
// var current = age + mastersYears;
// window.alert(current);


// var age = 17;
// if (age < 18) {
//   window.alert("Still a minor");
// }

// function computeAge(age, year) {
//   var totalAge = age + year;
//   // return totalAge;
//   window.alert(totalAge);
// }

// window.alert(computeAge(38, 5));

// document.getElementById("output").innerHTML = `<h1>${computeAge(30, 5)}</h1>`


// document.addEventListener("click", function () {
//   computeAge(18, 5);
// });

var count = 1;

document.getElementById("savebtn").addEventListener("click", addToDo);

function addToDo() {
  var todo_item = document.getElementById("todo");

  if (todo_item.value == "") {
    window.alert("Please Add Task");
    todo_item.focus();
  } else {
    appendToDo(todo_item.value);
    // todo_item.value = "";
    // clearField("todo");
  }
}


function appendToDo(todo_item) {
  var ul = document.getElementById("todo-list");
  var li = document.createElement("li");
  // var addItem = todo_item.value;

  li.appendChild(document.createTextNode(count + " " + todo_item));
  li.setAttribute("class", "todo-item");

  ul.appendChild(li);
  clearField("todo");

  setFocus("todo");

  count++;
}

function clearField(field_name) {
  document.getElementById(field_name).value = "";
}

function setFocus(field_name) {
  document.getElementById(field_name).focus();
}