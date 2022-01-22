const playerButton = document.querySelector('.player-button'),
      audio = document.querySelector('audio'),
      playIcon = `
      <img class="button-icon" src="Play.png">
      `,
      pauseIcon = `
      <img class="button-icon" src="Pause.png">
      `;

function toggleAudio () {
  if (audio.paused) {
    audio.play();
    playerButton.innerHTML = pauseIcon;
  } else {
    audio.pause();
    playerButton.innerHTML = playIcon;
  }
}

playerButton.addEventListener('click', toggleAudio)

function audioEnded () {
  playerButton.innerHTML = playIcon;
}
      
audio.onended = audioEnded;

const timeline = document.querySelector('.timeline');

function changeTimelinePosition () {
  const percentagePosition = (100*audio.currentTime) / audio.duration;
  timeline.style.backgroundSize = `${percentagePosition}% 100%`;
  timeline.value = percentagePosition;
}

audio.ontimeupdate = changeTimelinePosition;

function changeSeek () {
  const time = (timeline.value * audio.duration) / 100;
  audio.currentTime = time;
}

timeline.addEventListener('change', changeSeek);

const soundButton = document.querySelector('.sound-button'),
      soundIcon = `
      <img class="button-icon" src="Volume.png">`,
      muteIcon = `
      <img class="button-icon" src="Volume off.png">`;

function toggleSound () {
  audio.muted = !audio.muted;
  soundButton.innerHTML = audio.muted ? muteIcon : soundIcon;
}
      
soundButton.addEventListener('click', toggleSound);