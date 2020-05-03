# Pitch Position: Report
## Description
Pitch Position is an interactive, browser-based program meant to encourage movement and creativity through an element not reliant on sight: sound. Users can position their head, arms, and hands in a large variety of ways in order to produce different tones and beats in real-time; this ensures a unique, engaging experience. Pitch Position has been designed to be accessible, particularly to users with sight disabilities. The program can be used via mouse, keyboard, or screen reader.

## Intended Audience
Pitch Position is intended particularly for children and adolescents with sight disabilities as a means of getting exercise while preventing risks that arise from typically high-mobility activities (such as running through an environment unsupervised). The program serves as a motivator for these individuals by providing interesting, accessible feedback in the form of sound. It can also be used by individuals who enjoy self-expression in less conventional ways, allowing them to dance and make music through creative means.

## Technologies, Frameworks, and Libraries Used
This project was created through the usage of HTML, Javascript, and a small amount of CSS; it was created with Chrome utilized as the primary browser of interest, though there is some flexibility, and browsers such as Safari can be used as well. In terms of frameworks, [Tone.js](https://github.com/Tonejs/Tone.js) is a Web Audio framework meant for using code to create interactive music; many of its tools were implemented within Pitch Position. Lastly, regarding libraries: [TensorFlow](https://github.com/tensorflow)’s library was used to generate data from users’ poses. Its [PoseNet model](https://github.com/tensorflow/tfjs-models/tree/master/posenet) in specific provides coordinates of particular body parts within the web camera’s frame, which are then used to determine audio output.

## How to Build and Deploy
Pitch Position was built and deployed through [GitHub Pages](https://pages.github.com/), a static hosting service that takes HTML, Javascript, and CSS files and runs them through a build process before publishing the final product: a website. The [Pitch Position repository](https://github.com/lmtaek/pitchposition) provides GitHub Pages with all the necessary information for this website.

## Problems Encountered
The primary concern with Pitch Position arose early with a persistent memory leak. It was later discovered to be an issue with one of TensorFlow’s resources; a large amount of memory is utilized over time if the models used to calculate the user’s pose are not destroyed after being used. Some other difficulties arose with the developer’s lack of experience in Javascript and Node.js. Importing the Tone.js framework and implementing the web camera to provide the required data were momentary roadblocks in the project’s development. While these issues have all been addressed to their furthest extent given the time span, further investigation towards dependencies and refactoring may benefit the project in the future.

## Future Work
Pitch Position has the potential to be taken in several directions. More variables (such as additional limbs and their positioning) could be added to the project to help determine a more complex final sound. More instruments and overlapping tones could be introduced for the user’s enjoyment. Additionally, Pitch Position could incorporate an alternate version meant for mobility-impaired users, relying on factors such as eye-tracking and head-tilting to determine sound, rather than hands, arms, and head position.

In terms of navigation and usage, Pitch Position’s accessibility measures seem to be sufficient, though there is room for improvement. More labelling, more intuitive set-up (such as efficiently allowing camera permissions), and more varied navigational methods such as switch or voice controls could be incorporated.
