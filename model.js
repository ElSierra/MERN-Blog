const mongoose = require("mongoose");
const { userSchema, blogSchema, commentSchema } = require("./schema");

const Blog = mongoose.model("Note", blogSchema);

const Users = mongoose.model("User", userSchema);
const Comments = mongoose.model("Comment", commentSchema);

module.exports = { Blog, Users, Comments };
