module.exports = (app, db) => {
	app.post('/open', (req, res) => {
		console.log(req)
		res.send(req.body)
	});
};