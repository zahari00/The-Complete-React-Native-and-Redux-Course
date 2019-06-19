import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const changeEmployee = (value, name) => {
    return {
        type: 'employee_change',
        payload: {
            name: name,
            value: value
        }
    }
}

export const createEmployee = (data) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        // before send set loading
        dispatch({
            type: 'employee_loading',
            payload: false
        })

        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push(data).then(data => {
                dispatch({
                    type: 'employee_saved',
                    payload: false
                });
                Actions.pop();
            }).catch(erorr => {
                dispatch({
                    type: 'employee_error',
                    payload: false
                })
            })
    }
}

export const employeesFetch = (data) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        // before send set loading
        dispatch({
            type: 'employee_loading',
            payload: false
        })

        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({
                    type: 'fetch_employees',
                    payload: snapshot.val()
                })
            })
    }
}

export const editEmployee = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        // before send set loading
        dispatch({
            type: 'employee_loading',
            payload: false
        })
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({ name, phone, shift }).then(data => {
                dispatch({
                    type: 'employee_saved',
                    payload: false
                });
                Actions.pop();
            }).catch(erorr => {
                dispatch({
                    type: 'employee_error',
                    payload: false
                })
            })
    }
}

export const fireEmployee = (uid) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        // before send set loading
        dispatch({
            type: 'employee_loading',
            payload: false
        })
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .remove().then(() => Actions.pop())
            .catch(erorr => {
                dispatch({
                    type: 'employee_error',
                    payload: false
                })
            })
    }
}