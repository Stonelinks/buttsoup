window.getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

window.pickRandom = function(array) {
  return array[Math.floor(Math.random() * array.length)];
};

window.print = function(s) {
  console.log(s);
};
