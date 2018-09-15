//a = 65  d = 68  s = 83  w = 87
/*
https://stackoverflow.com/questions/5203407/javascript-multiple-keys-pressed-at-once
*/ 
/*stack overflow link demonstrates using an object to register true or false values for keydown events, allows multiple keys to be pushed at once to achieve diagonal movement by checking true/false values of object and adding double true if statements to increment diagonal position movements*/ 

let xCoord = 240;
let yCoord = 150;

function drawCircle(x,y){
   let getContext = document.getElementById("myCanvas").getContext("2d");
   getContext.beginPath();
   getContext.lineWidth = 2;
   getContext.strokeStyle = "rgb(0,0,0)";
   getContext.arc(x,y,30,0,2*Math.PI);
   getContext.stroke();
}
function eraseCircle(x,y){
   let getContext = document.getElementById("myCanvas").getContext("2d");
   getContext.beginPath();
   getContext.lineWidth = 5;
   getContext.strokeStyle = "rgb(256,256,256)";
   getContext.arc(x,y,30,0,2*Math.PI);
   getContext.stroke();
}

window.onkeydown = function (event){
   switch(event.keyCode){
      case 65:
      eraseCircle(xCoord,yCoord);
      xCoord -= 4;
      drawCircle(xCoord, yCoord);
      break;
      case 68:
      eraseCircle(xCoord,yCoord);
      xCoord += 4;
      drawCircle(xCoord, yCoord);
      break;
      case 83:
      eraseCircle(xCoord,yCoord);
      yCoord += 4;
      drawCircle(xCoord, yCoord);
      break;
      case 87:
      eraseCircle(xCoord,yCoord);
      yCoord -= 4;
      drawCircle(xCoord, yCoord);
      break;
   }
}

drawCircle(xCoord, yCoord);

