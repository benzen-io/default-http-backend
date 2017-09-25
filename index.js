const express = require('express');
const app = express();

app.get('/healthz', (req,res) => {
	res.status(200).end()
});

app.get('/', (req,res) => {
	res.send('Hello World! 123')
});

app.listen(8080, () => {
	console.log('Run on 8080! 123')
});
