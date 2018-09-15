//a = 65  d = 68  s = 83  w = 87

document.addEventListener("keydown", keyPressed, false);
document.addEventListener("keyup", keyReleased, false);
function keyPressed(event){
   alpha[event.keyCode] = true;
   //updateMove();
}
function keyReleased(event){
   alpha[event.keyCode] = false;
   //updateMove();
}

let xCoord = 150;
let yCoord = 75;
let alpha = [];

function updateMove(){
   function drawCircle(x,y){
      let getContext = document.getElementById("myCanvas").getContext("2d");
      getContext.beginPath();
      getContext.lineWidth = 1;
      getContext.strokeStyle = "rgb(0,0,0)";
      getContext.arc(x,y,10,0,2*Math.PI);
      getContext.stroke();
   }
   function eraseCircle(x,y){
      let getContext = document.getElementById("myCanvas").getContext("2d");
      getContext.beginPath();
      getContext.lineWidth = 3;
      getContext.strokeStyle = "rgb(256,256,256)";
      getContext.arc(x,y,10,0,2*Math.PI);
      getContext.stroke();
   }
   if(alpha[65] === true || alpha[68] === true || alpha[83] === true || alpha[87] === true){
      eraseCircle(xCoord, yCoord);
   }
   /*else if(alpha[65] === false && alpha[68] === false && alpha[83] === false && alpha[87] === false){
      drawCircle(xCoord, yCoord);
   }*/
   if(alpha[65] === true){
      if(alpha[83] === true){
         xCoord -= .7;
         yCoord += .7;
      }
      else if(alpha[87] === true){
         xCoord -= .7;
         yCoord -= .7;
      }
      else{
         xCoord -= 1;
      }
   }
   else if(alpha[68] === true){
      if(alpha[83] === true){
         xCoord += .7;
         yCoord += .7;
      }
      else if(alpha[87] === true){
         xCoord += .7;
         yCoord -= .7;
      }
      else{
         xCoord += 1;
      }
   }
   else if(alpha[83] === true){
      yCoord += 1;
   }
   else if(alpha[87] === true){
      yCoord -= 1;
   }
   drawCircle(xCoord, yCoord);
   setTimeout(updateMove, 20);
}
updateMove();

//drawCircle(xCoord, yCoord);

