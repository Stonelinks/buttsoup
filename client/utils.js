window.getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

window.pickRandom = function(array) {
  return array[Math.floor(Math.random() * array.length)];
};

window.print = function(s) {
  console.log(s);
};

window.redirect = function(address) {
  window.location.href = address;
};

window.reload = function() {
  window.location.reload(true);
};

window.isJSON = function(text) {
  if (text === undefined) {
    return false;
  }
  else {
    return /^[\],:{}\s]*$/.test(text.replace(/\\["\\\/bfnrtu]/g, '@').
    replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
    replace(/(?:^|:|,)(?:\s*\[)+/g, ''));
  }
};

window.setLocalSetting = function(attr, _default) {
  window.localStorage.setItem(attr, _default);
};

window.getLocalSetting = function(attr, _default) {
  try {
    if (window.localStorage.hasOwnProperty(attr)) {
      var val = window.localStorage.getItem(attr);
      if (window.isJSON(val)) {
        return JSON.parse(val);
      }
      else {
        return val;
      }
    }
    else {
      window.setLocalSetting(attr, _default);
      return _default;
    }
  }
  catch (err) {
    print('Warning: something nasty happened with local setting ' + attr);
    print('         oh well returning default setting ' + _default);
    print(err);
    return _default;
  }
};
