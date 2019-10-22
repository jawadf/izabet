
export default (state = { shouldRedirect: false }, action) => {
    switch(action.type) {
        case 'REDIRECT_FALSE':
            return {...state, shouldRedirect : false };
        case 'REDIRECT_TRUE':
            return {...state, shouldRedirect : true };
        default:
            return state;
    }
}