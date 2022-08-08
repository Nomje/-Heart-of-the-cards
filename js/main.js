const audio = {
        // assiagn the audio to buttons by giving the buttons name
    //     laser: 'http://www.freesound.org/data/previews/42/42106_70164-lq.mp3',
    //     dog: 'http://www.freesound.org/data/previews/327/327666_5632380-lq.mp3',
    //     cow: 'http://www.freesound.org/data/previews/58/58277_634166-lq.mp3',
    //     siren: 'http://www.freesound.org/data/previews/336/336899_4939433-lq.mp3'
    }

var sounds ={
    clip1: Object.assign(document.createElement('audio'),{
        src : '',
    }),
    clip2: Object.assign(document.createElement('audio'),{
        src : '',
    }),
     clip3: Object.assign(document.createElement('audio'),{
        src : '',
    }),
    clip4: Object.assign(document.createElement('audio'),{
        src : '',
    }),
    clip5: Object.assign(document.createElement('audio'),{
        src : '',
    }),
    clip6: Object.assign(document.createElement('audio'),{
        src : '',
    }),
}


    let pairs = 0;
    let audio1, audio2;
    let turns = 0;

    function pairFound (audio1, audio2){
        if (audio1 === audio2){
            //change back ground to certian color and diable the dom events on said buttons 
        }
        else {
            // change the background to bad color and do nothing 
        }
    }

    function shuffleAudio (){
        pair = 0;
        e
    }