import { data } from "../data/foods";

const CHANGE_FOOD_CATEGORY = 'CHANGE_FOOD_CATEGORY';
const ALL_FOOD_CATEGORY = 'ALL_FOOD_CATEGORY';

const initialState = {
    food: []
}

const foodsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ALL_FOOD_CATEGORY:
            return { ...state, food: data.food }
        case CHANGE_FOOD_CATEGORY:
            return {
                ...state,
                food: data.food.filter(f => f.category === action.categorySlug)
            }
        default:
            return state; 
    }
}

export const changeFoodCategory = (categorySlug, data) => ({ type: CHANGE_FOOD_CATEGORY, categorySlug, data });
export const allFoodCategory = () => ({ type: ALL_FOOD_CATEGORY });


export default foodsReducer;