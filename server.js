const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const path = require('path');

const users = require('./routes/api/users');
var formidable = require('formidable');

const app = express();


// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = 'mongodb://ramzdb:Athvika-18@ds161710.mlab.com:61710/ramdb';

// Connect to MongoDB
mongoose
  .connect(db,{ useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

  // Use Routes
app.use('/api/users', users);

app.use(express.static('client/build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});


app.use('/api/users/files', users);



app.post('/files', function (req, res){
  console.log("fileupload");
  var form = new formidable.IncomingForm();

  form.parse(req);

  form.on('fileBegin', function (name, file){
      file.path = __dirname+'/uploads/' + file.name;
      console.log(file.path);
  });

  form.on('file', function (name, file){
      console.log('Uploaded ' + file.name);
  });


 res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
 
});



const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
