//declaring objects and other variables 
const gameArray = [
    {
        name: 'Winged-Dragon-of-Ra',
        img: "https://ygoprodeck.com/pics/10000010.jpg"
    },
    {
        name: 'Winged-Dragon-of-Ra',
        img: "https://ygoprodeck.com/pics/10000010.jpg"

    },
    {
        name: 'Slifer-the-sky-Dragon',
        img: "https://ygoprodeck.com/pics/10000020.jpg"

    },
    {
        name: 'Slifer-the-sky-Dragon',
        img: "https://ygoprodeck.com/pics/10000020.jpg"
    },
    {
        name: 'blue-eyes-white-dragon',
        img: "https://ygoprodeck.com/pics/89631139.jpg"
    },
    {
        name: 'blue-eyes-white-dragon',
        img: 'https://ygoprodeck.com/pics/89631139.jpg'
    },
    {
        name: 'Ascension-Sky-Dragon',
        img: "https://ygoprodeck.com/pics/37910722.jpg"
    },
    {
        name: 'Ascension-Sky-Dragon',
        img: "https://ygoprodeck.com/pics/37910722.jpg"  
    },
    {
        name: 'dark-hole',
        img: "https://ygoprodeck.com/pics/53129443.jpg"
    },
    {
        name: 'dark-hole',
        img: "https://ygoprodeck.com/pics/53129443.jpg"
    },
    {
        name: 'dark-magician',
        img: "https://ygoprodeck.com/pics/46986414.jpg"
    },
    {
        name: 'dark-magician',
        img: "https://ygoprodeck.com/pics/46986414.jpg"
    },
    {
        name:"monster-reborn",
        img:"https://ygoprodeck.com/pics/83764719.jpg"
    },
    {
        name:"monster-reborn",
        img:"https://ygoprodeck.com/pics/83764719.jpg"
    },
    {
        name:"obelisk-the-tormentor",
        img:"https://ygoprodeck.com/pics/10000000.jpg"
    },
    {
        name:"obelisk-the-tormentor",
        img:"https://ygoprodeck.com/pics/10000000.jpg"
    },

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
Array.from(imgs).forEach(img => img.addEventListener("click", flipCard)) });
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
    gameArray.sort(() => 0.5 - Math.random());
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
        setTimeout(checkForMatch, 100);
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
        setTimeout(checkWon,100);
    }
    else { 
        imgs[firstCard].setAttribute("src", "https://i.imgur.com/UjbK2Wb.png");
        imgs[secondCard].setAttribute("src", "https://i.imgur.com/UjbK2Wb.png"); alert("wrong, please try again"); 
        imgs[firstCard].classList.remove("flip"); imgs[secondCard].classList.remove("flip"); 
        } 
    cardsSelected = []; 
    cardsId = []; 
    clicks ++; 
    clickBoard.innerHTML = clicks; 
}

//checkWon Function

function checkWon() {
    if (cardsWon == gameArray.length / 2) {
        alert("You won") 
        setTimeout(()=> popup.style.display = "flex" ,300); 
    }
}

// replay fucntion

function replay() { 
    window.location.reload();
}