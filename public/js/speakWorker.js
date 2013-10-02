importScripts('https://raw.github.com/kripken/speak.js/master/speakGenerator.js');

onmessage = function(event) {
  postMessage(generateSpeech(event.data.text, event.data.args));
};

