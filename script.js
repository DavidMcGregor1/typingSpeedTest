const words = [
  "cat",
  "dog",
  "book",
  "tree",
  "moon",
  "fish",
  "rain",
  "bird",
  "star",
  "ship",
  "ball",
  "desk",
  "lamp",
  "shoe",
  "duck",
  "ring",
  "fire",
  "rose",
  "leaf",
  "cake",
  "fork",
  "moon",
  "baby",
  "bell",
  "door",
  "frog",
  "hat",
  "kite",
  "nest",
  "pear",
  "ring",
  "sock",
  "time",
  "worm",
  "yarn",
  "cloud",
  "leaf",
  "tiger",
  "apple",
  "chair",
  "glove",
  "heart",
  "horse",
  "jelly",
  "mango",
  "ocean",
  "piano",
  "river",
  "sugar",
  "table",
  "brush",
  "candy",
  "dream",
  "flame",
  "guitar",
  "honey",
  "island",
  "jacket",
  "key",
  "lemon",
  "melon",
  "music",
  "ocean",
  "pencil",
  "quill",
  "rabbit",
  "saddle",
  "tooth",
  "unicorn",
  "violet",
  "whale",
  "yellow",
  "zeppelin",
  "apple",
  "banana",
  "cookie",
  "dolphin",
  "elephant",
  "flamingo",
  "giraffe",
  "hamburger",
  "iguana",
  "jellyfish",
  "kiwi",
  "lizard",
  "muffin",
  "narwhal",
  "octopus",
  "penguin",
  "strawberry",
  "tulip",
  "urchin",
  "vulture",
  "walnut",
  "yogurt",
  "zebra",

  "that",
  "who",
  "where",
  "did",
  "looks",
  "is",
  "the",
  "then",
  "and",
  "but",
  "with",
  "for",
  "so",
  "not",
  "you",
  "we",
  "they",
  "he",
  "she",
  "it",
  "can",
  "will",
  "would",
  "should",
  "may",
  "might",
  "must",
  "could",
  "shall",
  "ought",
];
const sentenceLength = 10;

const startButton = document.getElementById("start-button");
const sentenceElement = document.getElementById("sentence");
const inputBox = document.getElementById("input-box");
const resultElement = document.getElementById("result");

startButton.addEventListener("click", startGame);

function generateRandomSentence() {
  const randomWords = [];
  for (let i = 0; i < sentenceLength; i++) {
    const randomIndex = Math.floor(Math.random() * words.length);
    randomWords.push(words[randomIndex]);
  }
  return randomWords.join(" ");
}

function startGame() {
  const sentence = generateRandomSentence();
  sentenceElement.textContent = sentence;
  inputBox.value = "";
  inputBox.disabled = false;
  inputBox.focus();
  startButton.disabled = true;

  const startTime = Date.now();

  inputBox.addEventListener("input", function () {
    const typedText = inputBox.value.trim();
    if (typedText === sentence) {
      const endTime = Date.now();
      const elapsedTime = (endTime - startTime) / 1000; // in seconds
      const wordsPerMinute = (sentenceLength / elapsedTime) * 60;

      resultElement.textContent = `Average Words Per Minute: ${wordsPerMinute.toFixed(
        2
      )}`;

      inputBox.removeEventListener("input", arguments.callee);
      inputBox.disabled = true;
      startButton.disabled = false;
    }
  });
}
