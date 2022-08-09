
const gameArray = [
    {
        name: 'yellow',
        //img
    },
    {
        name: 'yellow'
    },
    {
        name: 'red'
    },
    {
        name: 'red'
    },
    {
        name: 'blue'
    },
    {
        name: 'blue'
    },
    {
        name: 'green'
    },
    {
        name: 'green'
    },
    {
        name: 'black'
    },
    {
        name: 'black'
    },
    {
        name: 'purple'
    },
    {
        name: 'purple'
    }
];
 
let layout = document.querySelector('.board');
let ping = document.querySelector('.ping');
let reset = document.querySelector('.reset');
let clicks = document.querySelector('.clicks');
let imgs = 0;
let objectIndx = [];
let selected = [];
let pairs = 0;
let press = 0;

// functions ---->

function makeBoard(){

}

// alert("is this working");

// // making varribales
// const sounds = [
//     {
//         name: "bong",
//         clip1: "soundFiles/bong.mp3",// audio pathing 
//     },
//     {
//         name : "light Saber",
//         clip2: "soundFiles/lightSaber.wav"
//     },
//     {
//         name:"bark",
//         clip3: "soundFiles/bark.wav"
//     },
//     {
//         name: "wow",
//         clip4: "soundFiles./wow.wav"
//     },
//     {
//         name:"transformer",
//         clip5: "soundFiles./transformer.wav",
//     },
//     {
//         name: "fart",
//         clip6,"soundFiles./fart.wav"
//     },
//     {
//         name: "bong",
//         clip7: "soundFiles/bong.mp3", 
//     },
//     {
//         name : "light Saber",
//         clip8: "soundFiles/lightSaber.wav"
//     },
//     {
//         name:"bark",
//         clip9: "soundFiles/bark.wav"
//     },
//     {
//         name: "wow",
//         clip10: "soundFiles./wow.wav"
//     },
//     {
//         name:"transformer",
//         clip11: "soundFiles./transformer.wav",
//     },
//     {
//         name: "fart",
//         clip12,"soundFiles./fart.wav"
//     }];












// const sounds = {
//     pcFail: "soundFiles/bong.mp3",// audio pathing 
//     lightSaber: "soundFiles/lightSaber.wav",
//     dogBark: "soundFiles/bark.wav"
//     wowSound: "soundFiles./wow.wav"
//     fart: "soundFiles",
//     trasformer,""
// }


// not working code // const audio = {
// //         // assiagn the audio to buttons by giving the buttons name
// //         bug: "soundFiles/critical-stop.mp3",
// //         dog: 'http://www.freesound.org/data/previews/327/327666_5632380-lq.mp3',
// //         cow: 'http://www.freesound.org/data/previews/58/58277_634166-lq.mp3',
// //         siren: 'http://www.freesound.org/data/previews/336/336899_4939433-lq.mp3'
// //     }
// let turn = 0
// const music = new Audio();
// const bgPlayer = document.getElementById('bg-player');
// document.getElementById('play-btn').addEventListener('click', handlePlaySound);


// // function handlePlaySound() {
// // const selSoundInp = document.querySelector('input[name="sound"]:checked');
// // playSound(selSoundInp.value);
// // }

// // function playSound(name) {
// //     music.src = sounds[name];
// //     music.play();
// //   }

// //   function handleBgChanged() {
// //     bgCheckbox.checked ? bgPlayer.play() : bgPlayer.pause();
// //   }
  
// function turnCounter (){
//     turn ++;
//     document.getElementById("click").innerHTML = turn;
// }

// // var sounds ={
// //     clip1: Object.assign(document.createElement('audio'),{
// //         src : '',
// //     }),
// //     clip2: Object.assign(document.createElement('audio'),{
// //         src : '',
// //     }),
// //      clip3: Object.assign(document.createElement('audio'),{
// //         src : '',
// //     }),
// //     clip4: Object.assign(document.createElement('audio'),{
// //         src : '',
// //     }),
// //     clip5: Object.assign(document.createElement('audio'),{
// //         src : '',
// //     }),
// //     clip6: Object.assign(document.createElement('audio'),{
// //         src : '',
// //     }),
// // }


// //     let pairs = 0;
// //     let audio1, audio2;
// //     let turns = 0;

// //     function pairFound (audio1, audio2){
// //         if (audio1 === audio2){
// //             //change back ground to certian color and diable the dom events on said buttons 
// //         }
// //         else {
// //             // change the background to bad color and do nothing 
// //         }
// //     }

// //     function shuffleAudio (){
// //         pair = 0;
// //         e
// //     }

