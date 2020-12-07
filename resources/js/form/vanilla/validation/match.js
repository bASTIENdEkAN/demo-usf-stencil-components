const required = (field, attribute) => {
    var selector = field.getAttribute('required');
    if (selector === attribute){
        return true;
    } 
}

const validationMatch = (field) => {
    
    if( required(field, 'match') ){
        
        // Look for a selector for a field to compare
        // If there isn't one, return false (no error)
        var selector = field.getAttribute('data-match');
        if (!selector) return false;

        // Get the field to compare
        var otherField = field.form.querySelector(selector);
        if (!otherField) return false;

        // Compare the two field values
        // We use a negative comparison here because if they do match, the field validates
        // We want to return true for failures, which can be confusing
        return otherField.value !== field.value;
        
    }
}
  
export {validationMatch};


