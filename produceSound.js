//import * as Tone from "./tone.js";

var mainSynth = new Tone.MonoSynth().toMaster();
var tempo = new Tone.Loop(function(time) {
  mainSynth.triggerAttackRelease("C4", "8n")
}, "4n").start(0);

export function trial() {
  let synth = new Tone.MonoSynth().toMaster();
  //let synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("C4", "8n");
  //Tone.Transport.start();
  
}




