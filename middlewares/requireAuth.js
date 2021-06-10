module.exports = function requireAuth(req, res, next) {
  console.log("this is auth !! ")
  console.log(req.session.currentUser)
  if (req.session.currentUser &&  req.session.currentUser.role === "admin") {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};
