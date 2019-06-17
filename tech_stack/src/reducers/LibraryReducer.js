import data from './libraries.json';

export default (state = data, action) => {
    console.log('Library reducer', action)
    switch (action.type) {
        default:
            return state
    }
}