import { createStore } from 'redux'


function reducer (state = {}, action)  {
    switch (action.type) {
        case 'SET_USER':
            return action.payload

        default:
            return state;
    }
}


const store = createStore(reducer);

export default store;
