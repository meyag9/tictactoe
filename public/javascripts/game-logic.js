
let isXTurn = true; 


function calculateWinner() {
        
     const lines = [
        [0, 1, 2], 
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ]; 
     
     let squareValues = document.getElementsByClassName("square"); 
     
     for (var i = 0; i < lines.length; i++) {
        var a = lines[i][0]; 
        var b = lines[i][1];
        var c = lines[i][2]; 
        
        
        if (squareValues[a].innerHTML && squareValues[a].innerHTML === squareValues[b].innerHTML && squareValues[a].innerHTML === squareValues[c].innerHTML) {
          return squareValues[a].innerHTML; 
        }
     }
     
     return null; 
          
}
   
   
function handleClick(e) {
    if (e.target.innerHTML) 
        return; 
        
    e.target.innerHTML = isXTurn ? "X" : "O";
    isXTurn = !isXTurn; 
    showGameStatus(); 
}


function showGameStatus() {
    let status = document.getElementsByClassName("status")[0]; 
    let winner = calculateWinner(); 
    
    if (winner) {
        status.innerHTML = "Winner: " + winner; 
    } else {
        status.innerHTML =  "Next player to move: " + (isXTurn ? "X" : "O"); 
    }
}


document.addEventListener("DOMContentLoaded", function(event) { 
    let squares = document.getElementsByClassName("square"); 
    
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", handleClick )
    }
    
    showGameStatus(); 
  
}); 