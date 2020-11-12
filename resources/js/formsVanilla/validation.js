// https://github.com/cferdinandi/bouncer
// https://www.npmjs.com/package/formbouncerjs
import Bouncer from 'formbouncerjs';
// Import custom validations
import { validationEmail } from './validation/email';
import { validationEmailExcludeMailCheck } from './validation/email-exclude-mailcheck';
import { validationPhone } from './validation/phone';
// Import Default Error Message
import { defaultErrorMsg } from './validation/error-msg';


const validate = new Bouncer('[data-validate]', {
    disableSubmit: true,
    messageCustom: 'data-error-msg',
    messageTarget: 'data-error-location',
	customValidations: {
		email: function (field) {
            return validationEmail(field);
		},
		emailExcludeMailCheck: function (field) {
            return validationEmailExcludeMailCheck(field);
		},
		phone: function (field) {
            return validationPhone(field);
        }
	},
	messages: {
        missingValue: {
			checkbox: function (field) { return defaultErrorMsg(field) },
			radio: function (field) { return defaultErrorMsg(field) },
			select: function (field) { return defaultErrorMsg(field) },
			'select-multiple': function (field) { return defaultErrorMsg(field) },
			default: function (field) { return defaultErrorMsg(field) }
        },
        patternMismatch: {
			email: function (field) { return defaultErrorMsg(field) },
			url: function (field) { return defaultErrorMsg(field) },
			number: function (field) { return defaultErrorMsg(field) },
			color: function (field) { return defaultErrorMsg(field) },
			date: function (field) { return defaultErrorMsg(field) },
			time: function (field) { return defaultErrorMsg(field) },
			month: function (field) { return defaultErrorMsg(field) },
			default: function (field) { return defaultErrorMsg(field) }
		},
		outOfRange: {
			over: function (field) { return defaultErrorMsg(field) },
			under: function (field) { return defaultErrorMsg(field) }
		},
		wrongLength: {
			over: function (field) { return defaultErrorMsg(field) },
			under: function (field) { return defaultErrorMsg(field) }
		},
		fallback: function (field) { return defaultErrorMsg(field)}
		
	}   
});

console.log(validate)
// document.addEventListener('bouncerFormInvalid', function (event) {
// 	console.log(event.detail.errors);
// 	console.log(event.detail.errors[0].offsetTop);
// 	window.scrollTo(0, event.detail.errors[0].offsetTop);
// }, false);

document.addEventListener('bouncerFormValid', function () {
	alert('Form submitted successfully!');
	window.location.reload();
}, false);