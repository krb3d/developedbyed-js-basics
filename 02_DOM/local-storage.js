// Stay after refresh
localStorage.setItem("first", "feed the cat");
localStorage.setItem("user", "krb3d");
localStorage.setItem("first", "feed myself"); // will rewrite first

// lost after close/f5
sessionStorage.setItem("todo-session", "Oops!");

const user = localStorage.getItem("user");
console.log(typeof user); // string
console.log(user);

// localStorage.clear();
const todoArray = ["feed the cat", "wash", "listen some music"];
localStorage.setItem("todos", JSON.stringify(todoArray));
const retrieved = JSON.parse(localStorage.getItem("todos"));
console.log(retrieved);
