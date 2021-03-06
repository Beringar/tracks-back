const express = require("express");
const multer = require("multer");
const {
  getAllTracks,
  deleteTrack,
  createTrack,
  getTrack,
  updateTrack,
} = require("../controllers/tracksControllers");

const router = express.Router();
const upload = multer({ dest: "uploads" });

router.get("/", getAllTracks);
router.get("/:id", getTrack);
router.delete("/:id", deleteTrack);
router.post(
  "/new",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "gpx", maxCount: 1 },
  ]),
  createTrack
);
router.patch(
  "/update/:id",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "gpx", maxCount: 1 },
  ]),
  updateTrack
);

module.exports = router;
