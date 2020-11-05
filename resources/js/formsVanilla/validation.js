import { validateEmail } from './validation/email';
// export function validationOnBlur(){
// console.log(validateEmail())
// https://github.com/cferdinandi/bouncer
// https://www.npmjs.com/package/formbouncerjs
import Bouncer from 'formbouncerjs';

var validate = new Bouncer('form', {
    fieldClass: 'error', // Applied to fields with errors
	errorClass: 'error-message', // Applied to the error message for invalid fields
	fieldPrefix: 'bouncer-field_', // If a field doesn't have a name or ID, one is generated with this prefix
    errorPrefix: 'bouncer-error_', // Prefix used for error message IDs
    messageAfterField: true, 
    messageCustom: 'data-error-msg', // The data attribute to use for customer error messages
	messageTarget: 'data-error-location',
    customValidations: {
        email: function (field) {
            validateEmail.validation(field);
        }
    },
    messages: {
        // As a function
        email: function (field) {
            validateEmail.message(field);
        }
    }
});