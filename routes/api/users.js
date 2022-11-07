const express = require("express");

const router = express.Router();
const userCtrl = require("../../controllers/api/users");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.get("/check-token", userCtrl.checkToken);
router.post("/", userCtrl.create);
router.post("/login", userCtrl.login);
module.exports = router;
