var gpio = require('rpi-gpio');
module.exports = (app, db) => {
	app.post('/close', (req, res) => {
		gpio.setMode(gpio.MODE_BCM);
		gpio.setup(4, gpio.DIR_HIGH, (err) => {
				gpio.write(4, false, function(err) {
							if (err) throw err;
							console.log('B33333r');
						});
		});
		res.send('Close')
	});
};
