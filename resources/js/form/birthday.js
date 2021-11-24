
let input_birthday = document.getElementById('input_birthday');
let currentYear = new Date().getFullYear();

function checkBirthdayValue(str, max) {
	if (str.charAt(0) !== '0' || str == '00') {
		let num = parseInt(str);
		if(isNaN(num) || num <= 0 || num > max) num = 1;
		if(num > parseInt(max.toString().charAt(0)) && num.toString().length == 1){
			str = '0' + num;
		}else {
			str = num.toString()
		}
	};
	return str;
};

if(input_birthday){
	input_birthday.addEventListener('input', function(e) {
		this.type = 'text';
		let input = this.value;
		if (/\D\/$/.test(input)) input = input.substr(0, input.length - 3);
		let values = input.split('/').map(function(v) {
			return v.replace(/\D/g, '')
		});
		if (values[0]) values[0] = checkBirthdayValue(values[0], 31); // day check
		if (values[1]) values[1] = checkBirthdayValue(values[1], 12); // month check
		if (values[1]) values[1] = checkBirthdayValue(values[1], currentYear); // year check
		let output = values.map(function(v, i) {
			return v.length == 2 && i < 2 ? v + ' / ' : v;
		});
		this.value = output.join('').substr(0, 14);
	});
}