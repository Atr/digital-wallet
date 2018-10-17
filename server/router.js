const router = require('express').Router();
const controller = require('./controller');

router.route('/users/:id/fundingoptions')
  .get(controller.users.getFundingOptions)
  .post(controller.users.postFundingOption);

router.route('/users/:id/fundingoptions/:cardId')
  .get(controller.users.getSingleFundingOption)
  .put(controller.users.putSingleFundingOption)
  .delete(controller.users.deleteSingleFundingOption);

module.exports = router;
