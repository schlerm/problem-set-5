/*
 * Mario. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style half-pyramid of that height.
 *
 *     ##
 *    ###
 *   ####
 *  #####
 * ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function mario() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 1 CODE HERE

while(true){
  height=prompt("Enter an integer between 1 and 23")
  height=Number(height)
  if(height >= 1 && height <= 23 && Number.isInteger(height)){
    break
  }
};
let hashtag='#'
let lines='<code>'
let spaces=height-2
let i=1
while(i<=height){
  let a=" "
  for(let b=0;b<=spaces;b++){
    a+="&nbsp;"
  }
  spaces--
  hashtag+="#"
  lines=lines+a+hashtag+"</br>"
  i++
}
lines=lines+"</code>";
console.log(lines);
document.getElementById("mario-easy-output").innerHTML=lines;

  ////////////////////////// DO NOT MODIFY
  check('mario', height); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Mario, Again. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style pyramid of that height.
 *
 *     ##  ##
 *    ###  ###
 *   ####  ####
 *  #####  #####
 * ######  ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function marioAgain() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 2 CODE HERE

  while (true){
     height=prompt("Enter an integer between 1 and 23.");
     height=Number(height);
     if(height>=1 && height<=23 && Number.isInteger(height)){
       break
     }
   };
   let i=1;
   let hashtag='#';
   let lines="<code>";
   let spaces_Before=height-2;
   let spaces_After='&nbsp'+'&nbsp';
   while (i<=height){
     let a='';
     for(let j=0;j<=spaces_Before;j++) {
       a+='&nbsp;';
     }
     spaces_Before--;
     hashtag=hashtag+'#';
     lines=lines+a+hashtag+spaces_After+hashtag+"</br>";
     i++;
   }
   document.getElementById("mario-hard-output").innerHTML=lines;
 lines=lines+"</code>"

  //////////////////////////////// DO NOT MODIFY
  check('mario-again', height); // DO NOT MODIFY
  //////////////////////////////// DO NOT MODIFY
}

/*
 * Credit. 10 points.
 *
 * Write a function that prompts the user for a credit card number (valid
 * and invalid examples will be provided), and displays either:
 *   - an invalid image (provided)
 *   - an American Express image (provided)
 *   - a Mastercard image (provided)
 *   - a Visa image (provided)
 *
 * We'll use Luhn's algorithm to determine the validity of a credit card
 * number. Review the steps of the algorithm below.
 *
 *   0. Multiply every other digit by 2, starting with the number’s
 *      second-to-last digit, and then add those products' digits together.
 *   1. Add the sum to the sum of the digits that weren’t multiplied by 2.
 *   2. If the total’s last digit is 0 (or, put more formally, if the total
 *      modulo 10 is congruent to 0), the number is valid!
 *
 * American Express uses 15-digit numbers, starting with 34 or 37.
 * Mastercard uses uses 16-digit numbers, starting with 51, 52, 53, 54,
 * or 55. Visa uses 13- or 16-digit numbers, starting with 4.
 *
 * 378282246310005 should verify as American Express.
 * 371449635398431 should verify as American Express.
 * 5555555555554444 should verify as Mastercard.
 * 5105105105105100 should verify as Mastercard.
 * 4111111111111111 should verify as Visa.
 * 4012888888881881 should verify as Visa.
 *
 * Credit card numbers must be integers. Users should be continuously
 * re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function credit() {

  //////////// DO NOT MODIFY
  let card; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 3 CODE HERE

while(true){
  card=prompt("Enter your credit card number")
  if(card.length==13 || card.length==15 || card.length==16 && Number.isInteger(Number(card)))
  break}

let sum1=0
let sum2=0

for(let i=card.length-2; i >= 0; i-=2){
  let cardNum=Number(card[i])*2
  let cardString=cardNum.toString()
  let sum=0
    for(let j=0;j<cardString.length; j++){
      sum=sum+Number(cardString[j])
    }
    sum1=sum1+sum
}

for(v=card.length-1;v>=0;v-=2){
sum2=sum2+Number(card[v]);
}

let totalSum=sum1+sum2

if(card.length==15 && (card[0]==3 && (card[1]==4 || card[1]==7)) && totalSum%10==0){
 document.getElementById("credit-output").innerHTML="<img src ='./images/amex.png'/>";
} else if ((card.length==16 || card.length==13) && card[0]==4 && totalSum%10==0){
 document.getElementById("credit-output").innerHTML="<img src ='./images/visa.png'/>";
}  else if(card.length==16 && card[0]==5 && (card[1]==1 || card[1]==2 || card[1]==3 || card[1]==4 || card[1]==5) && totalSum%10==0){
 document.getElementById("credit-output").innerHTML="<img src ='./images/mastercard.png'/>";
}  else {
document.getElementById("credit-output").innerHTML="<img src ='./images/invalid.png'/>"; }

card=Number(card);

  /*
   * NOTE: After reading in the card number and storing it in the 'card'
   *       variable, do not modify it. If you find it necessary to manipulate
   *       this value, you will need to create a second variable to serve
   *       as a copy of the 'card' variable.
   */

  ///////////////////////// DO NOT MODIFY
  check('credit', card); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Guess. 5 points.
 *
 * Write a function that generates a random number, and asks the user to
 * try to guess this number. When all is said and done, your function
 * should output the random number and the number of attempts it took the
 * user to correctly guess that number. Your function should also provided
 * helpful hints, indicating whether the most recent guess was greater than
 * or less than the target.
 *
 * Random numbers must be between 1 and 1000. User guesses must be integers
 * within the range [1, 1000], and users should be continuously re-prompted
 * until they comply with this restriction. In the event a user guesses
 * something that violates this restriction, an attempt should not be
 * recorded.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function guess() {

  // WRITE YOUR EXERCISE 4 CODE HERE

let number=Math.floor((Math.random()*999)+1)
let attempts=0
let correct=false
while(correct=false){
  let guess= Number(prompt("Guess an integer between 1 and 1,000."))
    if(guess>=1 && guess<=1000 && Number.isInteger(guess)){
      if(guess==answer){
        attempts++
        correct=true
        alert("Correct")
         document.getElementById("guess-output").innerHTML="Number: "+answer+"</br>Attempts: "+attempts;
      }
      else if(guess>answer){
        attempts++
        alert("Too high")
      }
      else if(guess<answer){
        attempts++
        alert("Too low")
      }
    }
}


  ////////////////// DO NOT MODIFY
  check('guess'); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hurricane. 5 points.
 *
 * Write a function that prompts the user to enter a windspeed, and prints
 * the hurricane category (if applicable) for that windspeed. We'll be
 * using the Saffir-Simpson scale, shown below in MPH.
 *   - Category 5: 157+
 *   - Category 4: 130-156
 *   - Category 3: 111-129
 *   - Catgeory 2: 96-110
 *   - Category 1: 74-95
 *   - Tropical Storm: 39-73
 *
 * Windspeeds must be non-negative integers in the range [0, INF), and
 * users should be continuously re-prompted until they comply with this
 * restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function hurricane() {

  ///////////////// DO NOT MODIFY
  let windspeed; // DO NOT MODIFY
  ///////////////// DO NOT MODIFY

  ///////////////////////////////// DO NOT MODIFY
  check('hurricane', windspeed); // DO NOT MODIFY
  ///////////////////////////////// DO NOT MODIFY

while(windspeed<0 || windspeed%1!=0){
   windspeed = prompt("Enter a hurricane windspeed to see what category it's in.")
}


if (windspeed>= 39 && windspeed<=73){
  document.getElementById("hurricane-output").innerHTML="Tropical Storm.";
  }
  else if(windspeed<39){
  document.getElementById("hurricane-output").innerHTML="The skies are calm...";
  }
  else if (windspeed>= 74 && windspeed<=95){
  document.getElementById("hurricane-output").innerHTML="Category 1 Hurricane.";
}
  else if (windspeed>= 96 && windspeed<=110){
  document.getElementById("hurricane-output").innerHTML="Category 2 Hurricane.";
}
  else if (windspeed>= 111 && windspeed<=129){
  document.getElementById("hurricane-output").innerHTML="Category 3 Hurricane.";
}
  else if (windspeed>= 130 && windspeed<=156){
  document.getElementById("hurricane-output").innerHTML="Category 4 Hurricane.";
}
  else if (windspeed>= 157){
  document.getElementById("hurricane-output").innerHTML="Category 5 Hurricane.";
}

windspeed=Number(windspeed);

}

// WINDSPEED WORKS BUT WONT CHECK PROPERLY




/*
 * Gymnastics. 5 points.
 *
 * Write a function that prompts the user to enter six scores. From those
 * six scores, the lowest and highest should be discarded. An average score
 * should be computed from the remaining four. Your function should output
 * the discarded scores, as well as the average score.
 *
 * Scores must be real numbers in the range [0.0, 10.0], and users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function gymnastics() {

  /////////////////// DO NOT MODIFY
  let total = 0; //// DO NOT MODIFY
  let scores = []; // DO NOT MODIFY
  /////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'total' variable should be representative of the sum of all
   *       six of the judges' scores.
   */

  /*
   * NOTE: You need to add each score (valid or not) to the 'scores' variable.
   *       To do this, use the following syntax:
   *
   *       scores.push(firstScore);   // your variable names for your scores
   *       scores.push(secondScore);  // will likely be different than mine
   */

let score0=prompt("Enter the first score, make sure is is between 0 and 10.")
while(score0>10 || score0<0 || Number.isInteger(score0)){
  score0=prompt("Did you follow the parameters?")
}
let score1=prompt("Enter the second score, make sure is is between 0 and 10.")
while(score1>10 || score1<0 || Number.isInteger(score1)){
  score1=prompt("Did you follow the parameters?")
}
let score2=prompt("Enter the third score, make sure is is between 0 and 10.")
while(score2>10 || score2<0 || Number.isInteger(score2)){
  score2=prompt("Did you follow the parameters?")
}
let score3=prompt("Enter the fourth score, make sure is is between 0 and 10.")
while(score3>10 || score3<0 || Number.isInteger(score3)){
  score3=prompt("Did you follow the parameters?")
}
let score4=prompt("Enter the fifth score, make sure is is between 0 and 10.")
while(score4>10 || score4<0 || Number.isInteger(score4)){
  score4=prompt("Did you follow the parameters?")
}
let score5=prompt("Enter the sixth score, make sure is is between 0 and 10.")
while(score5>10 || score5<0 || Number.isInteger(score5)){
  score5=prompt("Did you follow the parameters?")
}

score0=Number(score0)
scores.push(score0)
score1=Number(score1)
scores.push(score1)
score2=Number(score2)
scores.push(score2)
score3=Number(score3)
scores.push(score3)
score4=Number(score4)
scores.push(score4)
score5=Number(score5)
scores.push(score5)

let maxScore = 0
let minScore = 10
for(let n = 0; n < scores.length; n++){
  if(scores[n] > maxScore){
    maxScore = scores[n]
  }
  if(scores[n] < minScore){
    minScore = scores[n]
  }
}

let finalScore = (((scores[0] + scores[1] + scores[2] + scores[3] + scores[4] + scores[5])-maxScore-minScore)/4)
 document.getElementById("gymnastics-output").innerHTML="Discarded: "+minScore+", "+maxScore+"</br>Score: "+finalScore.toFixed(2);
  /////////////////////////////// DO NOT MODIFY
  check('gymnastics', scores); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Report Card. 5 points.
 *
 * Write a function that prompts the user to enter test, quiz, and homework
 * grades for the marking period. Users can enter as many grades of each
 * category, entering -1 to signal they are finished. Your function should
 * output the user's final grade, where tests, quizzes, and homework are
 * weighted at 60%, 30%, and 10%, respectively.
 *
 * Grades must be real numbers in the range [0.0, 100.0], and users should
 * be continuously re-prompted until they comply with this restriction. The
 * only exception is -1, which signals the user is finished entering grades
 * for that category.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function reportCard() {

  ///////////////////////// DO NOT MODIFY
  let testTotal = 0; ////// DO NOT MODIFY
  let quizTotal = 0; ////// DO NOT MODIFY
  let homeworkTotal = 0; // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'testTotal', 'quizTotal', and 'homeworkTotal' variables
   *       should be representative of the sum of the test scores, quiz
   *       scores, and homework scores the user enters, respectively.
   */

  ///////////////////// DO NOT MODIFY
  let tests = 0; ////// DO NOT MODIFY
  let quizzes = 0; //// DO NOT MODIFY
  let homeworks = 0; // DO NOT MODIFY
  ///////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'tests', 'quizzes', and 'homeworks' variables should be
   *       representative of the number of tests, quizzes, and homework
   *       grades the user enters, respectively.
   */

let testGrades=0
while(true){
testGrades= Number(prompt("Please enter test grades. -1 means you are done."))
  if (testGrades==-1){
  break
 }
  else if (testGrades>=0 && testGrades<=100){
    testTotal= Number(testGrades)+testTotal
    tests++
   }
 }

let quizGrades=0
while(true){
quizGrades= Number(prompt("Please enter test grades. -1 means you are done."))
  if(quizGrades==-1){
  break
 }
  else if(quizGrades>=0 && quizGrades<=100){
    quizTotal=Number(quizGrades)+quizTotal
    quizzes++
   }
 }

let homeworkGrades=0
while(true){
homeworkGrades=Number(prompt("Please enter homework grades. -1 means you are done."))
  if(homeworkGrades==-1){
  break
 }
  else if(homeworkGrades>=0 && homeworkGrades<=100){
    homeworkTotal=Number(homeworkGrades)+homeworkTotal
    homeworks++
   }
 }

let testAverage=(testTotal/tests)
let quizAverage=(quizTotal/quizzes)
let homeworkAverage=(homeworkTotal/homeworks)
totalAverage=(testAverage*0.6)+(quizAverage*0.3)+(homeworkAverage*0.1)
document.getElementById("report-card-output").innerHTML = "Tests: " + testAverage.toFixed(2) + "</br>Quizzes: " + quizAverage.toFixed(2) + "</br>Homework: " + homeworkAverage.toFixed(2) + "</br>Grade: " + totalAverage.toFixed(2)
  /////////////////////// DO NOT MODIFY
  check('report-card', // DO NOT MODIFY
    testTotal, ////////// DO NOT MODIFY
    tests, ////////////// DO NOT MODIFY
    quizTotal, ////////// DO NOT MODIFY
    quizzes, //////////// DO NOT MODIFY
    homeworkTotal, ////// DO NOT MODIFY
    homeworks /////////// DO NOT MODIFY
  ); //////////////////// DO NOT MODIFY
  /////////////////////// DO NOT MODIFY
}
