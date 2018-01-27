import React from 'react';
import ReactDOM from 'react-dom';
import Markdown from './Markdown';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Markdown />
  ,
  document.getElementById('root'));
registerServiceWorker();
