import axios from 'axios';

//********ACTION TYPES********
export const GET_ITEMS = 'GET_ITEMS';
export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const ITEMS_LOADING = 'ITEMS_LOADING';


//********ACTION CREATORS********

//GETS INVOKED FROM THE COMPONENT
//THEN DISPATCHES THE ACTION TO THE REDUCER
//REDUCER LISTENS FOR THE 'TYPE' OF ACTION

//ACTIONS ONLY DESCRIBE WHAT HAPPENED
//BUT DOES NOT MAKE ACTUAL CHANGES TO THE STATE
export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get('/api/items')
        .then(res => 
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            })
        )
};

export const addItem = (item) => dispatch => {
    axios
        .post('/api/items', item)
        .then(res => 
            dispatch({
                type: ADD_ITEM,
                payload: res.data
            })
        )
};

export const deleteItem = (id) => dispatch => {
    axios
        .delete(`/api/items/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_ITEM,
                payload: id
            })    
        )
};

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}