const express = require('express');
const app = express();

const port = process.env.PORT || 3001; 

app.use(express.static('public'));

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');

});
app.get('/audio', (req,res) => {
    res.sendFile(__dirname + '/audio.html');

});
app.get('/video', (req,res) => {
    res.sendFile(__dirname + '/video.html');

});

app.listen(port, () => {
  console.log(`listen on ${port}`);
});
