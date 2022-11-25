const {Router} = require('express');

const {verify} = require('../googleAuth')
const { Blog, Users, Comments } = require("../model");
const axios = require("axios");
const router = Router();
const { upload } = require("../fileupload");
router.get("/compose", (req, res) => {
    res.send("error");
  });
 
  //****************************************************** */
  // simple route
  
  //? - Get the BlogPots from the MongoDB
  router.get("/api/", (req, res) => {
    Blog.find((err, found) => {
      found = found.reverse();
      !err ? res.send(found) : console.log(err);
    });
  });
  
  //? - Get Random BlogPosts
  router.get("/api/random", (req, res) => {
    Blog.find((err, found) => {
      //get random 3 elementts form array
      let random = found.sort(() => Math.random() - 0.5).slice(0, 3);
      !err ? res.send(random) : console.log(err);
    });
  });
  
  //? - Creates a new user or logins in the user and verifies the token

  //? - Uploads  the BlogPost to the MongoDB
  
 
  //? - Gets Single BlogPost from the MongoDB by ID
  router.get("/api/singlepost/:id", (req, res) => {
    Blog.findOne({ _id: req.params.id }, (err, found) => {
      !err ? res.send(found) : console.log(err);
    });
  });
  
  router.get("/download/:filename", (req, res) => {
    const filePath = __dirname + "/public/" + req.params.filename;
    res.download(
      filePath,
      "daughter.png", // Remember to include file extension
      (err) => {
        if (err) {
          res.send({
            error: err,
            msg: "Problem downloading the file",
          });
        }
      }
    );
  });
  
  //? - Gets the Authors BlogPost from the MongoDB by ID
  router.get("/api/authorpost/:id", (req, res) => {
    //console.log(req.params.id);
    Blog.find({ id: req.params.id }, (err, found) => {
      !err ? res.send(found) : console.log(err);
    });
  });
  //? - Gets Lists of Authors from the MongoDB
  router.get("/api/author", (req, res) => {
    Users.find({ userType: "writer" }, (err, found) => {
      //console.log(found);
      !err ? res.send(found) : console.log(err);
    });
  });
  
  //? - Gets the  Author from the MongoDB by ID
  router.get("/api/author/:id", (req, res) => {
    //console.log(req.params.id);
    Users.findOne({ _id: req.params.id }, (err, found) => {
      !err ? res.send(found) : console.log(err);
    });
  });
  
  //? - Posts the Comment to the MongoDB

  
  //? - Gets the Comments from the MongoDB per post by ID
  router.get("/api/comments/:comment", (req, res) => {
    //console.log(req.params.comment);
    Comments.find({ id: req.params.comment }, (err, found) => {
      if (!err) {
        res.send(found);
        console.log(found);
      } else {
        console.log(err);
      }
    });
  });
  
  //? - Gets the Comments from the MongoDB per user ID
  
  router.get("/api/mycomments/:comment", (req, res) => {
    //console.log(req.params.comment);
    Comments.find({ googleId: req.params.comment }, (err, found) => {
      if (!err) {
        res.send(found);
        //console.log(found);
      } else {
        console.log(err);
      }
    });
  });
  
  //? - Deletes the Posts from the MongoDB per user ID
  router.delete("/api/posts/:id", (req, res) => {
    Blog.deleteOne({ _id: req.params.id }, (err) => {
      if (!err) {
        console.log(`Successfully deleted ${req.params.id}`);
        res.send("Successfully deleted");
      } else {
        console.log(err);
      }
    });
  });

  module.exports = {router}