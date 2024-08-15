const button = document.querySelector("button");
const output = document.querySelector(".output");
const fetchJokes = async() => {
  const jokes = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  button.textContent='Random Jokes'
  return jokes;
};
button.addEventListener("click", () => {
  button.textContent='Please wait a sec...'

  fetchJokes()
  .then((data) => {
    return data.json();
  })
  .then((data) => (output.textContent = data.joke));
});
