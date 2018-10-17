// Note:  the Promise.resolve statements you see are just placeholders
// In reality, they would be function calls to the database
// that would return a promise based on whether the operation was successful or unsuccessful

const controller = {
  users: {
    getFundingOptions: (req, res) => {
      // This callback would check to see if the user exists in the DB
      // If they didn't, it would return 404
      // Otherwise it would return that user's funding options
      Promise.resolve('would send back a fundingOptions object with only cardBrand, cardLastDigits, cardId')
        .then(data => res.status(200).json(data))
        .catch(error => res.status(404).json(error));
    },
    postFundingOption: (req, res) => {
      // This callback would check to see if the payment option already exists in the DB.
      // If it does, it would send back error 409.
      // Otherwise it would add the option and send back a success status code.
      Promise.resolve('would send back a success message if funding option doesn\'t already exist')
        .then(data => res.status(201).json(data))
        .catch(error => res.status(409).json(error));
    },
    getSingleFundingOption: (req, res) => {
      // This callback would pull the cardId from the request..
      // ..and check to see if the payment option exists in the DB.
      // If it doesn't, it would send back error 404.
      // Otherwise it would send back an object with the full cc info.
      Promise.resolve('would send back a credit card object')
        .then(data => res.status(200).json(data))
        .catch(error => res.status(404).send(error));
    },
    putSingleFundingOption: (req, res) => {
      // This callback would pull the cardId from the request..
      // ..and check to see if the payment option exists in the DB.
      // If it doesn't, it would send back error 404.
      // Otherwise it would delete the existing info for that cardId..
      // ..update it with the new info, and send back a success message.
      Promise.resolve('would send back a success message if card was successfully updated')
        .then(data => res.status(201).json(data))
        .catch(error => res.status(404).send(error));
    },
    deleteSingleFundingOption: (req, res) => {
      // This callback would pull the cardId from the request..
      // ..and check to see if the payment option exists in the DB.
      // If it doesn't, it would send back error 404.
      // Otherwise it would delete the existing info for that cardId..
      // ..and send back a 204 status code (with no body).
      Promise.resolve('would only send back a message if there was an error')
        .then(() => res.status(204).end())
        .catch(error => res.status(404).send(error));
    },
  },
};

module.exports = controller;
