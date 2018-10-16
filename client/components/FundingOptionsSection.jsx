import React from 'react';

import HeaderBar from './HeaderBar';
import FundingOption from './FundingOption';

const FundingOptionsSection = ({ fundingOptions }) => (
  <div className="funding-options-section test-2">
    <HeaderBar />
    {fundingOptions.map(option => <FundingOption option={option} key={option.cardId} />)}
  </div>
);

export default FundingOptionsSection;
