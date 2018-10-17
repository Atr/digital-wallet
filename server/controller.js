const controller = {
  user: {
    getFundingOptions: (req, res) => {
      // The Promise.resolve is just to test the controller/route setup
      // In reality, there would be a callback that would read from the database and return a promise.
      // Once it resolved, the .then and .catch would execute appropriately
      Promise.resolve('test working')
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).send(error));
    },
  },
};

module.exports = controller;
