import { combineReducers } from 'redux';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../actions/itemActions';

const initialState = {
    items: [],
    loading: false
};

//LISTENS FOR ACTION 'TYPE'
//CHANGES STATE DEPENDING ON ACTION

//IT SHOULD CALCULATE THE NEXT STATE AND RETURN IT
//No surprises. No side effects. No API calls. No mutations. Just a calculation.
function itemReducer(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false
            };
        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items]
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            };        
        case ITEMS_LOADING:
            return {
                ...state,
                loading:true
            };
        default:
            return state
    }
}

//THE ROOT REDUCER NEEDED TO CREATE STORE
//CAN COMBINE MULTIPLE REDUCERS IF NEEDED
const rootReducer = combineReducers({
    item: itemReducer
});

export default rootReducer