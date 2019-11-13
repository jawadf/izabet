import _ from 'lodash';


export default (state = { list: [] }, action) => {
    switch(action.type) {
        case 'GET_USER_VEHICLES':
            return {...state, list: [...action.payload ]};
        case 'DELETE_VEHICLE':
            // return {...state, list: { ...action.payload }};
            // return _.filter(state, { 'id': action.payload.id });
            return _.filter(state.list, { 'id': action.payload.id });
        case 'CLEAN_VEHICLES':
            return {...state, list: [] };
        default:
            return state;
    }
}
