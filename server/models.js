// We would require a connection to our database here
// For example, we'd call it 'db'
// I would write this but ran out of time unfortunately!

// I'm using this testData object for simplicity
// It's in place of what I would return from the datbase
const testData = [
  {
    cardId: 'johndoe0697',
    cardBrand: 'American Express',
    cardLastDigits: '0697',
  },
  {
    cardId: 'johndoe2274',
    cardBrand: 'Visa',
    cardLastDigits: '2274',
  },
];

const models = {
  users: {
    getFundingOptions: userId => {
      // NOTE: In practice, we'd run a DB query here.
      // Something like the following if we were using MySQL:
      // const queryStr =`SELECT id, lastFourDigits, brand \
      //                 FROM card WHERE userId = ${userId}`;
      // db.query(queryStr, (err, data) => {
      //   if (err) {
      //     return Promise.reject(new Error('User does not exist'));
      //   }
      //   return Promise.resolve(data);
      // });
      
      // Instead, I'm just sending back our testData object for demonstration purposes
      return Promise.resolve(testData);
    },
    // There would be additional queries here for each of the other routes in our controller file
  },
};

module.exports = models;
