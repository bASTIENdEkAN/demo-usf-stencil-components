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

    const regxEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
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

export {validationPhone};

// $phone.bind('keyup','keydown', function(e){
//     const $this = $(this);
//     let value = $this.val();
//     let thisValRe = value.replace(/ /g,"");

//     if(thisValRe.length <= 10) {
//         sliceVal = $this.val().length;
//     }

//     if( regexPhone.test(value) ){

//         if(thisValRe.length >= 8) {
//             $phone.val($this.val().slice(0, sliceVal));
//             return true;
//         }
//         return false;
//     }

//     return false;
// });
