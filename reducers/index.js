import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ticketReducer from './ticketReducer';
import addVehicleReducer from './addVehicleReducer';
import vehiclesReducer from './vehiclesReducer';
import redirectReducer from './redirectReducer';

export default combineReducers({
    tickets: ticketReducer,
    addVehicle: addVehicleReducer,
    redirect: redirectReducer,
    vehicles: vehiclesReducer,
    form: formReducer
});