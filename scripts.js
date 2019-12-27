

// VARIABLES
let addTaskButton = document.getElementById('addTask');
let input = document.getElementById("userTaskInput");
let taskList = document.getElementById('taskList');

// EVENT LISTENERS
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        addTaskButton.click();
    }
});


//Adding a task as a list item and appending it to the ul ALSO adding a remove button
addTaskButton.addEventListener('click', function(event) {
  if (document.getElementById("userTaskInput").value === "") {
    alert("Please enter a task");
  } else {
    let listItem = document.createElement('LI');
    listItem.innerHTML = "<span class='listItemText'>" + document.getElementById("userTaskInput").value + "</span>";
    // listItem.innerHTML += "<button type='button' class='btn btn-danger removeButton'> Remove </button>";
    taskList.appendChild(listItem);
    document.getElementById("userTaskInput").value = "";

    let removeButton = document.createElement("BUTTON");
    // removeButton.innerHTML = "\u00D7";
    removeButton.innerHTML = "Remove";
    removeButton.className = "remove btn btn-danger";
    listItem.appendChild(removeButton);

    var remove = document.getElementsByClassName("remove");
    for (i = 0; i < remove.length; i++) {
       remove[i].onclick = function() {
         let div = this.parentElement;
         div.style.display = "none";
       }
     }
  }
});

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('#taskList');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'SPAN') {
    ev.target.parentNode.classList.toggle('checked');
  } else if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
