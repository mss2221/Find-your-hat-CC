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


// loop and compare '*' position
while (!foundHat && !foundHole) {
  myField.print();
  const move = prompt('Please select direction to move; Up:u, Down:d, Left:l, Right:r ...');
  console.log(move);
// calculate pathPosition indices

/*
  down   = firstIndex plus 1
  up     = firstIndex minus 1
  right  = secondIndex plus 1
  left   = secondIndex minus 1
*/
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
// draw new array -
// new pathPositionCoordinates = pathCharacter
// old pathPositionCoordinates = fieldCharacter

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
