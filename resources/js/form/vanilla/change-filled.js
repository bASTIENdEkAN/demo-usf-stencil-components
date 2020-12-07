// https://gomakethings.com/how-to-get-the-closest-parent-element-with-a-matching-selector-using-vanilla-javascript/
var getClosest = function (elem, selector) {

	// Element.matches() polyfill
	if (!Element.prototype.matches) {
	    Element.prototype.matches =
	        Element.prototype.matchesSelector ||
	        Element.prototype.mozMatchesSelector ||
	        Element.prototype.msMatchesSelector ||
	        Element.prototype.oMatchesSelector ||
	        Element.prototype.webkitMatchesSelector ||
	        function(s) {
	            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
	                i = matches.length;
	            while (--i >= 0 && matches.item(i) !== this) {}
	            return i > -1;
	        };
	}

	// Get the closest matching element
	for ( ; elem && elem !== document; elem = elem.parentNode ) {
		if ( elem.matches( selector ) ) return elem;
	}
	return null;

};
///

const inputs = document.querySelectorAll('.change-filled input, .change-filled textarea');

let setInputClasses = (input, boolean) => {

    // let wrapper = input.parentNode.parentNode;
    let wrapper = getClosest(input, '.field');


    if (input.value.length > 0 ) {
        wrapper.classList.add('is-filled');
    }else{
        if(input.id != 'intl-tel-input'){
            wrapper.classList.remove('is-filled');
        }
    }

    if( boolean == true ){
        wrapper.classList.add('is-filled');
    }
}

inputs.forEach(input => {
  input.onchange = () => {
      setInputClasses(input);
  };

  input.addEventListener("input", (event) => {
      setInputClasses(input, true);
  });
  input.addEventListener("focus", (event) => {
      setInputClasses(input, true);
  });
  input.addEventListener("focusout", (event) => {
      setInputClasses(input);
  });

  setTimeout(() => {
    setInputClasses(input);
  }, 200);
});
