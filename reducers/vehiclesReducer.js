
export default (state = {}, action) => {
    switch(action.type) {
        case 'GET_USER_VEHICLES':
            return {...state, ...action.payload };
        default: 
            return state;
    }
}