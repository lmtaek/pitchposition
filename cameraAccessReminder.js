  function speak(){
    var msg = new SpeechSynthesisUtterance();
    try {
      var voices = window.speechSynthesis.getVoices();
      msg.voice = voices[10];
      msg.voiceURI = "native";
      msg.volume = 1;
      msg.rate = 0.9;
      msg.pitch = 0.8;
      msg.text = 'Please allow Pitch Position access to your camera.';
      speechSynthesis.speak(msg);
    } catch(error) {
      alert("Please allow Pitch Position access to your camera.");
    }
  }
  
  /*
  function hello() {
    var msg = new SpeechSynthesisUtterance();
    try {
      msg.text = "Howdy, partner."
      speechSynthesis.speak(msg);
    } catch (error) {
      console.log("oops")
    }
  }*/