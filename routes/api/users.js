const express = require('express');
const router = express.Router();
var formidable = require('formidable');


// Load User model
const User = require('../../models/User');

// Load Files model
const Files = require('../../models/Files');


// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));


// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      //errors.email = 'Email already exists';
      //return res.status(400).json(errors);
      //console.log("email aready exist");
      return res.status(400).json("Email aready exist");
    } else {

      const newUser = new User({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password,
        file: req.body.file
      });
      
      newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));

    }
  });
});


router.use('/filesmiddle', function (req, res, next) {

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json("Email aready exist");
    } else {

      const newFileDetail = new Files({
        email: req.body.email,
        files: req.body.files
      });
      
      newFileDetail
            .save()
            .then(fileData => res.json(fileData))
            .catch(err => console.log(err));

    }
  });
 // next()
});

/*router.post('/files', (req, res) => {
  console.log("fileupload");
  var form = new formidable.IncomingForm();

  form.parse(req);

  form.on('fileBegin', function (name, file){
    console.log("filebegin");
      file.path = __dirname+'/uploads/' + file.name;
      console.log(file.path);
  });

  form.on('file', function (name, file){
      console.log('Uploaded ' + file.name);
  });
  console.log("router file");

  res.json("files");

}); */


module.exports = router;
