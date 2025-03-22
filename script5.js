const fruits = fruits["apple","banana","orange","melon"];
let word = fruits[Math.floor(Math.random()*fruits.length)];
let guessedWord=Array(word.length).fill('_');
function checkLetter(){
  const guessInput=document.getElementById('guess');
  const letter= guessInput.value.toLowerCase();
  guessInput.value=";"
  if(word.includes(letter)){
    for (let i=0;i<word.length;i++){
      if(word[i]===letter){
        guessedWord[i]=letter;
      }
    }
document.getElementById('puzzle').textContent=guessedWord.join('');
if(!guessedWord.includes('_')){
  document.getElementById('message').textContent="You win!";
}
}else{
  document.getElementById('message').textContent="Wrong Guess!";
}
}
