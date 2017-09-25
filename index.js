const express = require('express');
const app = express();

app.get('/healthz', (req,res) => {
	res.status(200).end()
});

app.get('/', (req,res) => {
	res.send('Hello ' + req.headers.host + '!')
});

app.listen(8080, () => {
	console.log('Run on 8080! 123')
});
