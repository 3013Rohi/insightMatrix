const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");
const { protect, isAdmin } = require("../middleware/authMiddleware");

router.post("/register", register);
router.post("/login", login);

router.get("/profile", protect, (req, res) => {
  res.json({ message: `Welcome, ${req.user.id}! You are logged in.` });
  
});

// Test Protected route
router.get("/admin-only", protect, isAdmin, (req, res) => {
  res.json({ message: "Welcome Admin! " });
});

router.get("/", (req, res) => {
  res.send("Auth route working");
});

module.exports = router;

