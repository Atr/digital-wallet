import React from 'react';
import ReactDOM from 'react-dom';

import Wallet from './components/Wallet';

import './src/styles/styles.css';

// In practice, this Id might be provided as part of authentication
const exampleUserId = 82374;

ReactDOM.render(<Wallet userId={exampleUserId} />, document.getElementById('app'));
