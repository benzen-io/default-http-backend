const express = require('express');
const app = express();

app.get('/', (req,res) => {
	res.send('Hello World!')
});

app.listen(8080, () => {
	console.log('Run on 8080!');
});
