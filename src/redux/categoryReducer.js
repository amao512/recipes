import { data } from "../data/foods";

const initialState = {
    categories: data.categories,
}

const categoryReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default categoryReducer;