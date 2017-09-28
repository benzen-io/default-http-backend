const express = require('express');
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// heath check
app.get('/healthz', (req,res) => {
	res.status(200).end()
});

// redirections
const redirects = require('./redirects.json');
app.use((req,res,next) => {
	let redirect = redirects[req.hostname];
	if (redirect) res.redirect(redirect);
	else next();
});

// statics
app.use('/assets', express.static(__dirname + '/assets'));

// main
app.use((req,res) => {
	res.render('index', {
		hostname: req.hostname
	})
});

app.listen(8080, () => {
	console.log('Run on 8080!')
});
