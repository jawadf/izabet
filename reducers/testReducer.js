
export default (state = { result: null}, action) => {
    switch(action.type) {
        case 'REQUEST_ACCOUNT':
            return {...state, result : action.payload };
        case 'UPDATE_TOKEN':
            return {...state, result : action.payload };
        case 'CHECK_TICKETS':
            return {...state, result : action.payload };
        case 'ADD_VEHICLE':
            return {...state, result : action.payload };
        default: 
            return state; 
    }
}