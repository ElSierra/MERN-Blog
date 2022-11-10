const { default: mongoose } = require("mongoose");


//! - Didn't use it yet
const userSchema = {
    // email: String,
    // password: String,
  
    name: String,
    email: String,
    picture: String,
    googleId: String,
    userType: String,

  }
  //! - Schema for the BlogPost
  
  const blogSchema = {
    title: String,
    content: String,
    date: String,
    img: String,
    authorName: String,
    authorImg: String,
    timestamp: String,
    authorGoogleId: String,
    id: String,
  };
  //! - Schema for Comments
  
  const commentSchema = {
    name: String,
    img: String,
    comment: String,
    id: String,
    date: String,
  };

  module.exports = { userSchema, blogSchema, commentSchema };