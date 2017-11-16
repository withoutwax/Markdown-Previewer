import React from 'react';
import ReactDOM from 'react-dom';
import Markdown from './Markdown';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render(
  <div className="row">
    <Markdown />
  </div>
  ,
  document.getElementById('root'));
registerServiceWorker();
