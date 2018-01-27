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

const store = createStore(reducers);

function test() {
  console.log("YES!");
}

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Form onSubmit={test}/>
      <Markdown />
      <Values form="simple" />
    </div>
  </Provider>
  ,
  document.getElementById('root'));
registerServiceWorker();
