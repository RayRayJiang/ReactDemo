const initState = {
    token: localStorage.getItem('token')
}

function TokenReducer(state=initState, action){
    const { type, payload } = action;
    switch (type) {
        case 'changeToken':
            const newState = Object.assign({}, state);
            newState.token = payload;
            return newState;
        default:
            return state;
    }
}


export { TokenReducer }