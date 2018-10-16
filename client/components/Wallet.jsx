import React from 'react';

import FundingOptionsSection from './FundingOptionsSection';
import AddFundingOption from './AddFundingOption';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    // function bind area

    this.state = {
      page: 'hme',
    };
  }

  render() {
    let componentToRender;
    const { page } = this.state;
    page === 'home' ? componentToRender = <FundingOptionsSection /> : componentToRender = <AddFundingOption />;

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
