const required = (field, attribute) => {
    var selector = field.getAttribute('required');
    if (selector === attribute){
        return true;
    } 
}
   
const validationEmail = (field) => {

    const regxEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    if( required(field, 'email') ){
        // Return false because there is NO error
        if( regxEmail.test(field.value) && field.value.length >= 5 ){
            return false;
        }
        return true;
    }
}
    

export {validationEmail};

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