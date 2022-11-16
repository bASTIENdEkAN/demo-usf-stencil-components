// https://codepen.io/iamkeir/pen/jgzOJr?editors=1010   
const validationCheckboxSet = (field) => {
    
    // where at least one checkbox must be checked
    const fieldset = field.closest('[data-required-set]');
    const wrapper = field.closest('.button-boolean-wrapper');
    if (!fieldset) return false;  
    const checkboxes = fieldset.querySelectorAll('[type="checkbox"]');
    if (checkboxes.length > 0) {
        let checkedCount = 0;
        checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) { checkedCount++; }
        });
        if (checkedCount === 0) {
            if(wrapper) wrapper.classList.add('has-error');
            return true;
        } else {
            if(wrapper) wrapper.classList.remove('has-error');
            return false;
        }
    }    
    
}
    

export {validationCheckboxSet};

