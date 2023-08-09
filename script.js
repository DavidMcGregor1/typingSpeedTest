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
