
export default (state = { result: null}, action) => {
    switch(action.type) {
        case 'ADD_VEHICLE':
            return {...state, result : action.payload };
        
        
        default: 
            return state; 
    }
}