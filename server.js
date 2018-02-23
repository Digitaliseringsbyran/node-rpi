const express = require('express');
const bodyparser = require('body-parser');
const app = express();

const open = require('./routes/open.js');
const close = require('./routes/close.js');

const port = 8000;

app.use(bodyparser.urlencoded({ extended: true }));

open(app, {});
close(app, {});

app.listen(port, () => {
	console.log(`Listening on ${port}..`);
});