function showSong(response) {
  new Typewriter("#song-suggestion", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 100,
  });
}

function suggestSong(event) {
  event.preventDefault();
  let userInput = document.querySelector("#user-mood");
  let apiKey = "1687841bccf274a08foafbat6c3f1ff0";
  let prompt = `Please suggest a song including the name of the artist to fit the mood the user is currently feeling from the word ${userInput.value} in basic HTML, separating each sentence with a <br /> element.`;
  let context =
    "You are well versed in all music genres and can suggest a song based off of the user's mood. You know a variety of genres including pop, rock, rap, r&b, country, hip hop, and electronic.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(showSong);
}

let songButtonElement = document.querySelector("#song-button");
songButtonElement.addEventListener("submit", suggestSong);
