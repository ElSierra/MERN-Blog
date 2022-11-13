const userInfo = {
  email: "",
  googleId: "",
  name: "",
  picture: "",
  userType: "",

  _id: "",
};

const blogInfo = {
  title: "🔃🔃🔃🔃🔃🔃",
  content: "🔃🔃🔃🔃🔃🔃🔃🔃🔃🔃",
  date: "0/0/0",
  img: "/load.gif",
  authorName: "",
  authorImg: "/non.png",
  authorGoogleId: "",
  timestamp: "",
  id: "",
  _id: ""
};
const commentInfo = {
  name: "",
  img: "/non.png",
  comment: "",
  date: "",
  _id: "",
  googleId: "",
};
export interface users {
  email: string;
  googleId: string;
  name: string;
  picture: string;
  userType: string;
  _id: string;
}

export interface comment {
  name: string;
  img: string;
  comment: string;
  date: string;
  _id: string;
  googleId: String;
}
export interface blog {
  title: string;
  content: string;
  date: string;
  img: string;
  authorName: string;
  authorImg: string;
  authorGoogleId: string;
  timestamp: string;
  id: String;
  _id: string;
}
export { userInfo, blogInfo, commentInfo };
