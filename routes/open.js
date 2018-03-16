var gpio = require('rpi-gpio');

module.exports = (app, db) => {
	app.post('/open', (req, res) => {
		gpio.setMode(gpio.MODE_BCM);
		gpio.setup(4, gpio.DIR_HIGH, (err) => {
				gpio.write(4, true, function(err) {
							if (err) throw err;
							console.log('B33333r');
						});
		});
		console.log(req)
		res.send(req.body)
	});
};
