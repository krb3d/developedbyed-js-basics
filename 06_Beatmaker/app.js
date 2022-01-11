class DrumKit {
  constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.playBtn = document.querySelector(".play");

    this.currentKick = "./sounds/kick-classic.wav";
    this.currentSnare = "./sounds/snare-808.wav";
    this.currentHihat = "./sounds/hihat-808.wav";
    this.selects = document.querySelectorAll("select");

    this.kickAudio = document.querySelector(".kick-sound");
    this.snareAudio = document.querySelector(".snare-sound");
    this.hihatAudio = document.querySelector(".hihat-sound");

    this.index = 0;
    this.bpm = 180;

    this.loop = undefined;

    this.muteBtn = document.querySelectorAll(".mute");
    this.muteKick = false;
    this.muteSnare = false;
    this.muteHihat = false;

    this.tempoSlider = document.querySelector(".tempo-slider");
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
        if (!this.muteKick && bar.classList.contains("kick-pad")) {
          this.kickAudio.volume = 0.5;
          this.kickAudio.currentTime = 0;
          this.kickAudio.play();
        }
        if (!this.muteSnare && bar.classList.contains("snare-pad")) {
          this.snareAudio.currentTime = 0;
          this.snareAudio.play();
        }
        if (!this.muteHihat && bar.classList.contains("hihat-pad")) {
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
      //this.index = 0;
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

  changeSound(event) {
    const selectionName = event.target.name;
    const selectionValue = event.target.value;
    switch (selectionName) {
      case "kick-select":
        this.kickAudio.src = selectionValue;
        break;
      case "snare-select":
        this.snareAudio.src = selectionValue;
        break;
      case "hihat-select":
        this.hihatAudio.src = selectionValue;
        break;
    }
  }

  mute(event) {
    event.target.classList.toggle("active");
    let isMuteEnabled = event.target.classList.contains("active");

    const muteIndex = event.target.getAttribute("data-track");

    switch (muteIndex) {
      case "kick":
        this.muteKick = isMuteEnabled;
        break;
      case "snare":
        this.muteSnare = isMuteEnabled;
        break;
      case "hihat":
        this.muteHihat = isMuteEnabled;
        break;
    }
  }

  changeTempo(event) {
    this.bpm = event.target.value;
    document.querySelector(".tempo-nr").innerText = this.bpm;
  }

  updateTempo(event) {
    if (this.loop) {
      this.start(); // will disable
      this.start(); // will enable again with a new BPM
    }
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

drumKit.selects.forEach((s) => {
  s.addEventListener("change", function (e) {
    drumKit.changeSound(e); // can't use diractly changeSound as callback because this. will be different
  });
});

drumKit.muteBtn.forEach((s) => {
  s.addEventListener("click", function (e) {
    drumKit.mute(e);
  });
});

drumKit.tempoSlider.addEventListener("input", function (e) {
  drumKit.changeTempo(e);
});

drumKit.tempoSlider.addEventListener("change", function (e) {
  drumKit.updateTempo(e);
});
