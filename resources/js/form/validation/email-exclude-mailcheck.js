const required = (field, attribute) => {
    var selector = field.getAttribute('required');
    if (selector === attribute){
        return true;
    } 
}

window.mailcheck = [' '];

let excludeMailCheck = (value) => {
    let mailValue = false;

    for( let i=0; i<window.mailcheck.length; i++){
        // console.log(`${value} == ${window.mailcheck[i]}`);
        if(value == window.mailcheck[i]){

            mailValue = false;
            return false;
        }else{

            mailValue = true;
        }
    }

    if(mailValue == true){
        return true;
    }

    return false;
};

const validationEmailExcludeMailCheck = (field) => {

    const regxEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    if( required(field, 'email') ){
        // Return false because there is NO error
        if(excludeMailCheck(field.value) == true ){
            return false;
        }
        return true;
    }
}

export {validationEmailExcludeMailCheck};