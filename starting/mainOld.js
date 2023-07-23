const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

// above included with codecademy Start/
// below all new



class Field {
    constructor(arr) {
      this.arr = arr;
// TODO: Each field instance needs a reference.
//   this.ref = 12; // sequential num, or UUID
    }
    print() {
      return this.arr.toString();
    }
// an easy way to make a reference number from milliseconds
    makeRefNo() {
      const refNum = 'id' + (new Date()).getTime();
      console.log('reference number = ', refNum);
      return refNum
    }
  };


const myField = new Field([
    ['*', '*', '*'],
    ['*', 'o', '*'],
    ['*', '*', '*'],
  ]);

function commalessRows(arr) {
    let row1 =888;
    console.log(row1);
    return row1;
}
commalessRows('commaless rows: ' + myField);

//commaless = myField.join('');
//console.log(myField.join(''));
console.log("myField: ", myField.print());

// first join elements in each array, then join arrays
const commalessArray = myField.arr.map(row => row.join(''));
const commaless = commalessArray.join('');
console.log('commalessArray: ', commalessArray);
console.log(`commaless: ${commaless}`)

const userMove = prompt("Which way? ")
console.log("user choses: ", userMove);

myField.makeRefNo()
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

const myField = new Field(fieldArray);

myField.print()
/*if(move === 'd'){
  myField.print()
} */

let foundHat= false;
let foundHole= false;

// loop and compare '*'
while (!foundHat && !foundHole) {
  const move = prompt('Please select direction to move; Up:u, Down:d, Left:l, Right:r ...');
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
