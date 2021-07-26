const readlineSync = require('readline-sync')
const chalk = require('chalk')

const question1 = {q:"Who is the player with the most Balon D'ors?\n1.)Ronaldo\n2.)Messi\n3.)Henry\n0.)SKIP\n", a:"2"}

const question2 = {q:"Which club has the most Premier League titles?\n1.)Manchester United\n2.)manchester City\n3.)Liverpool\n0.)SKIP\n", a:"1"}

const question3 = {q:"In what year did Arsenal won the invincible title?\n1.)2003\n2.)2004\n3.)2005e\n0.)SKIP\n", a:"2"}

const question4 = {q:"In what year was the first ever football world cup played?\n1.)1922\n2.)1934\n3.)1930\n0.)SKIP\n", a:"3"}

const question5 = {q:"In 2012, Messi broke the record for the most goals scored in a calender year. Whose record did he break?\n1.)Gerd Muller\n2.)Cristiano Ronaldo\n3.)Pele\n0.)SKIP\n", a:"1"}

const allQuestions = [question1, question2, question3, question4, question5]