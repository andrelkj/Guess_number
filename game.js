var secretNumber = 1 + parseInt(Math.random() * 1001);

var guessCount = 1;
var guessMax = 10;

while ((guess != secretNumber) & (guessCount <= guessMax)) {
  // ask used to enter a value and store this value inside a variable
  var guess = prompt(
    "Enter a number between 0 to 1000. \nYou'll have 10 attemps."
  );

  if (guess === null) {
    break;
  }

  if (guess == secretNumber) {
    alert(
      "Congratulations you entered the correct value! " +
        `\nAttempt number: ${guessCount}`
    );
    break;
  } else if (guess > secretNumber) {
    alert(
      "The secret number is lower than " +
        guess +
        ". Try again! " +
        `\nAttempt number: ${guessCount}`
    );
  } else if (guess < secretNumber) {
    alert(
      "The secret number is higher than " +
        guess +
        ". Try again! " +
        `\nAttempt number: ${guessCount}`
    );
  }

  guessCount++;

  if (guessCount > 10) {
    alert(
      "You exceed the maximum amount of attempts. Start over and try again!"
    );
  }
}
