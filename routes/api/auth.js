const express = require("express");

const ctrl = require("../../controllers/auth");

const { validateBody, authentication } = require("../../middlewares");

const { schemas } = require("../../models/user");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", authentication, ctrl.getCurrent);

router.post("/logout", authentication, ctrl.logout);

router.patch(
  "/",
  authentication,
  validateBody(schemas.updateSubscriptionSchema),
  ctrl.updateSubscription
);

module.exports = router;
