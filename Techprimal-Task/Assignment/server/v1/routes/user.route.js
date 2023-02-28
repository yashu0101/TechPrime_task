const router = require("express").Router();

const path = require("path");

const { createUser } = require("../controllers/user.controller");

router.post(
  "/",

  createUser
);

module.exports = router;
