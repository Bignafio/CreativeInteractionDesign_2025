const word = ["apple", "banana", "orange", "grape", "melon", "kiwi"
];
let word = words[Math.floor(Math.random() * words.length)];

let guessedWord = Array(word.length).fill('_');
let attempts = 0;
const maxAttempts = 6;


function checkLetter() {
    const guessInput = document.getElementById('guess');
    const message = document.getElementById('message');
    const error = document.getElementById('error');
    const puzzle = document.getElementById('puzzle');

    const letter = guessInput.value.toLowerCase();
    guessInput.value = '';

    if (!letter.match(/[a-z]/i)) {
        error.textContent = "Please enter a valid letter.";
        return;
    }

    if (word.includes(letter)) {
        for (let i = 0; i < word.length; i++) {
            if (word[i] === letter) {
                guessedWord[i] = letter;
            }
        }
        puzzle.textContent = guessedWord.join(' ');
        message.textContent = "Good guess!";
        error.textContent = "";

        if (!guessedWord.includes('_')) {
            message.textContent = "Congratulations! You've guessed the word!";
            disableInput();
        }
    } else {
        attempts++;
        error.textContent = "Wrong guess! " + (maxAttempts - attempts) + " attempts left.";
        if (attempts >= maxAttempts) {
            message.textContent = "Game over! The word was \"" + word + "\".";
            disableInput();
        }
    }
}


function disableInput() {
    document.getElementById('guess').disabled = true;
    document.querySelector('button').disabled = true;
}
