const list = document.getElementById("list");
const counter = document.getElementById("counter");
const addItemButton = document.getElementById("add-item");

// Function to update the counter
function updateCounter() {
  counter.textContent = list.children.length;
}

// Function to add a new item
function addItem() {
  const listItem = document.createElement("li");
  listItem.textContent = `Item ${list.children.length + 1}`;
  
  // Add a delete button to each list item
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Remove";
  deleteButton.onclick = function () {
    list.removeChild(listItem);
    updateCounter();
  };

  listItem.appendChild(deleteButton);
  list.appendChild(listItem);
  updateCounter();
}

// Add event listener for the "Add Item" button
addItemButton.addEventListener("click", addItem);

// Initialize the counter
updateCounter();