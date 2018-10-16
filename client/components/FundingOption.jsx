import React from 'react';

const FundingOption = ({ option }) => (
  <div className="funding-option test-4">
    <div className="funding-option-brand">
      <p>
        {option.cardBrand}
      </p>
    </div>
    <div className="funding-option-digits">
      <p>
        {option.cardLastDigits}
      </p>
    </div>
  </div>
);

export default FundingOption;
