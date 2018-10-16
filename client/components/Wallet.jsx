import React from 'react';

import FundingOptionsSection from './FundingOptionsSection';
import AddFundingOption from './AddFundingOption';
import EditFundingOption from './EditFundingOption';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.changeToAddFundingOptionPage = this.changeToAddFundingOptionPage.bind(this);

    this.state = {
      page: 'addFundingOption',
      fundingOptions: [],
    };
  }

  componentDidMount() {

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

    this.setState({
      fundingOptions: testData,
    });
  }

  changeToAddFundingOptionPage() {
    this.setState({
      page: 'addFundingOption',
    });
  }

  render() {
    let componentToRender;
    const { page, fundingOptions } = this.state;
    if (page === 'addFundingOption') {
      componentToRender = (
        <AddFundingOption />
      );
    } else if (page === 'editFundingOption') {
      componentToRender = (
        <EditFundingOption />
      );
    } else {
      componentToRender = (
        <FundingOptionsSection
          fundingOptions={fundingOptions}
          changeToAddFundingOptionPage={this.changeToAddFundingOptionPage}
        />
      );
    }

    return (
      <div className="wallet fc fd-c jc-sa ai-c test-1">
        <div className="title">
          <h1> Wallet </h1>
        </div>
        {componentToRender}
      </div>
    );
  }
}

export default Wallet;
