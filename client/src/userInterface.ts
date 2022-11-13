const userInfo = {
  email: "",
  googleId: "",
  name: "",
  picture: "",
  userType: "",

  _id: "",
};

const blogInfo = {
  title: "loading..",
  content: "The content is loading please wait......",
  date: "0/0/0",
  img: "/load.png",
  authorName: "",
  authorImg: "/logo.png",
  authorGoogleId: "",
  timestamp: "",
  id: "",
  _id: ""
};
const commentInfo = {
  name: "",
  img: "",
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
