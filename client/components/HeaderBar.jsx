import React from 'react';

const HeaderBar = ({ changeToAddFundingOptionPage }) => (
  <div className="header-bar test-3">
    <button type="button" onClick={changeToAddFundingOptionPage} >    
      Add
    </button>
    <button type="button" onClick={() => { console.log('Manage button not yet functional')}}>
      Manage
    </button>
  </div>
);

export default HeaderBar;
