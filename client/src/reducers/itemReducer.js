import { combineReducers } from 'redux';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/itemActions';

import uuid from 'uuid';

const initialState = {
    items: [
        { id: uuid(), name: 'Eggs' },
        { id: uuid(), name: 'Milk' },
        { id: uuid(), name: 'Steak' },
        { id: uuid(), name: 'Candy' }
    ]
}

//LISTENS FOR ACTION 'TYPE'
//CHANGES STATE DEPENDING ON ACTION

//IT SHOULD CALCULATE THE NEXT STATE AND RETURN IT
//No surprises. No side effects. No API calls. No mutations. Just a calculation.
function itemReducer(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
        default:
            return state;
    }
}

//THE ROOT REDUCER NEEDED TO CREATE STORE
//CAN COMBINE MULTIPLE REDUCERS IF NEEDED
const rootReducer = combineReducers({
    item: itemReducer
});

export default rootReducer