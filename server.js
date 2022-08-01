const express = require('express');
const path = require('path');
const app = express();
// app.use(express.static(__dirname + '/dist/supermind-assignment-app'));
app.use(express.static('./dist/supermind-assignment-app'));

// app.get('/*', function(req,res) {
//   res.sendFile(path.join(__dirname+
//     '/dist/supermind-assignment-app/index.html'));});
app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/supermind-assignment-app/'}),
);
app.listen(process.env.PORT || 8080);
