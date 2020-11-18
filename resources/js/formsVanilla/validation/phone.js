const required = (field, attribute) => {
    var selector = field.getAttribute('required');
    if (selector === attribute){
        return true;
    } 
}


var sliceVal = 0;
let regexPhone = new RegExp("^[0-9 ]+$");
// let $phone = $('input[data-required="phone"]')

const validationPhone = (field) => {
    
    if( required(field, 'phone') ){
        
        let $this = field;
        let thisValRe = $this.value.replace(/ /g,"");
    
        if(thisValRe.length <= 10) {
            sliceVal = $this.value.length;
        }

        if( regexPhone.test($this.value) ){
            
            if(thisValRe.length >= 8) {
                $this.value = $this.value.slice(0, sliceVal);
                // Return false because there is NO error
                return false;
            }
            return true;
        }
    
        return true;
        
    }
}

const phoneInputs = document.querySelectorAll('input[required="phone"]');

phoneInputs.forEach(input => {

    input.addEventListener("keyup", (event) => {
        validationPhone(input);
    });
    input.addEventListener("keydown", (event) => {
        validationPhone(input);
    });

});
  
export {validationPhone};


