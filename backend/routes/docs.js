const express = require("express");

const DocController = require("../controllers/docs");

const extractFile = require("../middleware/file");

const router = express.Router();

router.post("", extractFile, DocController.createDoc);

router.get("", DocController.getDocs);

router.get("/:id", DocController.getDoc);

router.delete("/:id", DocController.deleteDoc);

router.put("/:id", extractFile, DocController.updateDoc);

module.exports = router;
