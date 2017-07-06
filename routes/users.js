var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
      test: "value",
      thing : [
          1,
          4,
          5,
          9
      ]
  });
});

module.exports = router;
