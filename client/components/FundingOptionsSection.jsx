import React from 'react';

import HeaderBar from './HeaderBar';
import FundingOption from './FundingOption';

const FundingOptionsSection = ({ fundingOptions, changeToAddFundingOptionPage }) => (
  <div className="funding-options-section test-2">
    <HeaderBar changeToAddFundingOptionPage={changeToAddFundingOptionPage} />
    {fundingOptions.map(option => <FundingOption option={option} key={option.cardId} />)}
  </div>
);

export default FundingOptionsSection;
