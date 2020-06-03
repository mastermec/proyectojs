'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom;
function platzom(str) {
  var tranlation = str;

  // si la plabra termina en "ar", se le quitan esos dos carracteres
  if (str.toLowerCase().endsWith('ar')) {
    tranlation = str.slice(0, -2);
  }
  // si la palabra inicia con z se le añade pe al final
  if (str.toLowerCase().startsWith('z')) {
    tranlation = tranlation + 'pe';
  }
  // si la pablabra traducida tiene 10 o mas letras se de partir a la mitad por un guion
  var length = tranlation.length;
  if (length >= 10) {
    var firsthalf = tranlation.slice(0, Math.round(length / 2));
    var secondhalf = tranlation.slice(Math.round(length / 2));
    tranlation = firsthalf + '_' + secondhalf;
  }
  // si la palabra original es un palíndromo ninguna regla anterior cuenta y se devuelve intercalando mayus y minus
  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };
  function minMay(str) {
    var length = str.length;
    var tranlation = '';
    var capitalize = true;
    for (var i = 0; i < length; i++) {
      var char = str.charAt(i);
      tranlation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }
    return tranlation;
  }
  if (str == reverse(str)) {
    return minMay(str);
  }
  return tranlation;
}
