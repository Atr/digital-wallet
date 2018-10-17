const router = require('express').Router();
const controller = require('./controller');

router.route('/users/:id/fundingoptions')
  .get(controller.user.getFundingOptions);

module.exports = router;
