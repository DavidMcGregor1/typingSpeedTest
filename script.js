const words = [
  "apple",
  "banana",
  "orange",
  "grape",
  "strawberry",
  "kiwi",
  "pear",
  "melon",
  "peach",
  "plum",
  "cat",
  "dog",
  "rabbit",
  "hamster",
  "guinea",
  "pig",
  "parrot",
  "fish",
  "turtle",
  "lizard",
  "tree",
  "flower",
  "grass",
  "bush",
  "rose",
  "tulip",
  "daisy",
  "sunflower",
  "ivy",
  "fern",
  "car",
  "bus",
  "train",
  "bike",
  "motorcycle",
  "truck",
  "scooter",
  "boat",
  "airplane",
  "helicopter",
  "book",
  "pen",
  "pencil",
  "notebook",
  "paper",
  "marker",
  "eraser",
  "crayon",
  "scissors",
  "glue",
  "happy",
  "sad",
  "angry",
  "excited",
  "tired",
  "nervous",
  "calm",
  "bored",
  "surprised",
  "content",
  "ocean",
  "river",
  "lake",
  "pond",
  "stream",
  "waterfall",
  "beach",
  "island",
  "cave",
  "desert",
  "mountain",
  "hill",
  "valley",
  "canyon",
  "forest",
  "jungle",
  "field",
  "meadow",
  "savanna",
  "tundra",
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

let currentIndex = 0;
let startTime, endTime;

const startButton = document.getElementById("start-button");
const sentenceContainer = document.getElementById("sentence-container");
const userInput = document.getElementById("user-input");
const result = document.getElementById("result");

startButton.addEventListener("click", startGame);

function startGame() {
  currentIndex = 0;
  userInput.value = "";
  result.textContent = "";

  shuffleWords();
  displaySentence();

  userInput.removeAttribute("disabled");
  userInput.focus();
  userInput.addEventListener("input", checkInput);

  startTime = new Date();
}

function shuffleWords() {
  for (let i = words.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [words[i], words[j]] = [words[j], words[i]];
  }
}

function displaySentence() {
  const randomWordCount = Math.floor(Math.random() * 10) + 5; // Random word count between 5 and 14
  const randomSentence = words
    .slice(currentIndex, currentIndex + randomWordCount)
    .join(" ");
  sentenceContainer.textContent = randomSentence;
}

function checkInput() {
  const typedText = userInput.value;
  const currentSentence = sentenceContainer.textContent;

  if (typedText === currentSentence) {
    userInput.classList.remove("incorrect");
    userInput.classList.add("correct");
    currentIndex += currentSentence.split(" ").length;

    if (currentIndex < words.length) {
      userInput.value = ""; // Clear the text box
      displaySentence();
    } else {
      endGame();
    }
  } else {
    userInput.classList.remove("correct");
    userInput.classList.add("incorrect");
  }
}

function endGame() {
  endTime = new Date();
  userInput.setAttribute("disabled", true);

  const elapsedTime = (endTime - startTime) / 1000; // in seconds
  const wordsPerMinute = Math.round((words.length / elapsedTime) * 60);

  result.textContent = `Average Words Per Minute: ${wordsPerMinute}`;
}
