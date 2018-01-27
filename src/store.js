import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

const reducers = combineReducers({
  form: reduxFormReducer,
});

const store = createStore(reducers);

export default store;
