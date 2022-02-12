console.log("Start");

const prom = new Promise((resolve, rejext) => {
  setTimeout(() => {
    if (Math.random() > 0.2) {
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

// --------------------
function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("now we have data!");
      resolve({ userEmail: email });
    }, 300);
  });
}
function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["v1", "v2", "v3"]);
    }, 200);
  });
}

function getVideosDetails(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`title ${video}`);
    }, 200);
  });
}

loginUser("Serhii", "p0ss")
  .then((user) => getUserVideos(user))
  .then((videos) => getVideosDetails(videos[0]))
  .then((detail) => console.log(detail));

const yt = new Promise((resolve) => {
  setTimeout(() => {
    console.log("getting stuff from youtube");
    resolve({ videos: [1, 2, 3] });
  }, 2000);
});

const fb = new Promise((resolve) => {
  setTimeout(() => {
    console.log("getting stuff from facebook");
    resolve({ user: "name" });
  }, 1000);
});

Promise.all([yt, fb]).then((result) => console.log(result));

// ASYNC
async function displayUser() {
  try {
    const loggedUser = await loginUser("ed", 123);
    const videos = await getUserVideos(loggedUser.userEmail);
    const detail = await getVideosDetails(videos[0]);
    console.log(`ASYNC details: ${detail}`);
  } catch (err) {
    console.log(`Error! ${err}`);
  }
}

displayUser();
