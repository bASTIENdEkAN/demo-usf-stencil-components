// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18
if (!Array.prototype.forEach) {

  Array.prototype.forEach = function(callback/*, thisArg*/) {

    var T, k;
    if (this === null) {
      throw new TypeError('this is null or not defined');
    }
    var O = Object(this);
    var len = O.length >>> 0;
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }
    if (arguments.length > 1) {
      T = arguments[1];
    }
    k = 0;
    while (k < len) {
      var kValue;
      if (k in O) {
        kValue = O[k];
        callback.call(T, kValue, k, O);
      }
      k++;
    }
  };
}

(function() {

  var instance = null,
      container;

  // Constructor
  this.MarvLightbox = function() {
    // Initialise plugin
    this.init();
  };

  // Initilise the plugin
  MarvLightbox.prototype.init = function() {

    document.querySelectorAll('[data-click]').forEach(function(e) {
      e.addEventListener('click', [clickevent]);
    });

  };

}());

// https://gist.github.com/bob-lee/e7520bfcdac266e5490f40c2759cc955
if ('NodeList' in window && !NodeList.prototype.forEach) {
  console.info('polyfill for IE11');
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}
