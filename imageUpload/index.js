var express = require('express');
var app = express();
const fs = require('fs');
var bodyParser = require('body-parser');
var multer = require('multer');
var cors = require('cors')
app.use(cors())
app.use(express.static('./dist/image-upload'));
app.use(bodyParser.json());
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/storeImg', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log("connected to mongo")
});
var schema = new mongoose.Schema({
  img: { data: Buffer, contentType: String }
});

// our model
var A = mongoose.model('A', schema);

var a = new A;
var storage = multer.diskStorage({ //multers disk storage settings
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    var datetimestamp = Date.now();
    cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]);
  }
});

var upload = multer({ //multer settings
  storage: storage
}).single('file');

/** API path that will upload the files */
app.post('/upload', function (req, res, next) {
  let filePath;
  upload(req, res, async function (err) {
    filePath = await `./uploads/${req.file.filename}`
    if (err) {
      res.json({ error_code: 1, err_desc: err });
      return;
    }

    await saveImageInMongo(filePath);

    await res.json({ error_code: 0, err_desc: null });
    // await res.send(200);
    next();
  });

});

app.get('/getUploads', function (req, res, next) {
  A.find(function (err, doc) {
    if (err) return console.error(err);
    res.contentType(doc[0].img.contentType);
    res.send(doc[0].img.data);
    next();
  })

});

app.get('/getimage/:id', function (req, res, next) {
  var user_id = req.params.id;
  A.findById(user_id, function (err, doc) {
    if (err) return console.error(err);
    // console.log(doc);
    res.contentType(doc.img.contentType);
    res.send(doc.img.data);
    next();
  });
  //  res.sendStatus(200)
});

app.get('/getAllIds', function (req, res, next) {

  A.find(async function (err, doc) {
    if (err) return console.error(err);
    let data = await doc;
    let dataTosend = await sortID(data);
    res.send(dataTosend)

  })

});

function sortID(doc) {
  return new Promise((res, rej) => {
    var arr = []
    for (let i = 0; i < doc.length; i++) {
      let id = doc[i]._id
      if (id) {
        arr.push(`http://localhost:3001/getimage/${id}`);
      }
      if (i == doc.length - 1) {
        res(arr);
      }
    }
  })



}
function saveImageInMongo(image) {
  return new Promise((res1, rej) => {
    setTimeout(() => {
      var a = new A;
      var imgPath = image;
      a.img.data = fs.readFileSync(imgPath);
      a.img.contentType = 'image/png';
      a.save(function (err, a) {
        if (err) {
          rej('error', err)
          console.log('error', err);
        } else {
          res1(200);
        }
        console.log('saved img to mongo');
      });
    }, 300)

  })

}

app.get('/deleteImage/:id', function (req, res, next) {
  var a = new A;
  A.findOneAndDelete({ _id: req.params.id }, (err, doc) => {
    if (doc) {
     console.log("deleted sucessfully from mongo DB")
    }
  })
  res.send('deleted');
  next();
})

function getImages() {
  var schema = new mongoose.Schema({
    img: { data: Buffer, contentType: String }
  });

  // our model
  var A = mongoose.model('A', schema);

  var a = new A;
  A.find(function (err, image) {
    if (err) return console.error(err);
    // console.log(image);
  })
}
app.listen('3001', function () {
  console.log('server running on 3001...');
});

