const router = require('express').Router();

router.get("/test", (req, res) => {
res.send("Hello, it's Working");
});


module.exports = router;