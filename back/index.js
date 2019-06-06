const express = require('express');

const app = express();

app.get('/message', (req, res) => res.json({ message: 'This very paragraph was fetched from the server' }));

app.listen(5000);
