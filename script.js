const binaryInputElement = document.getElementById('binary');

const decInputElement = document.getElementById('dec');

const buttonElement = document.querySelector('button');

binaryInputElement.addEventListener('keypress', (e) => {
	!/^[0-1]{1,8}$/i.test(e.key) && alert('not a binary');
});

decInputElement.addEventListener('keyup', (e) => {
	!/^[0-9]$/i.test(e.key) && alert('number only');
});

function bin2dec(val) {
	const result = parseInt(val, 2);
	decInputElement.value = result;
}
function dec2bin(val) {
	const result = Number(val).toString(2);
	binaryInputElement.value = result;
}

buttonElement.addEventListener('click', () => {
	const valBinary = binaryInputElement.value;
	const valDec = decInputElement.value;
	if (valBinary & valDec) {
		alert('clear one of input value');
	} else {
		valBinary ? bin2dec(valBinary) : dec2bin(valDec);
	}
});
