const express = require("express")
const router = express.Router()

router.get("/Preta", (req, res) => {
  res.end(fs.readFileSync('bermudaPreta.html'));
})

module.exports = router