import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Link,
} from "react-router-dom";
import logo from "./logo.svg";
import Author from "./routes/Author";
import Blog from "./routes/blogContent";
import Compose from "./routes/Compose";
import Home from "./routes/Home";

import SignIn from "./routes/SignIn";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="author/:id" element={<Author />} />
      <Route path="blog/:id" element={<Blog />} />
      <Route path="compose" element={<Compose />} />
    </Routes>
  );
}

export default App;
