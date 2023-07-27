const prompt = require('prompt-sync')({sigint: true});
//const move = prompt('Please select direction to move; Up:u, Down:d, Left:l, Right:r ...')

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

// 'list' is prob not best term to use in variables,
// esp since it is a data type in Python. But I like
// how we have it here, where 'array' refers to the whole 2-dimensional field.
class Field {
  constructor(){
    this.field = []
  };
// changed .print() method to .generateField() to match Codecademy tasks
// also Codecademy suggest making this a static function

  selectCharacters(height,width) {
    const characterList = [];
    const listLength = height * width;
//    characterList.push('*'); // add '*' last
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
//  now with the characterList broken up into rows (arrays)
//  and pushed into startingField array:
//  Loop through startingField for each row in height variable
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
const myField = new Field();
gameArray = myField.selectCharacters(4,5);
myField.printField(gameArray);


// PLAY GAME!

let foundHat= false;
let foundHole= false;
let pathPositionX = 0;
let pathPositionY = 0;
let pathPosition = gameArray[0][0];


// loop and compare '*' position
while (!foundHat && !foundHole) {
  const move = prompt('Please select direction to move; Up:u, Down:d, Left:l, Right:r ...');

// starting coordinates
  let oldX = pathPositionX;
  let oldY = pathPositionY;

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

  // I removed `position = undefined` because I was getting unexpected behavior
  // I changed something and then I was able to continue moving right across the field and beyond.
  if  (pathPositionY >= gameArray.length || pathPositionY < 0 ) {
        console.log('You fell out of the field!');
        foundHole = true;
        break;
  }
  if  (pathPositionX >= gameArray[0].length || pathPositionX < 0 ) {
        console.log('You fell out of the field!');
        foundHole = true;
        break;
  }
  pathPosition = gameArray[pathPositionY][pathPositionX];
  if (pathPosition === '^') {
        console.log('Congratulations! You found your hat!');
        foundHole = true;
        break;
  } else if (pathPosition === 'O') {
    console.log('You fell into a hole!');
    foundHole = true;
    break;
  }
// draw new array -
  gameArray[pathPositionY][pathPositionX] = pathCharacter;
  myField.printField(gameArray);
}
