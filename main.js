const prompt = require('prompt-sync')({sigint: true});
//const move = prompt('Please select direction to move; Up:u, Down:d, Left:l, Right:r ...')

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

// later this can be randomized and put into Field constructor
let fieldArray = [
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]

// 'list' is prob not best term to use in variables,
// esp since it is a data type in Python. But I like
// how we have it here, where 'array' refers to the whole 2-dimensional field.
class Field {
  constructor(field){
    this.field=field
  };
// changed .print() method to .generateField() to match Codecademy tasks
// also Codecademy suggest making this a static function
   generateField(height,width){
    console.log(this.field[0].join(''));
    console.log(this.field[1].join(''));
    console.log(this.field[2].join(''))
  };
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
  console.log('Full Character List Array ===== ' , characterList)

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

    for (let i = 0; i < height; i++) {
      console.log(startingField[i].join(''));
    }
  }
}

const myField = new Field(fieldArray);
myField.generateField(1,2);
myField.selectCharacters(8,10);

//myField.generateField();
//Field.staticMethod();
//Field.print();
let foundHat= false;
let foundHole= false;
let pathPositionX = 0;
let pathPositionY = 0;
let pathPosition = fieldArray[0][0];


// loop and compare '*' position
while (!foundHat && !foundHole) {
  const move = prompt('Please select direction to move; Up:u, Down:d, Left:l, Right:r ...');
  console.log(move);
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
  console.log('New coordinates: \n X=',pathPositionX,' Y=',pathPositionY);
  pathPosition = fieldArray[pathPositionY][pathPositionX];
  console.log('Path Position: ',pathPosition);

  pathPosition = fieldArray[pathPositionY][pathPositionX];
  console.log('path position = ', pathPosition);
  if (pathPosition === '^') {
    console.log('Congratulations! You found your hat!');
    foundHat = true;
  } else if (pathPosition === 'O') {
    console.log('You fell into a hole!');
    foundHole = true;
  } else if (pathPosition=== undefined){
    console.log('You fell out of the field!');
    foundHole = true;
  }

// draw new array -

  fieldArray[pathPositionY][pathPositionX] = pathCharacter;
//  fieldArray[oldY][oldX] = fieldCharacter; -- supposed to trace the path through the field
  myField.print();
}
