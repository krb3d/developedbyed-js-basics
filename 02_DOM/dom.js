document.title = "we changed it";

const headers = document.getElementsByTagName("h2"); // HTML Collection
const list = document.getElementsByClassName("item");
const button = document.getElementById("submit");

const headers_first = document.querySelector("h2"); // only first

const headers2 = document.querySelectorAll("h2"); // Node List
const list2 = document.querySelectorAll(".item");
const button2 = document.querySelectorAll("#submit");

const differentTypes = document.querySelectorAll(".topic"); // li + header item

const node = document.querySelector("#todo-list");

// NodeList also include node.childNodes[0].textContent = "not an item"
// and comment node node.childNodes[1]
console.log(node.childNodes); // NodeList
console.log(node.children); // HTMLColelction

const collectionItems = document.getElementsByClassName("item");
const nodesItems = document.querySelectorAll(".item");

console.log("for x of collectionItems:");
for (item of collectionItems) {
  console.log(item);
}

// Error
// collectionItems.forEach(element => {
//     console.log(element);
// });

console.log("for x of nodesItems:");
for (item of nodesItems) {
  console.log(item);
}
console.log("foreach nodesItems:");
nodesItems.forEach((element) => {
  console.log(element);
});

// htmlCollection will update after changes
const todoNr = document.getElementsByClassName("todo-nr")[0];

const newItem = document.createElement("li");
newItem.classList.add("item");
newItem.innerText = "Item 4 added";


todoNr.innerText = collectionItems.length;
document.getElementById("todo-list").appendChild(newItem);
todoNr.innerText = collectionItems.length;

console.log("for x of collectionItems updated:");
for (item of collectionItems) {
  console.log(item);
}
console.log("for x of nodesItems still old:");
for (item of nodesItems) {
  console.log(item);
}

// We can select parent with query - and use .children every time when we need actual list