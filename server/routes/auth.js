const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    console.log("hey");
    req.session.token = req.user.token;
    res.redirect("/");
    // res.redirect("/home");
  }
);

//does it werrrk?
router.get("/verify", (req, res) => {
  if (req.user) {
    console.log(req.user);
  } else {
    console.log("not Auth");
  }
});
router.get("/logout", (req, res) => {
  req.logout();
  req.session = null;
  res.redirect("/");
});
module.exports = router;
