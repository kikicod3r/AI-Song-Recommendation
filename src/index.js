function suggestSong(event) {
  event.preventDefault();

  new Typewriter("#song-suggestion", {
    strings: "My favorite song right now is Jaded by Miley Cyrus",
    autoStart: true,
    cursor: "",
    delay: natural,
  });
}

let songButtonElement = document.querySelector("#song-button");
songButtonElement.addEventListener("submit", suggestSong);
