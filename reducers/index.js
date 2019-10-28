import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import testReducer from './testReducer';
import vehiclesReducer from './vehiclesReducer';
import redirectReducer from './redirectReducer';

export default combineReducers({
    test: testReducer,
    redirect: redirectReducer,
    vehicles: vehiclesReducer,
    form: formReducer
});