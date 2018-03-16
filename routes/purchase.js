module.exports = (app, db) => {
	app.post('/purchase', (req, res) => {
		console.log(req)
		res.send(req.body)
	});
};