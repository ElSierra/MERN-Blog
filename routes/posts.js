const {Router} = require('express');

const {verify} = require('../googleAuth')
const { Blog, Users, Comments } = require("../model");
const axios = require("axios");
const post = Router();
const { upload } = require("../fileupload");

const uploadImage = upload.single("file");
post.post("/api/blogpost", (req, res) => {
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
        id,
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

post.post("/api/comments", (req, res) => {
    //console.log(req.body);
    const comment = Comments({
      name: req.body.name,
      img: req.body.img,
      comment: req.body.comment,
      id: req.body.id,
      date: req.body.date,
      googleId: req.body.googleId,
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
  post.delete("/api/posts/:id", (req, res) => {
    Blog.deleteOne({ _id: req.params.id }, (err) => {
      if (!err) {
        console.log(`Successfully deleted ${req.params.id}`);
        res.send("Successfully deleted");
      } else {
        console.log(err);
      }
    });
  });
  module.exports = {post}