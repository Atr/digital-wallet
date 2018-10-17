import React from 'react';
import axios from 'axios';

import FundingOptionsSection from './FundingOptionsSection';
import AddFundingOption from './AddFundingOption';
import EditFundingOption from './EditFundingOption';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.changeToAddFundingOptionPage = this.changeToAddFundingOptionPage.bind(this);
    this.changeToPage = this.changeToPage.bind(this);
    this.fetchUserFundingOptions = this.fetchUserFundingOptions.bind(this);

    const { userId } = this.props;

    this.state = {
      page: 'home',
      fundingOptions: [],
      userId,
    };
  }

  componentDidMount() {
    const { userId } = this.state;
    this.fetchUserFundingOptions(userId);
  }

  fetchUserFundingOptions(userId) {
    axios.get(`/api/users/${userId}/fundingoptions`)
      .then((response) => {
        const { data } = response;
        this.setState({
          fundingOptions: data,
        });
      })
      .catch((error) => {
        // Would have some kind of error handling in the application
      });
  }

  changeToAddFundingOptionPage() {
    this.setState({
      page: 'addFundingOption',
    });
  }

  changeToPage(pageTitle) {
    this.setState({
      page: pageTitle,
    });
  }

  render() {
    let componentToRender;
    const { page, fundingOptions } = this.state;
    if (page === 'addFundingOption') {
      componentToRender = (
        <AddFundingOption
          changeToPage={this.changeToPage}
        />
      );
    } else if (page === 'editFundingOption') {
      componentToRender = (
        <EditFundingOption />
      );
    } else {
      componentToRender = (
        <FundingOptionsSection
          fundingOptions={fundingOptions}
          changeToPage={this.changeToPage}
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
