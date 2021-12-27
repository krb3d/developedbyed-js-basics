// by convention Upper Case = constructor function
function Todo(name, completed) {
  this.name = name;
  this.completed = completed;
  this.getName = function () {
    return this.name;
  };
}

const todo01 = new Todo("First", false);

console.log(todo01); // Todo {name: 'First', completed: false}
console.log(todo01.getName()); // First

const todo02 = new Todo("Second", false);
// this will create new function for every new instance, not a good way to do big massive of objects
console.log(todo01.getName === todo02.getName); // false

Todo.prototype.getCompleted = function () {
  return this.completed;
};

console.log(todo01.getCompleted === todo02.getCompleted); // true

[1, 2, 3].push(4); // .push() - method of prototype
// ler a = new Array(1, 2, 3);

// Everything is object with prototype but JS hide
const str01 = "aa";
const str02 = new String("bb");

console.log(str01); // aa
console.log(str02); // String {'bb'} with .Prototype

console.log(typeof str01); // string
console.log(typeof str02); // Object
