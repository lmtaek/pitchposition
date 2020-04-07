  function speak(){
    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voic = voices[10];
    msg.voiceURI = "native";
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 0.8;
    msg.text = 'Please allow Pitch Position access to your camera.';
    speechSynthesis.speak(msg);
    return alert("fuck");
  }