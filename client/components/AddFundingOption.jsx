import React from 'react';

// Would need to add validation to these fields.
// Need to make sure 'submit' doesn't send a get request with this information.

const AddFundingOption = props => (
  <div className="add-funding-option">
    <p> Add debit or credit card </p>
    <form className="fc fd-c">
      <div className="add-funding-option-name fc">
        <input type="text" name="firstname" id="firstname" placeholder="First name" />
        <input type="text" name="lastname" id="lastname" placeholder="Last name" />
      </div>
      <div className="add-funding-option-card-info fc fd-c">
        <div className="card-number-and-type fc fd-c">
          <select name="cards" id="cards">
            <option value="American Express">American Express</option>
            <option value="Visa">Visa</option>
            <option value="MasterCard">MasterCard</option>
            <option value="Discover">Discover</option>
          </select>
          <input type="text" name="cardnum" id="cardnum" placeholder="Card Number" />
        </div>
        <div className="card-expiry-and-csc fc">
          <div className="card-expiry">
            <label htmlFor="cardexpiry">
              Expires:
              <input type="text" name="cardexpiry" id="cardexpiry" />
            </label>
          </div>
          <div className="card-csc">
            <label htmlFor="cardcsc">
              CSC:
              <input type="text" name="cardcsc" id="cardcsc" />
            </label>
          </div>
        </div>
      </div>
      <div>
        <button type="submit" value="submit">
          <p> Add </p>
        </button>
      </div>
    </form>
  </div>
);

export default AddFundingOption;
