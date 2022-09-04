const word = document.querySelector("#word")
const text = document.querySelector("#text")
const scoreEl = document.querySelector("#score")
const timeEl = document.querySelector("#time")
const endGame = document.querySelector(".end-game-container")
const difficultySelect = document.querySelector("#difficulty")
const settingForm = document.querySelector("#settings-form")
const mainContanier = document.querySelector("#main")


const words = [
    'sigh',
    'tense',
    'airplane',
    'ball',
    'pies',
    'juice',
    "Incomprehensibility",
    "Tergiversation",
    'warlike',
    'bad',
    'north',
    'dependent',
    'steer',
    'silver',
    'highfalutin',
    'superficial',
    'quince',
    'eight',
    'feeble',
    'admit',
    'drag',
    'loving',
    'pizzas',
    'suburban',
    'assuming',
    'obstinance',
    'foramens',
    'apprehension',
    "Fuming",
    "Mutinous",
    "Omniscient",
    "Ameliorate",
    "Impetuous",
    "Scrumptious",
    "Dossier",
    "Incubus",
    "Inquisitive",
    "Hypocritical",
    "Stroll",
    "Avocation",
    "Ebullient",
    "Coercive",
    "Umbrage",
    "Censorious",
    "Reverent",
    "Diligence",
    "Swimmingly",
    "Ratify",
    "Feisty",
    "Middling",
    "Gingerly",
    "Audacious",
    
];

let randomWord;

let score = 0
let time = 10

let difficulty =
    localStorage.getItem(`difficulty`) !== null ?
    localStorage.getItem(`difficulty`) :
    'medium';

difficultySelect.value =
    localStorage.getItem('difficulty') !== null ?
    localStorage.getItem('difficulty') :
    'medium';

text.focus();

const timeInterval = setInterval(updateTime, 1000);

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function addWordToDOM() {
    var randomWord = getRandomWord()
    word.innerHTML = randomWord
    return randomWord
}

function updateScore() {
    score++
    scoreEl.innerHTML = score;
}

function updateTime() {
    time--
    timeEl.innerHTML = time + "s"

    if (time === 0) {
        clearInterval(timeInterval)
        gameOver()
    }

}

function gameOver() {
    mainContanier.innerHTML = `
      <h1>Ooops! Time ran out</h1>
      <h3>Mode: ${difficulty}</h3>
      <h3>Your final score is ${score}</h3>
      <button onclick="location.reload()">Reload</button>
    `;

}

addWordToDOM();



inputWord = addWordToDOM();
text.addEventListener('input', e => {
    const insertedText = e.target.value;
    console.log(inputWord)

    if (insertedText.toLowerCase() === inputWord.toLowerCase()) {
        console.log("yes")
        inputWord = addWordToDOM();
        updateScore();

        // Clear
        e.target.value = '';

        if (difficulty === 'hard') {
            time += 2;
        } else if (difficulty === 'medium') {
            time += 3;
        } else {
            time += 5;
        }

        updateTime();
    }
});

settingForm.addEventListener('change', e => {
    difficulty = e.target.value;
    localStorage.setItem('difficulty', difficulty);
});