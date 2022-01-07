class DrumKit {
  constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.playBtn = document.querySelector(".play");

    this.kickAudio = document.querySelector(".kick-sound");
    this.snareAudio = document.querySelector(".snare-sound");
    this.hihatAudio = document.querySelector(".hihat-sound");

    this.index = 0;
    this.bpm = 180;

    this.loop = undefined;
  }

  repeat() {
    let step = this.index % 13;
    if (this.index > 100) {
      this.index = step;
    }
    this.index++;

    const activeBars = document.querySelectorAll(`.b${step}`);
    activeBars.forEach((bar) => {
      bar.style.animation = `playTrack 0.3s alternate ease-in-out 2`;
      if (bar.classList.contains("active")) {
        if (bar.classList.contains("kick-pad")) {
          this.kickAudio.currentTime = 0;
          this.kickAudio.play();
        }
        if (bar.classList.contains("snare-pad")) {
          this.snareAudio.currentTime = 0;
          this.snareAudio.play();
        }
        if (bar.classList.contains("hihat-pad")) {
          this.hihatAudio.currentTime = 0;
          this.hihatAudio.play();
        }
      }
    });
  }

  start() {
    if (this.loop) {
      clearInterval(this.loop);
      this.loop = undefined;
      this.index = 0;
    } else {
      const interval = (1000 * 60) / this.bpm;
      this.loop = setInterval(() => {
        this.repeat();
      }, interval);
    }
  }

  activePad(event) {
    event.target.classList.toggle("active");
  }
}

const drumKit = new DrumKit();

drumKit.playBtn.addEventListener("click", function () {
  drumKit.start();
});

drumKit.pads.forEach((pad) => {
  pad.addEventListener("click", drumKit.activePad);
  pad.addEventListener("animationend", function () {
    this.style.animation = "";
  });
});
