function user() {
  const name = "serhii";

  const displayName = function (greeting) {
    console.log(greeting + " " + name);
  };

  return displayName;
}

const say = user();
// user function is pop off the stack and not here anymore, but keeps state with binded variables because displayName is saved in say
say("hi");
