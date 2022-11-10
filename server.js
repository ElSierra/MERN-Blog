const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const uuid = require("uuid");
multer = require("multer");
const cors = require("cors");
const { upload } = require("./fileupload");

const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.CLIENT_ID);
const path = require("path");

const { verify } = require("./googleAuth");
const { Blog, Users, Comments } = require("./model");

/* 1- Create the .env File with the following content:
MONGO_URI=your_mongo_uri
TOKENFORBLOG= RANDOM STRINGS OF CHARACTERS // This is the token you will use to post a blog {it makes sure that only you can post a blog}
2 - Build the react app and copy it to the public folder


*/

//! Express Initialization
const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + "/public"));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO_URI)
  .then((e) => {
    console.log("Connected Successfully");
  })
  .catch((e) => {
    console.error(e.message);
  });

//! - Didn't use it yet

//! - Creating the MongoDB Model


//? - To be used after building react app and copying it to the public folder
//****************************************************** */
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});
app.get("/blogpost/:id", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});
app.get("/compose", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});
//****************************************************** */
// simple route

//? - Get the BlogPots from the MongoDB
app.get("/api/", (req, res) => {
  Blog.find((err, found) => {
    found = found.reverse();
    !err ? res.send(found) : console.log(err);
  });
});


app.post("/api/login", (req, res) => {
  const { googleId, imageUrl, email, name } = req.body.profileObj;
  const { userType } = req.body;
  const user = new Users({
    name: name,
    email: email,
    picture: imageUrl,
    googleId: googleId,
    userType: userType,
  });

  // console.log(req.body);
  verify(req.body.tokenObj.id_token)
    .then((e) => {
      if (e.email === email) {
        loginSign();
      } else {
        res.send({ error: "Email doesn't match" });
      }
    })
    .catch(console.error);

  function loginSign() {
    Users.findOne({ googleId: googleId }, (err, found) => {
      if (!err) {
        if (!found) {
          user.save();
          res.send(user);
        } else {
          res.send(found);
        }
      } else {
        console.log(err);
      }
    });
  }
});

//? - Uploads  the BlogPost to the MongoDB

const uploadImage = upload.single("file");
app.post("/api/blogpost", (req, res) => {
  uploadImage(req, res, (err) => {
    if (!err) {
      const url = req.protocol + "://" + req.get("host");
      const {
        env,
        title,
        content,
        date,
        authorName,
        authorImg,
        timestamp,
        authorGoogleId,
        id
      } = req.body;
      console.log(req.body);

      const newCompose = new Blog({
        title: title,
        content: content,
        date: date,
        img: url + "/uploads/" + req.file.filename,
        authorName: authorName,
        authorImg: authorImg,
        authorGoogleId: authorGoogleId,
        timestamp: timestamp,
        id: id,
      });

      if (env === process.env.TOKENFORBLOG) {
        newCompose.save((err) => {
          if (!err) {
            res.send(`Successfully added `);
          } else {
            res.send(err);
          }
        });
      } else {
        res.send({ error: 401, msg: "Unautorized Access" });
      }
    } else {
      console.log(err.code);
      res.send(err.code);
    }
  });
});

//? - Gets Single BlogPost from the MongoDB by ID
app.get("/api/singlepost/:id", (req, res) => {
  Blog.findOne({ _id: req.params.id }, (err, found) => {
    !err ? res.send(found) : console.log(err);
  });
});

//? - Gets the Authors BlogPost from the MongoDB by ID
app.get("/api/authorpost/:googleid", (req, res) => {
  Blog.find({ authorGoogleId: req.params.googleid }, (err, found) => {
    !err ? res.send(found) : console.log(err);
  });
});

app.get("/api/author", (req, res) => {
  Users.find({ userType: "writer" }, (err, found) => {
    !err ? res.send(found) : console.log(err);
  });
});
app.get("/api/author/:id", (req, res) => {
  Users.findOne({ _id: req.params.id }, (err, found) => {
    !err ? res.send(found) : console.log(err);
  });
});

//? - Posts the Comment to the MongoDB
app.post("/api/comments", (req, res) => {
  console.log(req.body);
  const comment = Comments({
    name: req.body.name,
    img: req.body.img,
    comment: req.body.comment,
    id: req.body.id,
    date: req.body.date,
  });
  if (req.body.env === process.env.TOKENFORBLOG) {
    comment.save((err) => {
      if (!err) {
        res.send(`Successfully added `);
      } else {
        res.send(err);
      }
    });
  } else {
    res.send({ error: 501, msg: "Unauthorized access" });
  }
});
app.get("/api/comments/:comment", (req, res) => {
  Comments.find({ id: req.params.comment }, (err, found) => {
    !err ? res.send(found) : console.log(err);
  });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
