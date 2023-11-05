const express = require("express");
const ctrl = require("../../controllers/contacts");

const {
  validateBody,
  isValidId,
  authentication,
} = require("../../middlewares");

const { schemas } = require("../../models/contact");
const router = express.Router();

router.get("/", authentication, ctrl.getAll);
router.get("/:contactId", authentication, isValidId, ctrl.getById);
router.post("/", authentication, validateBody(schemas.addSchema), ctrl.add);
router.put("/:contactId", authentication, isValidId, validateBody(schemas.addSchema), ctrl.updateById);
router.patch("/:contactId/favorite", authentication, isValidId, validateBody(schemas.updateFavoriteSchema), ctrl.updateStatusContact);
router.delete("/:contactId", authentication, isValidId, ctrl.deleteById);

module.exports = router;
