var gpio = require('rpi-gpio');

module.exports = (app, db) => {
	app.post('/purchase', (req, res) => {
		gpio.setMode(gpio.MODE_BCM);
		gpio.setup(4, gpio.DIR_HIGH, (err) => {
			gpio.write(4, true, function(err) {
				if (err) throw err;
				console.log('Opened!');
			});

			setTimeout(() => {
				gpio.write(4, false, function(err) {
					if (err) throw err;
					console.log('Closed!');
				});
			}, 1000)
		});
	return res.send('Ok!')
	});
};