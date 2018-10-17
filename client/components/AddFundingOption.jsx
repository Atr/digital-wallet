import React from 'react';

// Would need to add validation to these fields.

// Note the 'Add' button at the bottom doesn't do anything currently.
// In practice, I would have a function that would take the component's current state,..
// ..format it into an object, then send a post request to the correct route with userId..
// ..(which would need to be handed down as a prop but currently isn't) in order to..
// ..add the funding option to the database.

class AddFundingOption extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      firstname: '',
      lastname: '',
      cardtype: 'American Express',
      cardnum: '',
      cardexpiry: '',
      cardcsc: '',
    };
  }

  handleInputChange(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { changeToPage } = this.props;
    const { firstname, lastname, cardtype, cardnum, cardexpiry, cardcsc } = this.state;

    return (
      <div className="add-funding-option">
        <div>
          <button type="button" onClick={() => { changeToPage('home'); }}>
            &lt;
          </button>
          <p> Add debit or credit card </p>
        </div>
        <form className="fc fd-c">
          <div className="add-funding-option-name fc">
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="First name"
              value={firstname}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Last name"
              value={lastname}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="add-funding-option-card-info fc fd-c">
            <div className="card-number-and-type fc fd-c">
              <select value={cardtype} name="cardtype" id="cardtype" onChange={this.handleInputChange}>
                <option value="American Express">American Express</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="Discover">Discover</option>
              </select>
              <input
                type="text"
                name="cardnum"
                id="cardnum"
                placeholder="Card Number"
                value={cardnum}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="card-expiry-and-csc fc">
              <div className="card-expiry">
                <label htmlFor="cardexpiry">
                  Expires:
                  <input
                    type="text"
                    name="cardexpiry"
                    id="cardexpiry"
                    value={cardexpiry}
                    onChange={this.handleInputChange}
                  />
                </label>
              </div>
              <div className="card-csc">
                <label htmlFor="cardcsc">
                  CSC:
                  <input
                    type="text"
                    name="cardcsc"
                    id="cardcsc"
                    value={cardcsc}
                    onChange={this.handleInputChange}
                  />
                </label>
              </div>
            </div>
          </div>
          <div>
            <input type="button" value="add" />
          </div>
        </form>
      </div>
    );
  }
}

export default AddFundingOption;
