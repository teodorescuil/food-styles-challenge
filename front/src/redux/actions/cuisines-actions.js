export const SET_CUISINES = 'SET_CUISINES';
export const SET_CURRENT_CUISINE = 'SET_CURRENT_CUISINE';

export const setCuisines = cuisines => ({
    type: SET_CUISINES,
    payload: cuisines
});

export const setCurrentCuisine = cuisine => ({
    type: SET_CURRENT_CUISINE,
    payload: cuisine
});
