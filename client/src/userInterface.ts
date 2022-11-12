const userInfo = {
  email: "",
  googleId: "",
  name: "",
  picture: "",
  userType: "",

  _id: "",
};

const blogInfo = {
  title: "",
  content: "",
  date: "",
  img: "",
  authorName: "",
  authorImg: "",
  authorGoogleId: "",
  timestamp: "",
  id: "",
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
}
export { userInfo, blogInfo, commentInfo };
