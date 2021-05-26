const btn = document.getElementById("btn");
const content = document.getElementById("content");
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition ;

const recognition =  new SpeechRecognition();


recognition.onstart = function(){
  
  console.log("voic recognition started successfully! speak on your microphoneee!!!");
}

recognition.onresult = function(event){
  
  const current = event.resultIndex;
  
  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  read(transcript);
  
}


btn.addEventListener("click", ()=> {
  
  recognition.start();
  
  
});


function read(message){
  
  
  const speech = new SpeechSynthesisUtterance();
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  speech.text = message;
  
  window.speechSynthesis.speak(speech);
  
  
}