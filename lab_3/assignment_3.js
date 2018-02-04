var audioEl = new Audio('http://stream.basso.ﬁ:8000/stream');
audioEl.volume = 0.5;

function onClickPlayAudio() {
  audioEl.play();
}

function onClickPauseAudio() {
  audioEl.pause();
}

function onChangeAudioVolume(event) {
  audioEl.volume = event.target.value;
}
