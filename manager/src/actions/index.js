import firebase from 'firebase';

export const change = (value, name) => {
    return {
        type: 'object_change',
        payload: {
            name: name,
            value: value
        }
    }
}

export const logIn = (email, password) => {
    return (dispatch) => {
        // before send set loading
        dispatch({
            type: 'log_in',
            payload: false
        })

        firebase.auth().signInWithEmailAndPassword(email, password).then(user => dispatch({
            type: 'log_in',
            payload: user
        })).catch((e) => dispatch({
            type: 'log_in',
            payload: {
                error: e
            }
        }));
    }
}