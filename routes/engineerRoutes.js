const express = require("express");
const router = express.Router();
const engineerController = require("../controllers/engineerController");

router.get("/", engineerController.getAllEngineers);
router.get("/:id", engineerController.getEngineerById); 
router.post("/", engineerController.createEngineer);
router.put("/:id", engineerController.updateEngineer);
router.delete("/:id", engineerController.deleteEngineer);

module.exports = router;
