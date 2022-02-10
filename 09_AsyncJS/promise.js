console.log("Start");

const prom = new Promise((resolve, rejext) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve({ user: "Mini Me" });
    } else {
      rejext(new Error("naaaa :("));
    }
  }, 200);
});

prom
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.error(error);
  });

console.log("Finish");
