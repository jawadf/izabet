import _ from 'lodash';

export default (state = [], action) => {
    switch(action.type) {
        case 'GET_USER_VEHICLES':
            return {...state, ...action.payload };
        case 'DELETE_VEHICLE':
            return _.filter(state, { 'id': action.payload.id });
        default: 
            return state;
    }
}