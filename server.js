const express = require('express');
const app = express();
const fs = require('fs');
const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname));

app.get('/', (req,res) => res.sendFile(__dirname + '/index.html'))

app.listen(PORT, () => console.log('succ'));




