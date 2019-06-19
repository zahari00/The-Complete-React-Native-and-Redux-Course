const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: 'Monday',
    loading: false,
    error: '',
    employees: {}
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
        case 'employee_change':
            return setState(state, [payload.name], [payload.value]);

        case 'employee_saved':
            return setState(state, ['error', 'loading'], ['', false])

        case 'employee_loading':
            return setState(state, ['error', 'loading', 'name', 'phone', 'shift'], ['', false, '', '', 'Monday']);

        case 'employee_error':
            return setState(state, ['error', 'loading'], ['Error saving employee!', false])

        case 'fetch_employees':
            return setState(state, ['employees'], [payload])


        default:
            return state
    }
}