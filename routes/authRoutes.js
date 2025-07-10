const express = require("express");
const router = express.Router();
const {register,login,adminDashboard}=require("../controllers/authController");
const { protect ,isAdmin} = require("../middleware/authMiddleware"); 
 
router.post('/register', register);
router.post('/login', login);

// ✅ Protected route
router.get("/profile", protect, (req, res) => {
  res.json({
    message: `Welcome, ${req.user.id}! You are logged in.`,
      user: req.user,
  });
});
router.get("/", (req, res) => {
  res.send("Auth route working");
});
//Admin-only route
router.get("/admin-dashboard", protect, isAdmin, adminDashboard);

module.exports = router;  // ✅ export router, not something else!
