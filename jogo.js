
let secretNumber = Math.floor((Math.random() * 100) + 1);
let attempts = 0;
let gameOver = false;


function checkNumber() {
  if (gameOver) return;

  const guess = Number(document.getElementById("value").value);
  const message = document.getElementById("message");
  attempts++;

  const remaining = 4 - attempts;

  if (guess < 1 || guess > 100 || isNaN(guess)) {
    message.textContent = "Please, choose a number between 1 and 100.";
    return;
  }

  if (attempts === 4 && guess !== secretNumber) {
   message.textContent = `You lost! The secret number was ${secretNumber}`;
  }
  else if (guess > secretNumber) {
    message.textContent = `the number is too high, try again! You have ${remaining} attempts left`;
  }
  else if (guess < secretNumber) {
    message.textContent = `the number is too low, try again! You have ${remaining} attempts left`;
  }
  else {
    message.textContent = `🎉 Congratulations! You guessed it in ${attempts} attempts.`
    ;
    gameOver = true;
  }

}

function restartGame() {
  secretNumber = Math.floor((Math.random() * 100) + 1);
  attempts = 0;
  gameOver = false;

  document.getElementById("value").value = "";
  document.getElementById("message").textContent = "New game started!";
}
