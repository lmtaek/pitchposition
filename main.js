import {trial} from './produceSound.js'

const video = document.getElementById("videoElement");
      const canvas = document.getElementById("myCanvas");
      var context = canvas.getContext('2d');
      //var pose;
      var currentPose;
      var rightArmPos;
      var leftArmPos;
      var headPos;
      var rightHandPos;
      var leftHandPos;

      async function init() {
        if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({video: true}).then(function (stream) {
          window.stream = stream;
          video.srcObject = stream;
          video.addEventListener("play", function() {
            var context = new AudioContext()
            context.resume()
            Tone.start()
            trial()
            timerCallback();}, false);
          })
        .catch(function (err0r) {
          alert("Something went wrong with the Camera feed.\nRefresh the page and make sure Pitch Perfect has access to your webcam.");
        });
      } else {
        speak();
      }
    }

function timerCallback () {  
    if (video.paused || video.ended) {  
      return;  
    }  
    captureImage();
    calculatePose();
    //console.log("right hand: " + rightHandPos); 
    setTimeout(function () {  
      timerCallback();  
    }, 64); 
  }

      function captureImage() {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
      }

      function calculatePose() {
        posenet.load().then(function(net) {
        var pose = net.estimateSinglePose(canvas, {
          flipHorizontal: true
          });
          currentPose = pose;

          // used to keep the number of tensors minimized--if removed, will experience a memory leak
          net.dispose();

        return currentPose;
      }).then(function(pose){
        rightArmPos = [pose.keypoints[8].position.x, pose.keypoints[8].position.y];
        leftArmPos = [pose.keypoints[7].position.x, pose.keypoints[7].position.y];
        headPos = [pose.keypoints[0].position.x, pose.keypoints[0].position.y]
        rightHandPos = [pose.keypoints[10].position.x, pose.keypoints[10].position.y]
        leftHandPos = [pose.keypoints[9].position.x, pose.keypoints[9].position.y]
        })
        console.log(tf.memory())
      }

      init();
        
   