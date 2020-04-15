import * as Tone from "./tone.js";
//import Synth from 'Tone/instrument/Monosynth';

/*
console.log("this is working");
const synth = new Tone.MonoSyth().toMaster();
synth.triggerAttackRelease("C4", "8n");
*/

export function trial() {
  const synth = new Tone.MonoSynth().toMaster();

//play a middle 'C' for the duration of an 8th note
synth.triggerAttackRelease("C4", "8n");
}