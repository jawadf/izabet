
export default (state = { result: null}, action) => {
    switch(action.type) {
        case 'CHECK_TICKETS':
            return {...state, result : action.payload };
        default: 
            return state; 
    }
}