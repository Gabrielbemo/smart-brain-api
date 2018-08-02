const express = require('express');

const app = express();

app.get('/' , (req, res) => {
    res.send('ta funcionando');
})

app.listen(3000, () => {
});