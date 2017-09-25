const express = require('express');
const app = express();

app.get('/healthz', (req,res) => {
	res.status(200).end()
});

const redirects = require('./redirects.json');

app.use((req,res,next) => {
	let redirect = redirects[req.headers.host];
	if (redirect) res.redirect(redirect);
	else next();
});

app.use(express.static(__dirname + '/assets', ''));

app.listen(8080, () => {
	console.log('Run on 8080!')
});
