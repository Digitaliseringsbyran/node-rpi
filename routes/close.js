module.exports = (app, db) => {
	app.post('/close', (req, res) => {
		res.send('Close')
	});
};