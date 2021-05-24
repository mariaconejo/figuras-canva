const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// ejercicio de referencia : https://codepen.io/derekmorash/pen/aBamzj

// Circulo
let xCircleSpeed = getRandomArbitrary(-5, 5);
let yCircleSpeed = getRandomArbitrary(-5, 5);
// Aparesca en posicion random
let xCirclePosition = getRandomArbitrary((canvas.width -100), 100);
let yCirclePosition = getRandomArbitrary((canvas.height -100), 100);

// Cuadrado
let xSquereSpeed = getRandomArbitrary(-5, 5);
let ySquereSpeed = getRandomArbitrary(-5,5);
// Aparesca en posicion random
let xSquerePosition = getRandomArbitrary(canvas.width, 0);
let ySquerePosition = getRandomArbitrary(canvas.height, 0);

function draw() {
  // Cuadrado

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(xSquerePosition,ySquerePosition, 150, 150);
    // Posision derecha, izquierda
    if(xSquerePosition + 150 > canvas.width || xSquerePosition  < 0){
      xSquereSpeed = -xSquereSpeed;
    }
   // Posision arriba, abajo
    if (ySquerePosition + 150 > canvas.height || ySquerePosition  < 0){
      ySquereSpeed = -ySquereSpeed;
    }
   
    xSquerePosition += xSquereSpeed;
    ySquerePosition += ySquereSpeed;

  // Circulo

    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.arc(xCirclePosition, yCirclePosition, 100, 0, 2 * Math.PI);
    ctx.fill();
   // Posision derecha, izquierda
  if(xCirclePosition + 100 > canvas.width || xCirclePosition - 100 < 0){
    xCircleSpeed = -xCircleSpeed;
  }
  // Posision arriba, abajo
  if (yCirclePosition + 100 > canvas.height || yCirclePosition - 100 < 0){
    yCircleSpeed = -yCircleSpeed
  }
  
  xCirclePosition += xCircleSpeed;
  yCirclePosition += yCircleSpeed;


  window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}