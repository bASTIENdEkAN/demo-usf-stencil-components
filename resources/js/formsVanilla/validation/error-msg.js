const defaultErrorMsg = (field) => {
    var customMessage = field.getAttribute('data-error-msg');
    return customMessage ? customMessage : 'This field is required.'
}
    

export {defaultErrorMsg};