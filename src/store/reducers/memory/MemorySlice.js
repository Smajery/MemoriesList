import {createSlice} from "@reduxjs/toolkit";
import img from "../../../img/wine.png";

const initialState = {
    categoryItems: [
        {id: 1, name: 'Вино 1', img: img, category: 'Вина'},
        {id: 2, name: 'Вино 2', img: img, category: 'Вина'},
        {id: 3, name: 'Вино 3', img: img, category: 'Вина'},
        {id: 4, name: 'Вино 4', img: img, category: 'Вина'},
        {id: 5, name: 'Вино 5', img: img, category: 'Вина'},
        {id: 6, name: 'Вино 6', img: img, category: 'Вина'},
        {id: 7, name: 'Ігра 1', img: img, category: 'Ігри'},
        {id: 8, name: 'Ігра 2', img: img, category: 'Ігри'},
        {id: 9, name: 'Ігра 3', img: img, category: 'Ігри'},
        {id: 10, name: 'Ігра 4', img: img, category: 'Ігри'},
        {id: 11, name: 'Ігра 5', img: img, category: 'Ігри'},
        {id: 12, name: 'Ігра 6', img: img, category: 'Ігри'},
    ],
    categories: [
        {id: 1, name: 'Вина'},
        {id: 2, name: 'Ігри'},
        {id: 3, name: 'Фільми'},
    ],
    selectedCategory: {},
}
export const memorySlice = createSlice({
    name: 'memory',
    initialState,
    reducers: {
        setSelectedCategory(state, action) {
            state.selectedCategory = action.payload
        },
        setSelectedCategoryName(state, action) {
            state.selectedCategory.name = action.payload
        },
        setCategoryName(state, action) {
            for (let i = 0; i < state.categories.length; i++){
                if(state.categories[i].id === state.selectedCategory.id){
                    state.categories[i].name = action.payload
                }
            }
        },
        addCategory(state, action) {
            state.categories = [...state.categories, action.payload]
        },
    }
})
export default memorySlice.reducer