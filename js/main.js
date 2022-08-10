
const gameArray = [
    {
        name: 'yellow',
        img: "https://i.imgur.com/i3Ztlqvs.png"
    },
    {
        name: 'yellow',
        img: "https://i.imgur.com/i3Ztlqvs.png"

    },
    {
        name: 'red',
        img: "https://i.imgur.com/0TMOUV0.jpeg"

    },
    {
        name: 'red',
        img: "https://i.imgur.com/0TMOUV0.jpeg"
    },
    {
        name: 'blue',
        img: "https://i.imgur.com/39vQwpn.jpeg"
    },
    {
        name: 'blue',
        img: 'https://i.imgur.com/39vQwpn.jpeg'
    },
    {
        name: 'green',
        img: "https://i.imgur.com/tOEiEPA.png"
    },
    {
        name: 'green',
        img: "https://i.imgur.com/tOEiEPA.spng"  
    },
    {
        name: 'black',
        img: "https://i.imgur.com/5aBR7Rk.png"
    },
    {
        name: 'black',
        img: "https://i.imgur.com/5aBR7Rk.png"
    },
    {
        name: 'purple',
        img: "https://i.imgur.com/vMC2osD.jpeg"
    },
    {
        name: 'purple',
        img: "https://i.imgur.com/vMC2osD.jpeg"
    }
];
let grid = document.querySelector(".grid");
let audio = document.querySelector("audio")
let source = document.querySelector("#source")
let points = document.querySelector(".points"); 
let popup = document.querySelector(".popup"); 
let reset = document.querySelector(".reset"); 
let clickBoard = document.querySelector(".clickBoard"); 
let imgs; 
let cardsId = []; 
let cardsSelected = []; 
let cardsWon = 0; 
let clicks = 0;
document.addEventListener("DOMContentLoaded", function () {
//define functions 

createBoard(grid, gameArray); 
arrangeCard();
reset.addEventListener("click", replay); 

//add a click functions for images 

imgs = document.querySelectorAll("img");
Array.from(imgs).forEach(img => 
img.addEventListener("click", flipCard)
) 
});
//createBoard function

function createBoard(grid, array) { 
     popup.style.display = "none"; 
     array.forEach((arr, index) => { 
        let img = document.createElement("img"); 
        img.setAttribute("src", "https://i.imgur.com/UjbK2Wb.png");
        img.setAttribute("data-id", index); 
        grid.appendChild(img); 
    })
};

// arrangeCard function

function arrangeCard() { 
    gameArray.sort(() => 0.3 - Math.random());
};

// flip Card function

function flipCard() { 
let selected = this.dataset.id;
  let clicked =gameArray[selected].name
cardsSelected.push(clicked); 


  
  
cardsId.push(selected); 
this.classList.add("flip"); 
this.setAttribute("src", gameArray[selected].img); 
if (cardsId.length === 2) { 
setTimeout(checkForMatch, 500);
} 
}
// checkForMatch function

function checkForMatch() { 
let imgs = document.querySelectorAll("img"); 
let firstCard = cardsId[0];
let secondCard = cardsId[1];
if (cardsSelected[0] === cardsSelected[1] && firstCard !== secondCard) { 
alert("you have found a match"); 
 
 
cardsWon ++; 
points.innerHTML = cardsWon; 
setTimeout(checkWon,500) 
} else { 
imgs[firstCard].setAttribute("src", "https://i.imgur.com/UjbK2Wb.png");
imgs[secondCard].setAttribute("src", "https://i.imgur.com/UjbK2Wb.png"); alert("wrong, please try again"); 
  imgs[firstCard].classList.remove("flip"); imgs[secondCard].classList.remove("flip"); 
} 
cardsSelected = []; 
cardsId = []; 
clicks ++; 
clickBoard.innerHTML = clicks; 
}

function checkWon() {
if (cardsWon == gameArray.length / 2) {
alert("You won") 
setTimeout(()=> popup.style.display = "flex" ,300); 
}
}


function replay() { 
    // arrangeCard(); 
    // grid.innerHTML = "";
    // createBoard(grid, Array);
    // cardsWon = 0;
    // clicks = 0; 
    // clickBoard.innerHTML = 0; 
    // points.innerHTML = 0; 
    // popup.style.display = "none"; 

    window.location.reload();
}