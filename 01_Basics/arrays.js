const listUsers = ["Ed", "Serhii", "John", 1, true]; // object

listUsers[0];

var john = listUsers.pop();
console.log(listUsers); // ed, serhii, John, 1
listUsers.push(john);

var ed = listUsers.shift();
console.log(listUsers); // serhii, john, 1, true
listUsers.unshift(ed);

console.log(listUsers); // "Ed", "Serhii", "John", 1, true

listUsers.length;
listUsers.indexOf("Serhii");
