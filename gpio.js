const gpio = require('rpi-gpio')
const pin = 18; 

gpio.setup(7, gpio.DIR_OUT, write);

set(7, true)
setTimeout(set(7, false), 3000);

function set(pin, value) {
	gpio.write(pin, value, function(err) {
		if (err) throw err;
		console.log(`Written to pin`);
	});
}