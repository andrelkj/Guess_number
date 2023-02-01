var secretNumber = parseInt(Math.random() * 1001)

var guessCount = 1

while (guessCount < 10) {
  
while(guess != secretNumber) {

// ask used to enter a value and store this value inside a variable
var guess = prompt('Enter a number between 0 to 1000')

if (guess == secretNumber) {
  alert("Congratulations you entered the correct value! " +  (`Attempt: ${guessCount}`))
}    

else if(guess > secretNumber) {
  alert("The secret number is lower than " + guess + ". Try again! " + (`Attempt: ${guessCount}`))
}

else if(guess < secretNumber) {
  alert("The secret number is higher than " + guess + ". Try again! " + (`Attempt: ${guessCount}`))
  }
  
  guessCount++
  
  }
  
}

// Finalizar o código
// Adicionar contador de tentativas
// Remover 0 das opções
// Qual a quantidade máxima possível de tentativas?


  


