import React from 'react';
import ReactDOM from 'react-dom';
import Markdown from './Markdown';
import Form from './Form'
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// Redux
import { Provider } from 'react-redux';
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Form />
    {/* <Markdown /> */}
  </Provider>
  ,
  document.getElementById('root'));
registerServiceWorker();
