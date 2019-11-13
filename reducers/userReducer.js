
export default (state = { result: null}, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {...state, result : action.payload };
        case 'LOGOUT':
            return {...state, result : null };
        case 'REGISTER':
            return {...state, result : action.payload };
        default: 
            return state; 
    }
}