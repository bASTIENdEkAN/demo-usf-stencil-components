// https://github.com/cferdinandi/bouncer
// https://www.npmjs.com/package/formbouncerjs
import Bouncer from 'formbouncerjs';
// Import custom validations
import { validationEmail } from './validation/email';
import { validationEmailExcludeMailCheck } from './validation/email-exclude-mailcheck';
import { validationPhone } from './validation/phone';
import { validationMatch } from './validation/match';
// Import Default Error Message
import { defaultErrorMsg, messages } from './error-msg';


const validate = new Bouncer('[data-validate]', {
    disableSubmit: false,
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
		},
		match: function (field) {
            return validationMatch(field);
		},
	},
	messages: {
        missingValue: {
			checkbox: function (field) { return defaultErrorMsg(field, messages.missingValue.checkbox) },
			radio: function (field) { return defaultErrorMsg(field, messages.missingValue.radio) },
			select: function (field) { return defaultErrorMsg(field, messages.missingValue.select) },
			'select-multiple': function (field) { return defaultErrorMsg(field, messages.missingValue.selectMultiple) },
			default: function (field) { return defaultErrorMsg(field, messages.missingValue.default) }
        },
        patternMismatch: {
			email: function (field) { return defaultErrorMsg(field, messages.patternMismatch.email) },
			url: function (field) { return defaultErrorMsg(field, messages.patternMismatch.url) },
			number: function (field) { return defaultErrorMsg(field, messages.patternMismatch.number) },
			color: function (field) { return defaultErrorMsg(field, messages.patternMismatch.color) },
			date: function (field) { return defaultErrorMsg(field, messages.patternMismatch.date) },
			time: function (field) { return defaultErrorMsg(field, messages.patternMismatch.time) },
			month: function (field) { return defaultErrorMsg(field, messages.patternMismatch.month) },
			default: function (field) { return defaultErrorMsg(field, messages.patternMismatch.default) }
		},
		outOfRange: {
			over: function (field) { return defaultErrorMsg(field, messages.outOfRange.over) },
			under: function (field) { return defaultErrorMsg(field, messages.outOfRange.under) }
		},
		wrongLength: {
			over: function (field) { return defaultErrorMsg(field, messages.wrongLength.over) },
			under: function (field) { return defaultErrorMsg(field, messages.wrongLength.under) }
		},

		email: function (field) { return defaultErrorMsg(field, messages.patternMismatch.email)},
		emailExcludeMailCheck: function (field) { return defaultErrorMsg(field, messages.patternMismatch.email)},
		phone: function (field) { return defaultErrorMsg(field, messages.patternMismatch.phone)},
		match: function (field) { return defaultErrorMsg(field, messages.patternMismatch.match)},

		fallback: function (field) { return defaultErrorMsg(field, messages.fallback)},
		
	}   
});

console.log(validate)
// document.addEventListener('bouncerFormInvalid', function (event) {
// 	console.log(event.detail.errors);
// 	console.log(event.detail.errors[0].offsetTop);
// 	window.scrollTo(0, event.detail.errors[0].offsetTop);
// }, false);

// document.addEventListener('bouncerFormValid', function () {
// 	alert('Form submitted successfully!');
// 	window.location.reload();
// }, false);