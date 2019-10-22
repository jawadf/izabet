import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import testReducer from './testReducer';
import redirectReducer from './redirectReducer';

export default combineReducers({
    test: testReducer,
    redirect: redirectReducer,
    form: formReducer
});