function figure(){
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    // ejercicio de referencia : https://codepen.io/derekmorash/pen/aBamzj
  
    // Circulo
    let xCircleSpeed = getRandomArbitrary(-5, 5);
    let yCircleSpeed = getRandomArbitrary(-5, 5);
    // Aparesca en posicion random
    let radius = 100;
    let xCirclePosition = getRandomArbitrary((canvas.width -radius), radius);
    let yCirclePosition = getRandomArbitrary((canvas.height -radius), radius);
  
    // Cuadrado
    let xSquereSpeed = getRandomArbitrary(-5, 5);
    let ySquereSpeed = getRandomArbitrary(-5,5);
    // Aparesca en posicion random
    let side = 150;
    let xSquerePosition = getRandomArbitrary(canvas.width, 0);
    let ySquerePosition = getRandomArbitrary(canvas.height, 0);
  
    function cleanFigure(){
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  
    class circule {
      constructor (xCirclePosition, yCirclePosition, xCircleSpeed, yCircleSpeed, radius){
        this.xCirclePosition = xCirclePosition;
        this.yCirclePosition = yCirclePosition;
        this.xCircleSpeed = xCircleSpeed;
        this.yCircleSpeed = yCircleSpeed;
        this.radius = radius;
      }
      drawCircule(){
        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.arc(xCirclePosition, yCirclePosition, radius, 0, 2 * Math.PI);
        ctx.fill();
      }
    } 


    class squere {
      constructor(xSquerePosition, ySquerePosition, xSquereSpeed, ySquereSpeed, side){
        this.xSquerePosition = xSquerePosition;
        this.ySquerePosition = ySquerePosition;
        this.xSquereSpeed = xSquereSpeed;
        this.ySquereSpeed = ySquereSpeed;
        this.side = side;
      }
      drawSquere(){
        ctx.fillStyle = 'blue';
        ctx.fillRect(xSquerePosition,ySquerePosition, side, side);
      }
    }
    function drawFigure(){
      const figureCircule = new circule (xCirclePosition, yCirclePosition, xCircleSpeed, yCirclePosition, radius);
      figureCircule.drawCircule();
      const figureSquere = new squere(xSquerePosition, ySquerePosition, xSquereSpeed, ySquereSpeed,side);
      figureSquere.drawSquere();
    }
  
    function animateFigure(){
      cleanFigure();
      drawFigure();
  
      if(xSquerePosition + side > canvas.width || xSquerePosition  < 0){
        xSquereSpeed = -xSquereSpeed;
      }
     // Posision arriba, abajo
      if (ySquerePosition + side > canvas.height || ySquerePosition  < 0){
        ySquereSpeed = -ySquereSpeed;
      }
      
  
      if(xCirclePosition + radius > canvas.width || xCirclePosition - radius < 0){
        xCircleSpeed = -xCircleSpeed;
      }
      // Posision arriba, abajo
      if (yCirclePosition + radius > canvas.height || yCirclePosition - radius < 0){
        yCircleSpeed = -yCircleSpeed
      }
       // colision que explico en clases 

      let edgeX =  xCirclePosition;
      let edgeY = yCirclePosition;
  
      if(xCirclePosition < xSquerePosition ){
          edgeX =  xSquerePosition;
      }else if (xCirclePosition > xSquerePosition + side ){
          edgeX = xSquerePosition + side;
      }
  
      if(yCirclePosition < ySquerePosition ){
          edgeY = ySquerePosition
      }else if(yCirclePosition > ySquerePosition + side){
          edgeY = ySquerePosition + side
      }
      const distX  = xCirclePosition - edgeX;
      const distY  = yCirclePosition - edgeY;
      const distance = Math.sqrt((distX*distX) + (distY*distY));
  
      if(distance <= 100){
          if(Math.abs(distX)<= 100 && Math.abs(distX) > 95){
              xSquereSpeed = -xSquereSpeed
              xCircleSpeed = -xCircleSpeed
          }
          if(Math.abs(distY)<=100 && Math.abs(distY) > 95){
              ySquereSpeed = - ySquereSpeed
              yCircleSpeed = -yCircleSpeed
          }
      }
    
      
      xCirclePosition += xCircleSpeed;
      yCirclePosition += yCircleSpeed;
      xSquerePosition += xSquereSpeed;
      ySquerePosition += ySquereSpeed;
    
      window.requestAnimationFrame(animateFigure);
    }
  
    window.requestAnimationFrame(animateFigure);
  
    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }
  
  }
  
  figure();
  
  
  
  