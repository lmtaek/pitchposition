# Pitch Position
 A browser-based application that uses motion detection to dynamically produce sound. 
 
 Pitch Position was created as a motivator to get people up and moving while expressing themselves creatively. It is meant to be user-friendly to people with visual impairments; the webcam display is an optional feature that does not impact the functionality of Pitch Position. 
 
 [Click here to begin a demo of Pitch Position.](https://lmtaek.github.io/pitchposition/)
 - You can reference the Getting Started/Using Pitch Position section for help in using Pitch Position.
 
 ## Installation
 - No installation is necessary.
 
 ## Getting Started/Using Pitch Position
 - Click link to the project demo at the top of the README.md page. 
 - Allow Pitch Position to load. 
 - Allow Pitch Position permissions to your webcam. If you deny it permissions, the application will not have the information necessary to produce any sound. If you originally denied camera permissions to Pitch Position, click the camera icon to the far right of the URL bar. In the dropdown menu, click "Always allow https://lmtaek.github.io/pitchposition/ to access to your camera" and refresh the page. 
 - Make sure you are in a place with room to move around. At minimum, you should be able to wave your arms freely. Pitch Position will be more interesting if you can also crouch or stand at full-height.
 - Set your volume to a MODERATE VALUE (halfway works best). You can adjust your volume after sound starts to play.
 - When you are ready to use Pitch Position, click the "Start sound." button. Sound will begin to be generated. It may not sound good at first.
 - Stand up if you are seated, and take a few steps backwards from your computer. Pitch Position is trying to find your features.
 - Pitch Position will begin to alter its sound output based on the position of your arms and head.
 - Move around! Pitch Position will change its sound output depending on how you position your hands, arms, and head.
 - Not all of Pitch Position's outputs will sound good. Try moving around and seeing if you can find positions that produce nice sounds!
 - If you would like to take a break, walk back to your computer and click the "Stop sound." button to pause the audio output. You can click the "Start sound." button to resume the audio output when you're ready to continue.
 - When you are done, you can close out of the web page.
 
 ## Details (bonus information)
 - Pitch Position consists of two synths--one for the left hand, and one for the right. Depending on the position of each of these hands, a note at a certain octave is played on each synth. For example, the left-hand synth may play C4 (a "C" note on the 4th octave) while the right-hand synth may play F1 (an "F" note on the 1st octave). 
 - Moving your hand up or down will determine the note, with "A" being located down low, and "G" being located up high. 
 - Moving your hand left or right will determine the octave, with octave 0 being to the far left, and octave 7 being to the far right. 
 - Your arms determine the duration of each synth's sound. Raise your arm to give the synth sound a shorter duration, and lower to give it a longer duration.
 - Pitch Position's audio output loops. The interval at which it loops is determined by where your head is. Move your head up for a faster tempo, and lower for a slower tempo. 
 
 ### Dependencies
 * [TensorFlow's PoseNet Model](https://github.com/tensorflow/tfjs-models/tree/master/posenet "PoseNet")
 * [Tone.js](https://github.com/Tonejs/Tone.js "Tone.js")
