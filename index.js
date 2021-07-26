const readlineSync = require('readline-sync')
const chalk = require('chalk')
let score = 0;

//Welcome the user and tell
//them about the rules of the game
function greeting(){
  let userName = readlineSync.question("What's your name?:\n")
  console.log(chalk.bgMagenta("Hi " + userName))
  console.log(chalk.bgYellow('Welcome to "DO YOU KNOW ME?"'))
  console.log("--------------------------------------------")
  console.log("The game is simple. There will be 5 questions related to football")
  console.log("Each question will have 3 options to choose from")
  console.log("--------------------------------------------")
  console.log("You can choose the correct option \nby typing the correct number of the option")
  console.log("For example: If you think that option 2 \nis correct then press 2 and enter")
  console.log("--------------------------------------------")
  console.log(chalk.green("Right Answer = +2 points"))
  console.log(chalk.red("Wrong Answer = -1 points"))
  console.log(chalk.yellow("You can also skip the question by pressing 0"))
  console.log("--------------------------------------------\n\n\n")
}

const question1 = {q:"Who is the player with the most Balon D'ors?\n1.)Ronaldo\n2.)Messi\n3.)Henry\n0.)SKIP\n", a:"2"}

const question2 = {q:"Which club has the most Premier League titles?\n1.)Manchester United\n2.)Manchester City\n3.)Liverpool\n0.)SKIP\n", a:"1"}

const question3 = {q:"In what year did Arsenal win the invincible title?\n1.)2003\n2.)2004\n3.)2005e\n0.)SKIP\n", a:"2"}

const question4 = {q:"In what year was the first ever football world cup played?\n1.)1922\n2.)1934\n3.)1930\n0.)SKIP\n", a:"3"}

const question5 = {q:"In 2012, Messi broke the record for the most goals scored in a calender year. Whose record did he break?\n1.)Gerd Muller\n2.)Cristiano Ronaldo\n3.)Pele\n0.)SKIP\n", a:"1"}

const allQuestions = [question1, question2, question3, question4, question5]

//Function to ask questions and check for answers
function askQuestions(questions){

  for(let i = 0; i<questions.length; i++){

    //Ask Question
    let answer = readlineSync.question(questions[i].q)

    //Check for Answer
    if (answer == questions[i].a){
      console.log(chalk.green("Correct"))
      score = score + 2
      console.log(chalk.bgGreen(" Score: " + score +" "))
      console.log('\n\n')
    }else if(answer == 0){
      console.log(chalk.yellow("Skip"))
      score = score
      console.log(chalk.bgYellow(" Score: " + score +" "))
      console.log('\n\n')
    }else{
      console.log(chalk.red("Wrong"))
      score = score - 1
      console.log(chalk.bgRed(" Score: " + score +" "))
      console.log('\n\n')
    }
  }

  finalResult(score);
}

//Tell the user their final score and related information 
function finalResult(score){
  if(score<=2){
    console.log(chalk.bgRed(" Your final score is: " + score + " "))
    console.log("It doesnt seem like you are a football fan")
  }
  else if(score<=8){
    console.log(chalk.bgYellow(" Your final score is: " + score + " "))
    console.log("You did good on the quiz")
  }
  else if(score<=10){
    console.log(chalk.bgGreen(" Your final score is: " + score + " "))
    console.log("You are a true football fan")
  }
}

greeting()
askQuestions(allQuestions)