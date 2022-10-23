import {createSlice} from "@reduxjs/toolkit";
import imgWine from "../../../img/wine.png";
import imgGame from "../../../img/game.png";

const initialState = {
    categoryItems: [
        {id: 1, name: 'Вино 1', img: imgWine, category: 1},
        {id: 2, name: 'Вино 2', img: imgWine, category: 1},
        {id: 3, name: 'Вино 3', img: imgWine, category: 1},
        {id: 4, name: 'Вино 4', img: imgWine, category: 1},
        {id: 5, name: 'Вино 5', img: imgWine, category: 1},
        {id: 6, name: 'Вино 6', img: imgWine, category: 1},
        {id: 7, name: 'Ігра 1', img: imgGame, category: 2},
        {id: 8, name: 'Ігра 2', img: imgGame, category: 2},
        {id: 9, name: 'Ігра 3', img: imgGame, category: 2},
        {id: 10, name: 'Ігра 4', img: imgGame, category: 2},
        {id: 11, name: 'Ігра 5', img: imgGame, category: 2},
        {id: 12, name: 'Ігра 6', img: imgGame, category: 2},
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