import React from 'react';
import ReactDOM from 'react-dom';
import Markdown from './Markdown';
import Form from './Form'
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Values } from 'redux-form-website-template';
import reducers from './reducers';
import test from './actions'

const store = createStore(reducers);

function test02() {
  console.log("test02: onSubmit");
  console.log(store);
  console.log(store.form);
}

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Form onChange={test} onSubmit={test02}/>
      <Markdown />
      <Values form="markdownForm" />
    </div>
  </Provider>
  ,
  document.getElementById('root'));
registerServiceWorker();
