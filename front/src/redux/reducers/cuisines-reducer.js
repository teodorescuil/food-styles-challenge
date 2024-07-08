import {SET_CUISINES} from '../actions/cuisines-actions';
import {SET_CURRENT_CUISINE} from '../actions/cuisines-actions';

const initialState = {
    cuisines: [],
    currentCuisine: null
};

const cuisinesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CUISINES:
            return {
                ...state,
                cuisines: action.payload
            }
        case SET_CURRENT_CUISINE:
            return {
                ...state,
                currentCuisine: action.payload
            }
        default: 
            return state;
    }
}

export default cuisinesReducer;
