// game logic

const secretNo = Math.trunc(Math.random()*20) +1 ;

let score = 20;

console.log(secretNo);

const put = document.querySelector('.guess');

const check = document.querySelector('.check');

const message = document.querySelector('.message');

//  document.querySelector('.score-div').textContent = secretNo;


check.addEventListener('click' , function() {

  if(!put.value) {
    message.textContent = "there is no number!"
  }

  else if (put.value == secretNo) {

    message.textContent = "correct"
    document.querySelector('.highscore').textContent = score;
     document.querySelector('body').style.backgroundColor = '#60b347';

  }
  else if (put.value < secretNo) {

    message.textContent = "low"
    score--;
    document.querySelector('.score').textContent = score;
  }
  else if (put.value > secretNo) {

    message.textContent = "high"
    score--;
    document.querySelector('.score').textContent = score;
  }

}
);

// let number = document.querySelector('#number');

// let message = document.querySelector('.message');

// if (!number.value) {

// message.textContent = "no number!";
  
// }








// let check = document.querySelector('.check');
// let number = document.querySelector('#number')
// let message = document.querySelector('.message')

//  let joy = () =>  message.textContent = `you guessed ${number.value}`



// check.addEventListener('click' , joy)





// Array.from(val).forEach(element => element.style.color='red' );




// 'use strict';

