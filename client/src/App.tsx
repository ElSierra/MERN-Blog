import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Link,
} from "react-router-dom";
import Profile from "./routes/Profile";
import logo from "./logo.svg";
import Author from "./routes/Author";
import Blog from "./routes/blogContent";
import Compose from "./routes/Compose";
import Home from "./routes/Home";

import SignIn from "./routes/SignIn";
import NotFound from "./routes/NotFound";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="author/:id" element={<Author />} />
      <Route path="profile" element={<Profile />} />
      <Route path="blog/:id" element={<Blog />} />
      <Route path="compose" element={<Compose />} />
      <Route path='*' element={<NotFound />}/>
    </Routes>
  );
}

export default App;
