const player1 = 'X', player2 = 'O';
let turn = 0;

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');

const btn7 = document.querySelector('#btn7');
const btn8 = document.querySelector('#btn8');
const btn9 = document.querySelector('#btn9');

// function to display X or O
function displaySymbol(button) {
  turn % 2 === 0 ? button.innerHTML = player1 
    : button.innerHTML = player2;
  
  turn++;
}

// function to check row and column for win condidtion
// return true or false
function checkRowCol(row) {

}

// function to check diagonal for win condidtion
// return true or false
function checkDiag(diag) {

}

function checkWinOrLoseWinOrLose(button) {
  switch(button) {
    case 1:
      if (checkRowCol(1) && checkDiag(1)) {

      }
      
    
    case 2:
      if (checkRowCol(2)) {
        
      }

    case 3:
      if (checkRowCol(3) && checkDiag(3)) {
        
      }

    case 4:
      if (checkRowCol(4)) {
        
      }

    case 5:
      if (checkRowCol(5) && checkDiag(5)) {
        
      }
    
    case 6:
      if (checkRowCol(6)) {
        
      }

    case 7:
      if (checkRowCol(7) && checkDiag(7)) {
        
      }

    case 8:
      if (checkRowCol(8)) {
        
      }

    case 9:
      if (checkRowCol(9) && checkDiag(9)) {
        
      }
  };
}


btn1.addEventListener('click', () => {
  displaySymbol(btn1);
  checkWinOrLose(0);
});
btn2.addEventListener('click', () => {
  displaySymbol(btn2);
  checkWinOrLose(1);
});
btn3.addEventListener('click', () => {
  displaySymbol(btn3);
  checkWinOrLose(2);
});

btn4.addEventListener('click', () => {
  displaySymbol(btn4);
  checkWinOrLose(3);
});
btn5.addEventListener('click', () => {
  displaySymbol(btn5);
  checkWinOrLose(4);
});
btn6.addEventListener('click', () => {
  displaySymbol(btn6);
  checkWinOrLose(5);
});

btn7.addEventListener('click', () => {
  displaySymbol(btn7);
  checkWinOrLose(6);
});
btn8.addEventListener('click', () => {
  displaySymbol(btn8);
  checkWinOrLose(7);
});
btn9.addEventListener('click', () => {
  displaySymbol(btn9);
  checkWinOrLose(8);
});