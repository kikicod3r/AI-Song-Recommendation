function suggestSong(event) {
  event.preventDefault();
  alert("Finding a song...");
}

let songButtonElement = document.querySelector("#song-button");
songButtonElement.addEventListener("submit", suggestSong);
