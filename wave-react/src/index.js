import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Provider from 'react-redux/es/components/Provider';
import store from './store'

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))