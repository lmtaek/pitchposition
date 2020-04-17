//import * as Tone from "./tone.js";

var loopBeat;
var loopBeatInterval = "16n";

var rightOctave; //determined by right hand's X value
var rightNote; //determined by right hand's Y value
var rightSound = "C4"; //combination of octave and note
var rightVolume = 0; //determined by head's Y value
var rightTempo = "4n"; //determined by right arm's Y value
var rightOutput;

var leftOctave; //determined by left hand's X value
var leftNote; //determined by left hand's Y value
var leftSound = "C4"; //combination of octave and note
var leftVolume = 0; //determined by head's Y value
var leftTempo = "4n"; //determined by left arm's Y value
var leftOutput;

export function songSetUp() {
  Tone.start()
  rightOutput = new Tone.Synth().toMaster();
  leftOutput = new Tone.Synth().toMaster();
  //song = the musical component
  //time Interval = updating rate for song, the framerate, seconds or relative to beats per min ('4n' for quarter note)
  loopBeat = new Tone.Loop(song, loopBeatInterval);
  Tone.Transport.start();
  loopBeat.start(0);
}

function song(time) {
  if (rightVolume != undefined) {
    rightOutput.volume.value = rightVolume;
  } else {
    rightOutput.volume.value = 0;
  }
  rightOutput.triggerAttackRelease(rightSound, rightTempo, time);

  if (leftVolume != undefined) {
    leftOutput.volume.value = leftVolume;
  } else {
    leftOutput.volume.value = 0;
  }
  leftOutput.triggerAttackRelease(leftSound, leftTempo, time);
  //console.log(time);
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
    handleHead(head);

    //change tempo if necessary
    loopBeat.interval = loopBeatInterval;
  }
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
        rightOctave = '4';
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
        leftOctave = '4';
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

function handleHead(head) {
  if (head != null) {
    var yCoordinate = head[1];
    var finalVolume;

    switch (true) {
      case (yCoordinate <= 50):
        loopBeatInterval = "8n";
        break;
      case (yCoordinate <= 100):
        loopBeatInterval = "4n";
        break;
      case (yCoordinate <= 150):
        loopBeatInterval = "2n";
        break;
      default:
        loopBeatInterval = "4n";
        break;
      }
    }
}

/*function handleHead(head) {
  if (head != null) {
    var yCoordinate = head[1];
    var finalVolume;

    switch (true) {
      case (yCoordinate <= 50):
        finalVolume = 10;
        break;
      case (yCoordinate <= 70):
        finalVolume = 5;
        break;
      case (yCoordinate <= 90):
        finalVolume = 0;
        break;
      case (yCoordinate <= 110):
        finalVolume = -5;
        break;
      case (yCoordinate >= 130):
        finalVolume = -10;
        break;
      default:
        finalVolume = 0;
        break;
      }
    }
    leftVolume = finalVolume;
    rightVolume = finalVolume;
}*/

function handleRightArm(rightArm) {
  if (rightArm != null) {
    var yCoordinate = rightArm[1];

    switch (true) {
      case (yCoordinate <= 50):
        rightTempo = "16n";
        break;
      case (yCoordinate <= 80):
        rightTempo = "8n";
        break;
      case (yCoordinate <= 110):
        rightTempo = "4n";
        break;
      case (yCoordinate >= 130):
        rightTempo = "2n";
        break;
      default:
        rightTempo = "4n";
        break;
      }
    }
  }

function handleLeftArm(leftArm) {
  if (leftArm != null) {
    var yCoordinate = leftArm[1];

    switch (true) {
      case (yCoordinate <= 50):
        leftTempo = "16n";
        break;
      case (yCoordinate <= 80):
        leftTempo = "8n";
        break;
      case (yCoordinate <= 110):
        leftTempo = "4n";
        break;
      case (yCoordinate >= 130):
        leftTempo = "2n";
        break;
      default:
        leftTempo = "4n";
        break;
      }
    }

}




