
export default (state = { result: null}, action) => {
    switch(action.type) {
        case 'GET_USER_VEHICLES':
            return {...state, result : action.payload };
        default: 
            return state; 
    }
}