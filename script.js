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
