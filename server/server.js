const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;  // HEROKU provides this

app.use(express.static(publicPath));

// if person's requrest not found just serve up index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});
// server up server
app.listen(port, () => {  //port on all systems for server
    console.log('server is up');
});  