// Functions - special objects
// Have 3 special methods: bind, call and apply

const eloper = {
  firstName: "Dev",
  lastName: "Eloper",
  logName() {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

eloper.logName();

function registerUserFunc(p1, p2) {
  console.log(this, p1, p2);
}

let register = registerUserFunc; // just set "register" variable, not invoke
register("a", "b"); // Output: Window a b

let registerBinded = registerUserFunc.bind(eloper); // not invoke
registerBinded("c", "d"); // Output: Object c d - we even can use this.logName() inside

registerUserFunc.call(eloper, "e", "f"); //  Output: Object e f - direct call binded to object without proxy variable

registerUserFunc.apply(eloper, ["x", "z"]); // same as .call but params is array - {firstName: 'Dev', lastName: 'Eloper', logName: ƒ} 'x' 'z'
