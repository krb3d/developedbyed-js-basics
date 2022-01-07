class DrumKit {
  constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.playBtn = document.querySelector(".play");

    this.kickAudio = document.querySelector("kick-sound");
    this.snareAudio = document.querySelector("snare-sound");
    this.hihatAudio = document.querySelector("hihat-sound");

    this.index = 0;
    this.bpm = 60;
  }

  repeat() {
    let step = this.index % 8;
    if (this.index > 100) {
      this.index = step;
    }

    const activeBars = document.querySelectorAll(`.b${step}`);

    this.index++;
  }

  start() {
    const interval = (1000 * 60) / this.bpm;
    setInterval(() => {
      this.repeat();
    }, interval);
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
});
