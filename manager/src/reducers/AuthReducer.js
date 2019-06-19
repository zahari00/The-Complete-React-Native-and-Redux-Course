const INITIAL_STATE = {
    email: 'test@test.com',
    password: 'test1234',
    loading: false,
    error: '',
    user: null
}

function setState(oldState, namesArr, valuesArr) {
    let newState = { ...oldState };

    for (let i = 0; i < namesArr.length; i++) {
        newState[namesArr[i]] = valuesArr[i]
    }

    return newState;
}

export default (state = INITIAL_STATE, action) => {
    const { payload, type } = action;

    switch (type) {
        case 'object_change':
            return setState(state, [payload.name], [payload.value]);

        case 'log_in':
            
            if (!payload) {
                return setState(state, ['error', 'loading'], ['', true]);

            } else if (payload.error) {
                return setState(state, ['error', 'loading'], [payload.error.message ? payload.error.message : payload.error, false]);
            }
            return setState(state, ['user', 'loading'], [payload, false]);

        default:
            return state
    }
}