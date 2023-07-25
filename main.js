const prompt = require('prompt-sync')({sigint: true});
//const move = prompt('Please select direction to move; Up:u, Down:d, Left:l, Right:r ...')

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

// later this can be randomized and put into Field constructor
const fieldArray = [
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]

// right now this is used primarily for print method
// later, arguments might be field size? length x height
class Field {
  constructor(field){
    this.field=field
  };

  print(){
    console.log(this.field[0].join(''));
    console.log(this.field[1].join(''));
    console.log(this.field[2].join(''))
  };
};
// print the field
const myField = new Field(fieldArray);
myField.print()

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

/* calculate pathPosition indices

  down   = firstIndex plus 1
  up     = firstIndex minus 1
  right  = secondIndex plus 1
  left   = secondIndex minus 1
*/
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

/*
 TODO: run tests
  if () {
// pathPositionCoordinates = '^', then findHat=True, print 'you win',  break
  } else if () {
// pathPositionCoordinates = 'o', then foundHole=True, print 'you lose',  break
  } else if () {
// pathPositionCoordinates > fieldLength || > fieldHeight, then foundHole=True, 'you lose', break
  };
*/

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
  /*  Some problems here:

      else if (pathPositionX < 0 || pathPositionX > 2 || pathPositionY < 0 || pathPositionY > 2) {
      console.log('You fell out of the field!');
      foundHole = true;
    }
  */

// draw new array -

  fieldArray[pathPositionY][pathPositionX] = pathCharacter;
  fieldArray[oldY][oldX] = fieldCharacter;
  myField.print();
}



/*
while (!foundHat && !foundHole) {
  const move = prompt('Please select direction to move; Up:u, Down:d, Left:l, Right:r ...');
  switch(move){
    case 'u':
        console.log('You fell out of the field!');
        foundHole=true;
        break;
    case 'l':
        console.log('You fell out of the field!');
        foundHole=true;
        break;
    case 'd':
        fieldArray[0][0]=fieldCharacter;
        fieldArray[1][0]=pathCharacter;
        myField.print();
        let move2 = prompt('Please select a new direction:')
        switch(move2){
            case 'd':
                fieldArray[1][0]=fieldCharacter;
                fieldArray[2][0]=pathCharacter;
                myField.print();
                let move3 = prompt('Please select a new direction:');
                switch(move3){
                    case 'r':
                        console.log('Congratulations! You found your hat!');
                        foundHat=true
                        break;

                    case 'd':
                        console.log('You fell out of the field!');
                        foundHole=true;
                        break;

                    case 'l':
                        console.log('You fell out of the field!');
                        foundHole=true;
                        break;

                    case 'u':
                        fieldArray[2][0]=fieldCharacter;
                        fieldArray[1][0]=pathCharacter;
                        myField.print();
                        let move3u = prompt('Please select a new direction:');
                        switch(move3u){
                            case 'u':
                                fieldArray[1][0]=fieldCharacter;
                                fieldArray[0][0]=pathCharacter;
                                myField.print();
                                break;
                            case 'r':
                                console.log('You fell out of the field!');
                                foundHole=true;
                                break;
                            case 'l':
                                console.log('You fell out of the field!');
                                foundHole=true;
                                break
                            case 'd':
                                fieldArray[1][0]=fieldCharacter;
                                fieldArray[2][0]=pathCharacter;
                                myField.print();
                                let move4u = prompt('Please select a new direction:');
                                switch(move4u){
                                    case 'l':
                                        console.log('You fell out of the field!');
                                        foundHole=true;
                                        break
                                    case 'd':
                                        console.log('You fell out of the field!');
                                        foundHole=true;
                                        break
                                    case 'r':
                                        console.log('Congratulations! You found your hat!');
                                        foundHat=true
                                        break;
                                    case 'u':
                                        fieldArray[2][0]=fieldCharacter;
                                        fieldArray[1][0]=pathCharacter;
                                        myField.print();

                                }
                        }


                } break;
            case 'u':
                fieldArray[1][0]=fieldCharacter;
                fieldArray[0][0]=pathCharacter;
                myField.print();
                break;

            case 'r':
                console.log('You fell out of the field!');
                foundHole=true;
                break;

            case 'l':
                console.log('You fell out of the field!');
                foundHole=true;
                break;

        } break;
    case 'r':
        fieldArray[0][0]=fieldCharacter;
        fieldArray[0][1]=pathCharacter;
        myField.print();
        let move2r = prompt('Please select a new direction:')
        switch(move2r){
            case 'u':
                console.log('You fell out of the field!');
                foundHole=true;
                break;
            case 'r':
                console.log('You fell out of the field!');
                foundHole=true;
                break;
            case 'd':
                console.log('You fell out of the field!');
                foundHole=true;
                break;
            case 'l':
                fieldArray[0][1]=fieldCharacter;
                fieldArray[0][0]=pathCharacter;
                myField.print();
                break;
        }

 }
}
*/
