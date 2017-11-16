import React from 'react';
import ReactDOM from 'react-dom';
import Markdown from './Markdown';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render(
    <Markdown />
  ,
  document.getElementById('root'));
registerServiceWorker();
