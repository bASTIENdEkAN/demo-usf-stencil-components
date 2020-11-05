

const required = (field, attribute) => {

    var selector = field.getAttribute('data-required');

    if (selector === attribute){
        console.log('data-required-email')
        return true;
    } 
}

class validationEmail{
    
    validation(field) {
        this.field = field;
        console.log('sguen');
        const regxEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        
        if( required(field, 'email') ){
            // Return false because there is NO error
            console.log('isEmail')
            if( regxEmail.test(this.field.value) && this.field.value.length >= 5 ){
                console.log('false')
                return false;
            }
            console.log('true')
            return true;
        }
        // Return true when there is
        return true;
    }

    message(field) {
        this.field = field;

        var customMessage = this.field.getAttribute('data-error-msg');
        return customMessage ? customMessage : 'no error settingé'
    }

}
const validateEmail = new validationEmail();

export {validateEmail};

// BY FUNCTION:
// const validateEmail = (field) => {
//     const $field = field;
//     const regxEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
//     if ($field.attributes.required.value === 'email'){
//         // Return false because there is NO error
//         if( regxEmail.test($field.value) && $field.value.length >= 5 ){
//             return false;
//         }
//         return true;
//     } 
//     // Return true when there is
//     return true;
// }

// export {validateEmail};