const prompt = require('prompt-sync')({sigint: true});
var term = require( 'terminal-kit' ).terminal;

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

const getMove = () => {
    move = prompt('Please select direction to move; Up:u, Down:d, Left:l, Right:r ...');
    return move;
  }

class Field {
  constructor(){
    this.field = []
  };
  // changed .print() method to .generateField() to match Codecademy tasks
  // Also, Codecademy suggest making this a static function
  selectCharacters() {
    console.log('Create playing field:\nEnter any integer\n(try somewhere around 5 - 12) ')
    const height = prompt('   select field height: ');
    const width = prompt('   select field width: ')
    const characterList = [];
    const listLength = height * width;
    characterList.push('^');
  // calculate percentage of Os (~2%?)
    const totalHoles = parseInt(listLength * 0.2);
    for (let i = 0; i < totalHoles; i++) {
        characterList.push('O');
    };
  // calculate number of fieldCaracters to add. minus holes, hat , asterisk
    const totalFieldCharacters = listLength - totalHoles - 2

  // add fieldCharacters to list, leave space for * at beginning
    for (let i = 0; i < totalFieldCharacters; i++) {
      characterList.push('░')
    }
  // randomize elements. This is from stack overflow
  // and to me was clearest method I found.
    for (let i = characterList.length - 1; i > 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1));
      [characterList[i], characterList[rand]] = [characterList[rand], characterList[i]]
    }
  // add pathCharacter at start
    characterList.splice(0,0,'*')

  // calculate number of elements that should be in each row
  // splice off elements from the original array and push into row

    let startingField = [];
    let row = [];
    let numberOfCharacters = characterList.length;
    let rowLength = numberOfCharacters/height;
    for (let i = 0; i < height; i++) {
      const row = characterList.splice(0,rowLength);
      startingField.push(row);
    }
    return startingField
  }
  printField(field) {
    let height = field.length;
    for (let i = 0; i < height; i++) {
    console.log(field[i].join(''));
    }
  }
}


// All our functions are methods on the Field class.
// I am not sure I see the reason for this.
// Perhaps Codecademy was thinking every move would create
// a new instance of the Field class.
// We are creating 1 field, and then mutating it. (which seems the simplest way to go)

// Start Game

// Setup field
let newField = new Field();
gameArray = newField.selectCharacters();


// initial conditions
let foundHat= false;
let foundHole= false;
let pathPositionX = 0;
let pathPositionY = 0;
let pathPosition = gameArray[0][0];

// PLAY GAME!

// loop: get move, advance '*', evaluate position, redraw field
while (!foundHat && !foundHole) {
  // update field and print to console
    gameArray[pathPositionY][pathPositionX] = pathCharacter;
    newField.printField(gameArray);

  move = getMove();

  switch(move) {
    case 'u':
      pathPositionY -=1;
      break;
    case 'd':
      pathPositionY +=1;
      break;
    case 'l':
      pathPositionX -=1;
      break;
    case 'r':
      pathPositionX +=1;
      break;
    };

 // check if move results in Win or Lose

 // break out of loop if x or y is negative
 // before evaluating gameArray[x][y]

  if (pathPositionX < 0 || pathPositionY < 0) {
    console.log('\nYou fell out of the field!');
    break;
  } else if (pathPositionX >= gameArray[0].length || pathPositionY >= gameArray.length) {
    console.log('\nYou fell out of the field!');
    break;
  }

   // now calculate the * position
   pathPosition = gameArray[pathPositionY][pathPositionX];
  if (pathPosition === '^') {
    console.log('\nCongratulations! You found your hat!');
    break;
  } else if (pathPosition === 'O') {
    console.log('\nYou fell into a hole!');
    break;
  }
  pathPosition = pathCharacter;
}
console.log('\n    [  game over  ]\n')
