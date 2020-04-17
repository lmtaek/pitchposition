//import * as Tone from "./tone.js";

/* Tone.Transport.setInterval(function(time) {
    synth.triggerAttackRelease(notes[noteIndex], "8n", time);
  
    noteIndex = noteIndex + 1 % notes.length;
  }, "4n");
  
  var tempo = new Tone.Loop(function(time) {
    mainSynth.triggerAttackRelease("C4", "8n")
  }, "4n").start(0);*/

var duoSynth;
var loopBeat; //determined by head position

var rightOctave; //determined by right hand's X value
var rightNote; //determined by right hand's Y value
var rightSound = "C0"; //combination of octave and note
var rightVolume = 0; //determined by right arm's Y value
var rightOutput;

var leftOctave; //determined by left hand's X value
var leftNote; //determined by left hand's Y value
var leftSound = "C0"; //combination of octave and note
var leftVolume = 0; //determined by left arm's Y value
var leftOutput;

export function songSetUp() {
  Tone.start()

  duoSynth = new Tone.DuoSynth().toMaster();
  rightOutput = new Tone.Synth().toMaster();
  leftOutput = new Tone.Synth().toMaster();
  //song = the musical component
  //time Interval = updating rate for song, the framerate, seconds or relative to beats per min ('4n' for quarter note)
  loopBeat = new Tone.Loop(song, '4n');
  Tone.Transport.start();
  loopBeat.start(0);
}

function song(time) {
  if (rightVolume != undefined) {
    rightOutput.volume.value = rightVolume;
    rightOutput.triggerAttackRelease(rightSound, '6n', time);
  } else {
    rightOutput.volume.value = 0;
    rightOutput.triggerAttackRelease(rightSound, '6n', time);
  }
  //duoSynth.volume.value = 0;
  //duoSynth.triggerAttackRelease('c4', '6n', time);
  //console.log(time);
}

function handleRightHand(rightHand) {
  if (rightHand != undefined) {

    var xCoordinate = rightHand[0];
    switch (true) {
      case (xCoordinate <= 0):
        rightOctave = '1';
        break;
      case (xCoordinate <= 40):
        rightOctave = '2';
        break;
      case (xCoordinate <= 80):
        rightOctave = '3';
        break;
      case (xCoordinate <= 120):
        rightOctave = '4';
        break;
      case (xCoordinate <= 160):
        rightOctave = '5';
        break;
      case (xCoordinate <= 200):
        rightOctave = '6';
        break;
      case (xCoordinate <= 240):
        rightOctave = '7'
        break;
      case (xCoordinate <= 300):
        rightOctave = '8'
        break;
      default:
        rightOctave = '0';
        break;
    }

    var yCoordinate = rightHand[1];
    switch (true) {
      case (yCoordinate <= 0):
        rightNote = 'G';
        break;
      case (yCoordinate <= 35):
        rightNote = 'F';
        break;
      case (yCoordinate <= 70):
        rightNote = 'E';
        break;
      case (yCoordinate <= 105):
        rightNote = 'D';
        break;
      case (yCoordinate <= 140):
        rightNote = 'C';
        break;
      case (yCoordinate <= 175):
        rightNote = 'B';
        break;
      case (yCoordinate <= 200):
        rightNote = 'A'
        break;
      default:
        rightNote = 'C';
        break;
    }
    rightSound = rightNote + rightOctave;
  }

}

function handleLeftHand(leftHand) {
  if (leftHand != undefined) {

    var xCoordinate = leftHand[0];
    switch (true) {
      case (xCoordinate <= 0):
        leftOctave = '1';
        break;
      case (xCoordinate <= 40):
        leftOctave = '2';
        break;
      case (xCoordinate <= 80):
        leftOctave = '3';
        break;
      case (xCoordinate <= 120):
        leftOctave = '4';
        break;
      case (xCoordinate <= 160):
        leftOctave = '5';
        break;
      case (xCoordinate <= 200):
        leftOctave = '6';
        break;
      case (xCoordinate <= 240):
        leftOctave = '7'
        break;
      case (xCoordinate <= 300):
        leftOctave = '8'
        break;
      default:
        leftOctave = '0';
        break;
    }

    var yCoordinate = leftHand[1];
    switch (true) {
      case (yCoordinate <= 0):
        leftNote = 'G';
        break;
      case (yCoordinate <= 35):
        leftNote = 'F';
        break;
      case (yCoordinate <= 70):
        leftNote = 'E';
        break;
      case (yCoordinate <= 105):
        leftNote = 'D';
        break;
      case (yCoordinate <= 140):
        leftNote = 'C';
        break;
      case (yCoordinate <= 175):
        leftNote = 'B';
        break;
      case (yCoordinate <= 200):
        leftNote = 'A'
        break;
      default:
        leftNote = 'C';
        break;
    }
    leftSound = leftNote + leftOctave;
  }
}

function handleHead() {

}

function handleRightArm(rightArm) {
  if (rightArm != null) {
    //console.log(rightArm);
    var yCoordinate = rightArm[1];

    switch (true) {
      case (yCoordinate <= 50):
        rightVolume = 10;
        break;
      case (yCoordinate <= 70):
        rightVolume = 5;
        break;
      case (yCoordinate <= 90):
        rightVolume = 0;
        break;
      case (yCoordinate <= 110):
        rightVolume = -5;
        break;
      case (yCoordinate >= 130):
        rightVolume = -10;
        break;
      default:
        rightVolume = 0;
        break;
      }
    }
  }

function handleLeftArm() {
  if (leftArm != null) {
    var yCoordinate = rightArm[1];

    switch (true) {
      case (yCoordinate <= 50):
        leftVolume = 10;
        break;
      case (yCoordinate <= 70):
        leftVolume = 5;
        break;
      case (yCoordinate <= 90):
        leftVolume = 0;
        break;
      case (yCoordinate <= 110):
        leftVolume = -5;
        break;
      case (yCoordinate >= 130):
        leftVolume = -10;
        break;
      default:
        leftVolume = 0;
        break;
      }
    }

}

export function determineSound(position) {
  if (position != undefined) {
    var rightArm = position[0];
    var leftArm = position[1];
    var head = position[2];
    var rightHand = position[3];
    var leftHand = position[4];

    handleRightHand(rightHand);
    handleLeftHand(leftHand);
    handleRightArm(rightArm);
    handleLeftArm(leftArm);
  }
}




