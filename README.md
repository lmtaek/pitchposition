# Pitch Position
 A browser-based application that uses motion detection to dynamically produce sound.
 
 Click here to begin a demo of Pitch Position.
 - You can reference the Getting Started/Using Pitch Position section for help in using Pitch Position.
 - LINK TO BE ADDED.
 
 ## Installation
 - No installation is necessary.
 
 ## Getting Started/Using Pitch Position
 - Click link to the project demo at the top of the README.md page. 
 - Allow Pitch Position to load. 
 - Allow Pitch Position permissions to your webcam. If you deny it permissions, the application will not have the information necessary to produce any sound. You can refresh the page, and approve camera permissions if you originally declined these permissions.
 - Make sure you are in a place with room to move around. At minimum, you should be able to wave your arms freely and crouch or stand at full-height.
 - Set your volume to a MODERATE VALUE (halfway works best). You can adjust your volume after sound starts to play.
 - When you are ready to use Pitch Position, click the "Start sound." button. Sound will begin to be generated. It may not sound good at first.
 - Stand up if you are seated, and take a few steps backwards from your computer. Pitch Position is trying to find your features.
 - Pitch Position will begin to alter its sound output based on the position of your arms and head.
 - Move around! Pitch Position will change its sound output depending on how you position your hands, arms, and head.
 - Not all sounds outputs will sound good. Try moving around and seeing if you can find a position that produces a nice sound!
 
 ## Details (bonus information)
 - Pitch Position consists of two synths--one for the left hand, and one for the right. Depending on the position of each of these hands, a note at a certain octave is played on each synth. For example, the left-hand synth may play C4 (a "C" note on the 4th octave) while the right-hand synth may play F1 (an "F" note on the 1st octave). 
 - Moving your hand up or down will determine the note, with "A" being located down low, and "G" being located up high. 
 - Moving your hand left or right will determine the octave, with octave 0 being to the far left, and octave 7 being to the far right. 
 - Your arms determine the duration of each synth's sound. Raise your arm to give the synth sound a shorter duration, and lower to give it a longer duration.
 - Pitch Position's audio output loops. The interval at which it loops is determined by where your head is. Move your head up for a faster tempo, and lower for a slower tempo. 
 
 ### Dependencies
 * [TensorFlow's PoseNet Model](https://github.com/tensorflow/tfjs-models/tree/master/posenet "PoseNet")
 * [Tone.js](https://github.com/Tonejs/Tone.js "Tone.js")
