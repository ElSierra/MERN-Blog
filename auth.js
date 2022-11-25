const { verify } = require("./googleAuth");

const protect = (req, res, next) => {
  const header = req.headers;
  const bearer = header.cookie.split(";")[1].slice(8);

  if (!bearer) {
    res.status(401);
    res.json({ message: "Unauthorized access" });
    return;
  }

  const token = bearer;

  if (!token) {
    res.status(401);
    res.json({ message: "Invalid token" });
    return;
  }
  try {
    verify(token)
      .then((e) => {
        req.user = e.email;
      })
      .catch(console.error);
    next();
  } catch (e) {
    console.error(e);

    res.status(401);
    res.json({ message: "not valid" });
    return;
  }
};

module.exports = {protect};