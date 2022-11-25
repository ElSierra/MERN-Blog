const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const uuid = require("uuid");
multer = require("multer");
const cors = require("cors");

const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.CLIENT_ID);
const path = require("path");

const { verify } = require("./googleAuth");
const { Blog, Users, Comments } = require("./model");
const axios = require("axios");
const { router } = require("./routes/routes");
const { post } = require("./routes/posts");
const { json } = require("body-parser");
const { protect } = require("./auth");

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
//app.use(bodyParser.urlencoded({ extended: true }));

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
  console.log(req.headers);
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.get("/blog/:id", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.get("/profile", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});
app.get("/author/:id", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});
app.post("/api/login", (req, res) => {
  const header = req.headers;
  console.log(header.cookie.split(";")[1].slice(8));
  const { googleId, imageUrl, email, name } = req.body.profileObj;
  const { userType } = req.body;
  const URL = ``;

  axios
    .get(
      `https://people.googleapis.com/v1/people/${googleId}?personFields=names%2Cphotos&key=${process.env.API_KEY}`
    )
    .then((response) => {
      //remove the last four strings from the image url
      let image = response.data.photos[0].url;
      image = image.slice(0, -4);
      const user = new Users({
        name: name,
        email: email,
        picture: image + "s400",
        googleId: googleId,
        userType: userType,
      });

      // console.log(req.body);
      verify(req.body.tokenObj.id_token)
        .then((e) => {
          console.log(e);
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
    })
    .catch((error) => {
      console.log(error);
    });
});
app.use(router);
app.use(protect, post);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
