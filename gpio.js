var gpio = require('rpi-gpio');

gpio.setMode(gpio.MODE_BCM);
gpio.setup(4, gpio.DIR_HIGH, (err) => {
	gpio.write(4, true, function(err) {
		if (err) throw err;
		console.log('B33333r');
	});

	setTimeout(() => {
		gpio.write(4, false, function(err) {
			        if (err) throw err;
			        console.log('ÖL stängd');
				process.exit();
			    });
	}, 1000)
});
 
/*function write() {
	    gpio.write(4, true, function(err) {
		            if (err) throw err;
		            console.log('Written to pin');
		        });
}*/
