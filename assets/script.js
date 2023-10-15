const PLAYER1 = 'X', PLAYER2 = 'O';
let index;
let turn = 0;
let winner = '';

const gridArray = [
  document.querySelector('#btn0'),
  document.querySelector('#btn1'),
  document.querySelector('#btn2'),
  document.querySelector('#btn3'),
  document.querySelector('#btn4'),
  document.querySelector('#btn5'),
  document.querySelector('#btn6'),
  document.querySelector('#btn7'),
  document.querySelector('#btn8')
];

// relative position to current button
const up = () => index - 3;
const up2 = () => index - 6;
const down = () => index + 3;
const down2 = () => index + 6;
const right = () => index + 1;
const right2 = () => index + 2;
const left = () => index - 1;
const left2 = () => index - 2;

const diagUpRight = () => index - 2;
const diagUpRight2 = () => index - 4;
const diagDownRight = () => index + 4;
const diagDownRight2 = () => index + 8;
const diagUpLeft = () => index - 4;
const diagUpLeft2 = () => index - 8;
const diagDownLeft = () => index + 2;
const diagDownLeft2 = () => index + 4;



// function to check row and column for win condidtion
// return true or false
function checkWinCondition() {
  let symCurr = gridArray[index].innerHTML;
  let col1, col2;

  switch (index) {
    case 0:
    case 1:
    case 2:
      col1 = gridArray[down()].innerHTML;
      col2 = gridArray[down2()].innerHTML;
        if (symCurr === col1 === col2) {
          return true;
        }
      break;

    case 3:
    case 4:
    case 5:
      col1 = gridArray[down()].innerHTML;
      col2 = gridArray[up()].innerHTML;
        if (symCurr === col1 === col2) {
          return true;
        }
      break;

    case 6:
    case 7:
    case 8:
      col1 = gridArray[up()].innerHTML;
      col2 = gridArray[up2()].innerHTML;
        if (symCurr === col1 === col2) {
          return true;
        }
      break;
      
    default:
      return 'error';
      break;
  }

  let row1, row2;

  switch (index) {
    case 0:
    case 3:
    case 6:
      row1 = gridArray[right()].innerHTML;
      row2 = gridArray[right2()].innerHTML;
        if (symCurr === row1 === row2) {
          return true;
        }
      break;

    case 1:
    case 4:
    case 7:
      row1 = gridArray[left()].innerHTML;
      row2 = gridArray[right()].innerHTML;
        if (symCurr === row1 === row2) {
          return true;
        }
      break;

    case 2:
    case 5:
    case 8:
      row1 = gridArray[left()].innerHTML;
      row2 = gridArray[left2()].innerHTML;
        if (symCurr === row1 === row2) {
          return true;
        }
      break;
      
    default:
      return 'error';
      break;
  }

  return false;
}

// function to display X or O
function displaySymbol() {
  if (gridArray[index].innerHTML === '') {
    turn % 2 === 0 ? gridArray[index].innerHTML = PLAYER1 
    : gridArray[index].innerHTML = PLAYER2;
  
    checkWinCondition();
    turn++;
  }
}

// add event listener for each button
gridArray.forEach((element, i) => {
  element.addEventListener('click', () => {
    index = i;
    displaySymbol();
  })
});