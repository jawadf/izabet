
export default (state = { shouldRedirect: false }, action) => {
    switch(action.type) {
        case 'REDIRECT_FALSE':
            return {...state, shouldRedirect : false };
        case 'REDIRECT_TRUE':
            return {...state, shouldRedirect : true };
        case 'REFRESH':
            return {...state, shouldRedirect : !state.shouldRedirect };
        default:
            return state;
    }
}