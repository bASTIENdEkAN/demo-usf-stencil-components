const required = (field, attribute) => {
    var selector = field.getAttribute('required');
    if (selector === attribute){
        return true;
    } 
}

const validationBirthday = (field) => {
    
    // https://www.codegrepper.com/code-examples/javascript/calculate+age+from+date+of+birth+in+javascript
    const getAge = (dateString) => 
    {
        // convert date to: YYYY/MM/DD
        const formatedDateString = `${dateString.slice(10,14)}/${dateString.slice(5,7)}/${dateString.slice(0,2)}`
        const today = new Date();
        const birthDate = new Date(formatedDateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
        {
            age--;
        }
        return age;
    }

    // https://stackoverflow.com/questions/7388001/javascript-regex-to-validate-date-format
    const regxBirth = /^\d{2}[ ][\/][ ]\d{2}[ ][\/][ ]\d{4}$/;
    
    if( required(field, 'birthday') ){
        // Return false because there is NO error
        if( regxBirth.test(field.value) && getAge(field.value) >= 18 && getAge(field.value) < 130 ){
            return false;
        }
        return true;
    }

}
    

export {validationBirthday};